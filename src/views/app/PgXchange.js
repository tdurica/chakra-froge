// Chakra imports
import { Grid, } from '@chakra-ui/react';
// assets
import React from 'react';
// react icons
import PondNetworkVitals from './ponds/PondNetworkVitals.js';
import PondFrogeXDividends from './ponds/PondFrogeXDividends.js';
import {
  PondTpl_List,
  PondTpl_Spotlight,
  PondTpl_Spotlight2,
  PondTpl_Spotlight3, PondTpl_Wizard
} from './ponds/PondTemplates.js';

export default function PgXchange() {

  return (
    <>
      <PondTpl_List pondLink={['PgXchange','List of things']}/>
      <PondTpl_Wizard pondLink={['PgXchange','From Fiat']}/>
      <PondTpl_Wizard pondLink={['PgXchange','To Froge']}/>
    </>
  );
}
