import Web3 from 'web3';

import abiFrags from './abiFragments';
import addr from '../data/addresses.js';

import { ethers } from 'ethers';
import { olaToObject } from '../helpers/deep.js';
import { atom } from 'jotai';

import { useCrawlStore } from '../services/atoms.js';
import {
  getAmountOut, sMul, weiToUSD, sExp, _Mul, _Add, _Div, sRnd
} from '../helpers/math/zmath.mjs';

const web3 = new Web3(Web3.givenProvider);

function _sleep(ms) {//usage: await _sleep(5000);
  return new Promise(resolve => setTimeout(resolve, ms));
}
export async function evaluateTransaction(
  contract,  //: Contract | null,
  methodName,  //: string,
  args  //: Array<string | number | BigNumber>
) {
  try {
    const methods = contract.callStatic
    return await methods[methodName](...args)
  } catch (e) {
    console.log(e);return e;
  }
}
export const WETH = {
  balanceOf:async(acct)=>olaToObject(await call(addr.mainnet.WETH.ERC20,
    ['ERC20','balanceOf'], [acct])),
}
export const FX = {
  /** const { \_balance, \_xDivsAvailable, \_xDivsEarnedToDate, \_xDivsWithdrawnToDate,
  \_isAMMPair, \_isBlackListedBot, \_isExcludedFromRwds, \_isExcludedFromFees }
   = await FX.getAccount(addr); */
  getAccount:async(acct)=>readFX('getAccount', [acct]),
  balanceOf:async(acct)=>readFX('balanceOf', [acct]),
  xGetDivsAvailable:async(acct)=>readFX('xGetDivsAvailable', [acct]),
  xGetDivsEarnedToDate:async(acct)=>readFX('xGetDivsEarnedToDate', [acct]),
  xGetDivsWithdrawnToDate:async(acct)=>readFX('xGetDivsWithdrawnToDate', [acct]),
  /** const { \_hopThreshold, \_lqtyThreshold, \_lockerUnlockDate, \_xGasForClaim,
  \_xMinClaimableDivs, \_tradingEnabled, \_ttlFeePctBuys, \_ttlFeePctSells,
  \_ethPtnChty, \_ethPtnMktg,_tknPtnLqty, \_ethPtnLqty, \_ethPtnRwds }
   = await FX.getConfig(); */
  getConfig:async()=>readFX('getConfig', []),
  name:async()=>readFX('name', []),
  owner:async()=>readFX('owner', []),
  symbol:async()=>readFX('symbol', []),
  totalSupply:async()=>readFX('totalSupply', []),
  xGetDivsGlobalTotalDist:async()=>readFX('xGetDivsGlobalTotalDist', []),
  xTotalSupply:async()=>readFX('xTotalSupply', []),
  getUniV2Pair:async()=>readFX('getUniV2Pair', []),
  getConfigFormatTechLabels:async (rv=[]) => {
    const cfg = await FX.getConfig();
    for(let [k,v] of Object.entries(cfg)){rv.push(k+': '+v)}
    return rv;
  },
  getConfigFormatArrArr:async (rv=[]) => {
    const cfg = await FX.getConfig();
    for(let [k,v] of Object.entries(cfg)){rv.push([k,v])}
    return rv;
  },
}
export const FXP = {
  balanceOf:async()=>readFXP('UniswapV2Pair', []),
  token0:async()=>readFXP('token0', []),//FROGEX
  token1:async()=>readFXP('token1', []),//WETH
  getReserves:async()=> {
    const rsvFX = await FX.balanceOf(addr.mainnet.FROGEX.PAIR)
    const rsvWETH = await WETH.balanceOf(addr.mainnet.FROGEX.PAIR)
    const gRsvs = await readFXP('getReserves', [])
    console.log(gRsvs)
    const { reserve0,reserve1 } = gRsvs;
    console.log(rsvFX,rsvWETH,reserve0,reserve1)
    return [rsvFX,rsvWETH,reserve0,reserve1] //TODO: unburden multicall
  },
  getAmountOut:async(amountIn,nTokenIn)=> {
    //nTokenIn: 0 for sells, 1 for buys
    const [fx1,weth1,fx2,weth2] = await FXP.getReserves()
    const [reserveIn,reserveOut] = nTokenIn?[weth1,fx1]:[fx1,weth1]
    let amountInWithFee = _Mul(amountIn,997);
    let numerator = _Mul(amountInWithFee,reserveOut);
    let denominator = _Add(_Mul(reserveIn,1000),amountInWithFee);
    let amountOut = _Div(numerator, denominator);
    return amountOut;
  },
  getFxPrice:async()=> {
    let weiOut = await FXP.getAmountOut(1_000_000_000,0);
    await useCrawlStore.getState().fetch_ethPrice()
    return weiToUSD(weiOut,useCrawlStore.getState().ethPrice);
  },
}

export async function readFX(method, args=[]){
  return olaToObject(await call(addr.mainnet.FROGEX.ERC20,
    ['FrogeX',method],args))
}
export async function readFXP(method, args=[]){
  return olaToObject(await call(addr.mainnet.FROGEX.PAIR,
    ['UniswapV2Pair',method],args))
}
export async function claimFX(u_account, dataAndExecFn=(data,execFn)=>{}){
  // let _rewardWeiAvail = await call(addr.mainnet.FROGEX.ERC20,
  //   ['FrogeX','xGetDivsAvailable'],[u_account])
  let _rewardWeiAvail = sExp(.004324,18)
  await useCrawlStore.getState().fetch_fx_getConfig()
  const ucsgs = useCrawlStore.getState().fx_getConfigRaw
  const {_xMinClaimableDivs} = ucsgs
  const _ethPrice =  useCrawlStore.getState().ethPrice;
  const _fxPrice = await FXP.getFxPrice();
  const _rewardWeiAvailAsEth = sExp(_rewardWeiAvail,-18)
  const _xMinClaimableDivsAsEth = sExp(_xMinClaimableDivs,-18)
  const _rewardWeiAvailAsUSD = sRnd(sMul(_rewardWeiAvailAsEth,_ethPrice),-2)
  const _xMinClaimableDivsAsUSD = sRnd(sMul(_xMinClaimableDivsAsEth,_ethPrice),-2)
  const _requirementMet = _rewardWeiAvail>_xMinClaimableDivs
  dataAndExecFn({
    _ethPrice: _ethPrice,
    _fxPrice: _fxPrice,
    _rewardWeiAvail: _rewardWeiAvail,
    _rewardWeiAvailAsUSD: _rewardWeiAvailAsUSD,
    _rewardWeiAvailAsEth: _rewardWeiAvailAsEth,
    _xMinClaimableDivs: _xMinClaimableDivs,
    _xMinClaimableDivsAsUSD: _xMinClaimableDivsAsUSD,
    _xMinClaimableDivsAsEth: _xMinClaimableDivsAsEth,
    _requirementMet: _requirementMet,
  },(_requirementMet?execClaim:()=>{}))
  async function execClaim(){
    return await stx({
      from:u_account,to: addr.mainnet.FROGEX.ERC20,
      path: ['FrogeX','xClaim'],})
  }
}
export async function call(address,path,args=[]){
  const fnAbi = abiFrags[path[0]].find(v=>v.name===path[1])
  const failRV = fnAbi.outputs.length<2? '' : fnAbi.outputs.map(v=>'');
  if(!['pure','view'].includes(fnAbi.stateMutability)){
    console.error('call() should only be used with pure/view methods')
    return failRV;
  }
  if(web3==null||web3.eth==null){return failRV;}
  const _encodeFunctionCall = web3.eth.abi.encodeFunctionCall(fnAbi, args);
  let _tx = {to: address, data: _encodeFunctionCall};
  const rcpt = await web3.eth.call(_tx)
    .catch((err)=>{console.error(`in call():`,err)})
  return decodeAndConvertBcRv(rcpt, fnAbi)
}

const decodeAndConvertBcRv = (bcRv, fnAbi)=>{
  try{
    if(fnAbi.outputs.length===1){
      return web3.eth.abi.decodeParameter(fnAbi.outputs[0].type, bcRv);
    }else if(fnAbi.outputs.length>1){
      //converts numbered object to object-like-array
      const numdObj = web3.eth.abi.decodeParameters(fnAbi.outputs.map(v=>v.type), bcRv);
      const outputOLA = [];
      for (let i=0;i<fnAbi.outputs.length;i++) {
        outputOLA.push(numdObj[i]);
        outputOLA[fnAbi.outputs[i].name] = numdObj[i]
      }
      return outputOLA;
    }else{console.error(`Unexpected zero outputs for ${fnAbi.name} `,bcRv)}
  }
  catch(err){
    console.error(`Reciept would not process for ${fnAbi.name}`,bcRv,err);
    return null
  }
}


/**
 * Abstraction of web3's .call() and .sendTransaction()
 *
 * @function stx()
 * @notice stx is an acronym for "sendTransaction"
 * @param {String?} from - signer address for the call
 * @param {String} to - destination address of the call
 * @param {Array?}  path - performs lookup on abiFragments object.
 * @param {Array?}  args - matches expected inputs from abi, when applicable
 * @param {String?} value - amount of ETH to send with tx, when applicable
 * @param {Function?} onHash - fired when the hash is available
 * @param {Function?} onRcpt - fired when the receipt is available
 * @param {Function?} onConf - fired as the confirmation number rises
 * @param {Function?} onErr - fired on error
 *
 * @promise:
 * - always resolves (never rejects) with either the expected outputs,
 *     or null in place of the expected outputs.
 * - We return null for failures because false is a valid return
 * - We always resolve to escape the need for .catch() on the implementation side
 *     and also so that we can always expect to spread an array matching the
 *     ABI's outputs, even when it fails Eg. const [a,b,c] = await stx({...stxParams})
 * @returns {Promise<Boolean|String|String[]|null|null[]>}
 * - when an ABI has 0 outputs, resolves true or null
 * - when an ABI has 1 output, resolves string or null
 * - when an ABI has >1 output, resolves an array of strings or an array of nulls
 */
export async function stx({from,to,path,value,args=[],
  onHash=()=>{}, onRcpt=()=>{}, onConf=()=>{}, onErr=()=>{}}) {
  if(!path && value){//basic send ETH
    return await STX({ from: from, to: to, value: value })
  }
  const fnAbi = abiFrags[path[0]].find(v=>v.name===path[1])
  if(!fnAbi){console.error(`${path} had no matching Abi`)}
  const failRV = fnAbi.outputs.length<2? '' : fnAbi.outputs.map(v=>'');

  if(['pure','view'].includes(fnAbi.stateMutability)){
    return await call(to,path,args).then().catch()
  }
  if(!['nonpayable', 'payable'].includes(fnAbi.stateMutability)){
    console.error('stx could not find stateMutability as payable/nonpayable')
    return failRV;
  }

  if(web3==null||web3.eth==null){return failRV;}
  let _tx = {};
  const _encodeFunctionCall = web3.eth.abi.encodeFunctionCall(fnAbi, args);
  _tx.to = to;
  _tx.data = _encodeFunctionCall;
  if(value){_tx.value = value;}
  if(from){
    _tx.from = from
    let nonce = await web3.eth.getTransactionCount(from, 'latest');
    _tx.nonce = nonce++;
  }

  _tx.gas = await web3.eth.estimateGas(_tx).then((res)=>{
    console.log(`[${path}] estGas: `,res)
    return res;
  }).catch((err)=>{
    console.log(`[${path}] estGas failed: `,err);
    return null;
  });
  if(_tx.gas == null){return failRV;}

  const res = await STX(_tx).then(r=>r).catch(e=>e)
  return res;
  async function STX (txPayload) {
    if(web3==null||web3.eth==null){return null;}
    return web3.eth.sendTransaction(txPayload)
    .on('transactionHash', (hash)=>{
      console.log(`TxHash`, hash); onHash(hash);
    })
    .on('receipt', async (rcpt)=>{
      console.log(`receipt`, rcpt);
      try{
        const bcOut = decodeAndConvertBcRv(rcpt.rawData, fnAbi)
        onRcpt(rcpt, bcOut);
      }catch(e){
        onRcpt(rcpt, null, e);
      }
      return rcpt;
    })
    .on('confirmation', (confNum, rcpt)=>{
      console.log(`confirmation #`, confNum);
      onConf(confNum, rcpt)
    })
    .on('error', (err)=>{
      console.error(`STXerr `,err);
      onErr(err);
      return err;
    })
    .then((final)=>{
      console.error(`STXfinal `,final);
      return final;
    });

  }
}
