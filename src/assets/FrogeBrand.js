import { createIcon } from "@chakra-ui/icons";
import { chakra,Image } from '@chakra-ui/react';
import React from 'react';
// froge-title-logo-ff-color-512.png
// froge-logo-512.png

export const FrogeLogoPng = ({ full = false, ...rest })=>(<Image {...rest} src={'assets/logos/froge-logo-512.png'}/>)
export const FrogeTitleLogoColorPng = (rest)=>(<Image {...rest} src={'assets/logos/froge-title-logo-ff-color-512.png'}/>)

export const CITxStatusGreen = createIcon({
  viewBox: "0 0 24 24",
  path: (<>
      <polyline points="7 14 11 20 19 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
  </>),
});
export const CITxStatusYellow = createIcon({
  displayName: "FrogeLogoSvg",
  viewBox: "0 0 24 24",
  path: (<>
      <circle cx="12" cy="20" r="2" fill="currentColor"/>
      <line x1="12" y1="4" x2="12" y2="15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
    </>
  ),
});
export const CITxStatusRed = createIcon({
  displayName: "FrogeLogoSvg",
  viewBox: "0 0 24 24",
  path: (<>
      <line x1="7" y1="7" x2="17" y2="17" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
      <line x1="7" y1="17" x2="17" y2="7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
    </>
  ),
});
export const FrogeLogoSvg = createIcon({
  displayName: "FrogeLogoSvg",
  viewBox: "0 0 460 460",
  path: (
      <g id="official-original">
        <g id="shaded_bits">
          <g id="shade_primary">
            <path
              d="M116.56,432.52H54C22.18,375.57,23.61,347,30.57,333.07a30.06,30.06,0,0,1,15.59-14.42c1,3.17,2.14,6.56,3.52,10.18C61.62,360.21,84.09,395,116.56,432.52Z"
              fill="#91c73e"/>
            <path
              d="M422.32,198.52c.14,7.41-.87,22.85-8.24,48.29-9.93,34.32-33.78,94.25-90.92,185.71H270.53c13-16.57,42.9-59.44,36.12-96.23,0,0-8.07,38.29-55.81,96.23H215.47c-38.38-58.47-44.88-97-44.88-97-5.44,36.77,17.95,79.52,28.85,97H138.22C94,383.62,74.3,347.12,65.58,325c-6.66-16.88-8.07-28.1-8.32-33.4,12.21-7.63,54.88-33.15,113.58-55.86C233.38,211.53,327.21,185.76,422.32,198.52Z"
              fill="#91c73e"/>
            <path
              d="M429.35,305.08c2.19,2.36,5.56,9,3.6,26.69-1.34,12.23-5,27.56-10.82,45.58-7.67,23.7-17.17,45.82-21.33,55.17H342.24c29.2-47.4,52-90.24,68.15-128.09C417.45,302.16,425.49,300.92,429.35,305.08Z"
              fill="#91c73e"/>
            <path
              d="M345.23,117.05c7.11,4.5,18.92,18.47,22.45,61.83A489.58,489.58,0,0,0,288,186a616.57,616.57,0,0,0-89.43,22.5A83.76,83.76,0,0,0,189,193.8c-5.84-7.09-12.35-11.93-19.21-14.45-7.31-2.67-36.12,7.58-40,14.14s-5.85,14.88-5.7,24.66a89.41,89.41,0,0,0,2.39,18.57c-12.86,5.81-24.46,11.48-34.61,16.71,13.12-43.88,44.51-88.5,58.78-107.34.57.84,1.15,1.67,1.75,2.48C164.16,164.45,180,173.2,197,173.2s32.85-8.75,44.59-24.63a85.76,85.76,0,0,0,12.34-24.26c8.39,18.13,25.07,30.51,44.24,30.51C319.8,154.82,338.27,139.05,345.23,117.05Z"
              fill="#91c73e"/>
            <path
              d="M228.55,45.53a73.71,73.71,0,0,1,12.86,31.22c-40.39-5.38-73,.5-89.47,4.7,1.61-13.61,6.28-26.1,13.54-35.92,8.6-11.65,19.8-18,31.53-18S220,33.88,228.55,45.53Z"
              fill="#91c73e"/>
            <path
              d="M298.18,56.78c13.89,0,25.86,10.21,31,24.76-25-4.8-48.26-2.33-62.15.18C272.22,67.07,284.22,56.78,298.18,56.78Z"
              fill="#91c73e"/>
          </g>
          <g id="shade_white">
            <path
              d="M318,96.18A128.51,128.51,0,0,1,332,98.73c-.45,22.08-15.43,39.87-33.77,39.87s-33.29-17.75-33.78-39.79a165,165,0,0,1,19.46-3,11.58,11.58,0,0,0-.55,3.53c0,7.85,7.87,14.21,17.57,14.21s17.57-6.36,17.57-14.21A11.54,11.54,0,0,0,318,96.18Z"
              fill="#fff"/>
            <path
              d="M242.72,93.32c-.2,17.32-5.21,33.49-14.17,45.61-8.6,11.64-19.79,18-31.54,18s-22.93-6.41-31.53-18c-8.08-10.93-12.95-25.15-14-40.54a205.28,205.28,0,0,1,34.09-6.31,13.16,13.16,0,0,0-1.22,5.52c0,8.81,8.84,16,19.74,16s19.73-7.14,19.73-16a13.31,13.31,0,0,0-1.64-6.38C228.77,91.59,235.63,92.26,242.72,93.32Z"
              fill="#fff"/>
            <path
              d="M168.69,196.89c6.78,3.47,11.31,11.43,14.38,17q-9.21,3.27-18.45,6.85c-8,3.09-15.63,6.21-23,9.33a70,70,0,0,1-1.34-12.14c-.07-5-.24-9.23,1.52-11.9C146.4,199.12,163.54,194.27,168.69,196.89Z"
              fill="#fff"/>
          </g>
          <g id="shade_dark">
            <path
              d="M414.08,246.81c7.37-25.44,8.38-40.88,8.24-48.29A399.63,399.63,0,0,0,354,195.47c-7.09.27-14.12.72-21.1,1.3,20.68,2.18,47.09,7.08,51.7,18,5.86,13.92-30.33,137-48.4,196.47,41.68-69.35,62.92-118.73,73.75-151.18Q412.33,252.91,414.08,246.81Z"
              fill="#7ba835"/>
            <path
              d="M412.72,403.76c3.13-8.12,6.41-17.15,9.41-26.42q3.28-10.12,5.63-19.11A187.07,187.07,0,0,0,433,331.77a70.53,70.53,0,0,0,.24-16.1c-.74-6.14-2.51-9.15-3.85-10.59a6.85,6.85,0,0,0-.89-.81c-1.91-1.47-4.53-2-7.44-1.91,5.75,10.23,8.26,40.63-36.9,130.16H400.8C403.34,426.83,407.85,416.39,412.72,403.76Z"
              fill="#7ba835"/>
            <path
              d="M165.48,45.53A68.86,68.86,0,0,0,156,63.8a83.43,83.43,0,0,0-4,17.65c1.52-.39,3.19-.8,5-1.21,3.55-.8,7.63-1.62,12.17-2.38,3.24-13.14,11.78-42,25.79-50.31C183.93,28.28,173.55,34.59,165.48,45.53Z"
              fill="#7ba835"/>
            <path
              d="M268.69,77.72c-.6,1.29-1.14,2.63-1.62,4q2.55-.47,5.51-.9c1.79-.27,3.7-.53,5.69-.76,5.26-7.16,16.89-20.57,30.7-21.12a28.38,28.38,0,0,0-10.79-2.16C285.53,56.78,274.48,65.24,268.69,77.72Z"
              fill="#7ba835"/>
            <path
              d="M343.74,179.65q12.09-.71,23.94-.77a177.75,177.75,0,0,0-5.34-32.65c-5.11-18.52-12.22-26.09-17.11-29.18-.2.62-.42,1.23-.64,1.84C347.41,129.46,350.86,151,343.74,179.65Z"
              fill="#7ba835"/>
            <path
              d="M307.29,336.39q-.15,1.08-.3,2.1c2.32,16-2,33-8.7,48.47-8.46,19.53-20.63,36.49-27.76,45.56h10.16C315.49,389.23,307.29,336.39,307.29,336.39Z"
              fill="#7ba835"/>
            <path
              d="M195.11,398.16c5.51,10.44,12.21,21.95,20.36,34.36h8.87c-15-20.64-49.76-86.64-52.67-92.18C173.88,349.18,180,369.66,195.11,398.16Z"
              fill="#7ba835"/>
          </g>
          <g id="shade_light">
            <path
              d="M60.4,289.64l-3.09,1.91v1a75.16,75.16,0,0,0,1.22,9,133.18,133.18,0,0,0,7,23.43c8.72,22.14,28.4,58.63,72.64,107.54h18.61C126.28,406.79,73.63,313.54,60.4,289.64Z"
              fill="#9fd748"/>
            <path
              d="M46.32,319.16c0-.17-.11-.34-.16-.51a30.91,30.91,0,0,0-10.9,7.58l-.24.26-.24.27a29.75,29.75,0,0,0-4.21,6.31c-6.24,12.52-8,36.77,14.57,82.68,2.61,5.3,5.52,10.88,8.81,16.77h9.84C17.4,353.39,37.63,326.3,46.32,319.16Z"
              fill="#9fd748"/>
          </g>
        </g>
        <path id="outline"
              d="M421.24,426.1c4.74-11.36,10.89-27,16.28-43.63q7.88-24.29,10.66-42.29c2.94-19,1.68-32.87-3.8-41.93a25.4,25.4,0,0,0-3.13-4.19c-.27-.3-.56-.58-.84-.86-5.09-5-11.81-7.35-20.08-7.05-.85,0-1.7.08-2.58.17q5.47-14.13,9.56-27.21,1.72-5.52,3.23-10.86c7.89-28.31,8.41-45.12,7.89-53.13a35,35,0,0,0-.73-5.62l-.58-2.42-.69-2.88-5.39-.82q-15.75-2.4-32.06-3.5c-5-.34-10-.61-15-.77-2.34-30.59-9-52.83-19.76-66.36a46.08,46.08,0,0,0-5.61-5.93,34,34,0,0,0-10.47-6.41c0-.79,0-1.59.05-2.38,0-.12,0-.23,0-.34,0-27.56-17.18-50.63-39.95-56-.37-.09-.75-.16-1.12-.23-1.27-.27-2.54-.49-3.84-.64a43.11,43.11,0,0,0-5.1-.3c-17.74,0-33.35,10.61-42.24,26.56A87.94,87.94,0,0,0,241.6,35.89a70.75,70.75,0,0,0-9.2-10.24l-.32-.31-.56-.47a52.93,52.93,0,0,0-28.19-13.2h-.11a49.31,49.31,0,0,0-6.21-.4h0c-12.65,0-24.65,4.85-34.8,13.86a70.66,70.66,0,0,0-9.78,10.77C141.24,51,135.08,71,135.08,92.23q0,3.61.24,7.19c.05.67.1,1.34.16,2,0,.39.06.77.1,1.16A100.41,100.41,0,0,0,140.65,126q.78,2.23,1.66,4.41c-4.25,5.38-12.32,15.94-21.61,29.83-2.41,3.59-4.9,7.41-7.43,11.42a408.69,408.69,0,0,0-20.79,36.87l-.06.12c-.24.49-.46,1-.7,1.47C82.37,229.29,76,247.26,72.56,263.77c-17.06,9.48-26.94,16-27.82,16.56l-2.34,1.55-.73.48L41.18,286v.09a39.23,39.23,0,0,0-.11,6.65,82.14,82.14,0,0,0,1.19,10.07,46.21,46.21,0,0,0-26,22.67q-6.8,13.36-5.84,31.71c1.22,23.32,11.83,52.58,31.79,87.46l2.33,4.08H411.19l2.19-4.68.18-.39c.74-1.58,3.5-7.61,7.21-16.44ZM402.67,321.75q4.08-8.82,7.72-17.32c.94-.3,1.91-.59,2.88-.84,1.15-.31,2.31-.57,3.45-.78,4.57-.82,8.92-.7,11.73,1.46a6.85,6.85,0,0,1,.89.81c1.34,1.44,3.11,4.45,3.85,10.59a70.53,70.53,0,0,1-.24,16.1,187.07,187.07,0,0,1-5.19,26.46q-2.34,9-5.63,19.11c-3,9.27-6.28,18.3-9.41,26.42-4.87,12.63-9.38,23.07-11.92,28.76H342.25q8.49-13.78,16.25-27Q384.79,360.54,402.67,321.75ZM270.53,432.52c7.13-9.07,19.3-26,27.76-45.56,7-16.14,11.43-34,8.36-50.67h0s-8.07,38.29-55.81,96.23H215.47c-8.15-12.41-14.85-23.92-20.36-34.36-20.47-38.74-24.52-62.68-24.52-62.68h0c-2.11,14.26.13,29.43,4.28,43.67,6.3,21.59,17,41.06,23.76,52.06l.81,1.31H138.22C94,383.61,74.3,347.12,65.58,325a133.18,133.18,0,0,1-7-23.43,69.08,69.08,0,0,1-1.27-10c1.13-.7,2.52-1.57,4.17-2.56a713.29,713.29,0,0,1,109.41-53.3c47.42-18.34,112.83-37.57,183.14-40.25a399.63,399.63,0,0,1,68.34,3.05c.14,7.41-.87,22.85-8.24,48.29q-1.75,6.09-4.15,13.28c-11.9,35.68-36.39,91.8-86.78,172.43Zm-240-99.45a29.75,29.75,0,0,1,4.21-6.31l.24-.27.24-.26a30.91,30.91,0,0,1,10.9-7.58c.25.82.52,1.65.8,2.5.64,2,1.35,4,2.14,6.11.19.52.38,1,.58,1.57,11.94,31.38,34.41,66.2,66.88,103.69H54c-3.29-5.89-6.2-11.47-8.81-16.77C22.55,369.84,24.33,345.59,30.57,333.07ZM165.48,45.53c8.6-11.64,19.8-18,31.53-18,8.51,0,16.73,3.38,23.89,9.66a52.62,52.62,0,0,1,7.65,8.39A69.38,69.38,0,0,1,238.45,65a83,83,0,0,1,3,11.77,246.73,246.73,0,0,0-50.5-1.5l-.33,0-.14,0a231,231,0,0,0-33.52,4.95c-1.79.41-3.46.82-5,1.21a83.43,83.43,0,0,1,4-17.65A68.86,68.86,0,0,1,165.48,45.53Zm163.74,36c-21.91-4.22-42.53-2.82-56.64-.72q-3,.44-5.51.9c.48-1.37,1-2.71,1.62-4,5.79-12.48,16.84-20.94,29.49-20.94,10.85,0,20.53,6.23,26.72,15.9A43.34,43.34,0,0,1,329.22,81.54Zm-49,14.66c1.19-.14,2.4-.27,3.66-.39a11.6,11.6,0,0,0-.55,3.54c0,4.41,2.49,8.35,6.39,11a20.23,20.23,0,0,0,11.18,3.24A20.54,20.54,0,0,0,311,111c4.53-2.57,7.5-6.82,7.5-11.63v0a11.31,11.31,0,0,0-.11-1.55v-.06a11.23,11.23,0,0,0-.32-1.53c1.83.23,3.68.52,5.53.83s3.92.72,5.9,1.15c.84.19,1.68.37,2.51.57-.43,20.7-13.62,37.63-30.38,39.67a29.25,29.25,0,0,1-3.39.2c-16,0-29.5-13.59-32.94-31.75a49.1,49.1,0,0,1-.84-8c2.37-.52,5.42-1.11,9-1.68C275.48,96.8,277.76,96.49,280.2,96.2ZM197.45,157H197a31.81,31.81,0,0,1-6.53-.67l-.44-.1a39.28,39.28,0,0,1-19-10.8,54.94,54.94,0,0,1-5.6-6.48,67,67,0,0,1-7.33-12.74,82.93,82.93,0,0,1-6.65-27.8,205.07,205.07,0,0,1,34.09-6.31c-.09.18-.15.38-.23.57a13.17,13.17,0,0,0-1,4.95c0,8.81,8.84,16,19.74,16,7.4,0,13.84-3.3,17.22-8.18a13.6,13.6,0,0,0,2.51-7.77,12.81,12.81,0,0,0-.4-3.17c0-.05,0-.09,0-.14l0,0a13.31,13.31,0,0,0-1.2-3c6.57.36,13.43,1,20.52,2.09-.19,17.19-5.14,33.24-14,45.32l-.21.29c-.08.12-.18.23-.27.35C219.82,150.55,208.91,156.81,197.45,157Zm-46.77-10.88.55.77q.59.87,1.2,1.71a68.25,68.25,0,0,0,11.88,12.55C174,169,185.22,173.2,197,173.2a50.81,50.81,0,0,0,29.81-9.86,66.74,66.74,0,0,0,14.78-14.77,85.76,85.76,0,0,0,12.34-24.26c8.39,18.13,25.07,30.51,44.24,30.51,17.32,0,32.62-10.13,41.59-25.47a59.82,59.82,0,0,0,5.46-12.3c4.89,3.09,12,10.66,17.11,29.18a177.75,177.75,0,0,1,5.34,32.65,482.49,482.49,0,0,0-66.94,5.17c-4.22.62-8.46,1.27-12.72,2q-11.55,2-23.26,4.48-25.83,5.52-52.22,13.6-7,2.13-13.94,4.42a86.88,86.88,0,0,0-7.74-12.42c-.59-.77-1.2-1.55-1.83-2.32l-.06-.07c-.66-.8-1.34-1.57-2-2.32l-.69-.73c-.48-.51-1-1-1.45-1.48-.27-.27-.54-.52-.82-.78-.45-.43-.92-.86-1.38-1.26l-.86-.74c-.47-.39-.94-.77-1.41-1.13-.28-.22-.56-.44-.85-.65-.51-.38-1-.73-1.55-1.08l-.74-.5c-.7-.45-1.4-.87-2.11-1.27l-.21-.12c-.73-.4-1.46-.78-2.19-1.12l-.1,0c-.92-.42-1.84-.82-2.77-1.16-7.31-2.67-36.12,7.58-40,14.14-.5.83-1,1.7-1.39,2.59s-.75,1.64-1.09,2.49c-.12.29-.21.59-.32.88-.22.6-.44,1.2-.64,1.82-.11.35-.21.72-.31,1.08-.17.58-.33,1.16-.48,1.76l-.27,1.18c-.13.59-.24,1.2-.35,1.81q-.12.61-.21,1.23c-.1.64-.18,1.28-.25,1.94-.05.4-.1.8-.14,1.22q-.09,1.09-.15,2.22c0,.35,0,.69-.06,1,0,1.12-.06,2.25,0,3.4a89.5,89.5,0,0,0,2.39,18.57c-8.87,4-17.12,7.94-24.73,11.72-2.09,1-4.14,2.06-6.12,3.07-1.27.64-2.53,1.28-3.76,1.92,11.76-39.33,38.19-79.24,53.83-100.66C147.53,150.29,149.2,148.05,150.68,146.09Zm-9,84c-.06-.31-.12-.64-.18-1a68.61,68.61,0,0,1-1.16-11.17A37,37,0,0,1,141.86,206c4.56-6.87,21.61-11.71,26.79-9.12,6.41,4.14,11.34,11.43,14.42,17q-9.23,3.27-18.45,6.85c-2.65,1-5.25,2.06-7.83,3.09Q149,226.94,141.67,230.06Z"
              fill="#212e3e"/>
      </g>
  ),
});

export const FrogeTitleLogoSvg = ({ ...rest })=>{
  return (<chakra.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1415 460" {...rest}>
    <g id="title-logo-ff-color">
      <g id="official-original_copy_2">
        <g id="shaded_bits">
          <g id="shade_primary">
            <path d="M118.56,432.52H56C24.18,375.57,25.61,347,32.57,333.07a30.06,30.06,0,0,1,15.59-14.42c1,3.17,2.14,6.56,3.52,10.18C63.62,360.21,86.09,395,118.56,432.52Z"
              fill="#91c73e"/>
            <path d="M424.32,198.52c.14,7.41-.87,22.85-8.24,48.29-9.93,34.32-33.78,94.25-90.92,185.71H272.53c13-16.57,42.9-59.44,36.12-96.23,0,0-8.07,38.29-55.81,96.23H217.47c-38.38-58.47-44.88-97-44.88-97-5.44,36.77,17.95,79.52,28.85,97H140.22C96,383.62,76.3,347.12,67.58,325c-6.66-16.88-8.07-28.1-8.32-33.4,12.21-7.63,54.88-33.15,113.58-55.86C235.38,211.53,329.21,185.76,424.32,198.52Z"
              fill="#91c73e"/>
            <path d="M431.35,305.08c2.19,2.36,5.56,9,3.6,26.69-1.34,12.23-5,27.56-10.82,45.58-7.67,23.7-17.17,45.82-21.33,55.17H344.24c29.2-47.4,52-90.24,68.15-128.09C419.45,302.16,427.49,300.92,431.35,305.08Z"
              fill="#91c73e"/>
            <path d="M347.23,117.05c7.11,4.5,18.92,18.47,22.45,61.83A489.58,489.58,0,0,0,290,186a616.57,616.57,0,0,0-89.43,22.5A83.76,83.76,0,0,0,191,193.8c-5.84-7.09-12.35-11.93-19.21-14.45-7.31-2.67-36.12,7.58-40,14.14s-5.85,14.88-5.7,24.66a89.41,89.41,0,0,0,2.39,18.57c-12.86,5.81-24.46,11.48-34.61,16.71,13.12-43.88,44.51-88.5,58.78-107.34.57.84,1.15,1.67,1.75,2.48C166.16,164.45,182,173.2,199,173.2s32.85-8.75,44.59-24.63a85.76,85.76,0,0,0,12.34-24.26c8.39,18.13,25.07,30.51,44.24,30.51C321.8,154.82,340.27,139.05,347.23,117.05Z"
              fill="#91c73e"/>
            <path d="M230.55,45.53a73.71,73.71,0,0,1,12.86,31.22c-40.39-5.38-73,.5-89.47,4.7,1.61-13.61,6.28-26.1,13.54-35.92,8.6-11.65,19.8-18,31.53-18S222,33.88,230.55,45.53Z"
              fill="#91c73e"/>
            <path d="M300.18,56.78c13.89,0,25.86,10.21,31,24.76-25-4.8-48.26-2.33-62.15.18C274.22,67.07,286.22,56.78,300.18,56.78Z"
              fill="#91c73e"/>
          </g>
          <g id="shade_white">
            <path d="M320,96.18A128.51,128.51,0,0,1,334,98.73c-.45,22.08-15.43,39.87-33.77,39.87s-33.29-17.75-33.78-39.79a165,165,0,0,1,19.46-3,11.58,11.58,0,0,0-.55,3.53c0,7.85,7.87,14.21,17.57,14.21s17.57-6.36,17.57-14.21A11.54,11.54,0,0,0,320,96.18Z"
              fill="#fff"/>
            <path d="M244.72,93.32c-.2,17.32-5.21,33.49-14.17,45.61-8.6,11.64-19.79,18-31.54,18s-22.93-6.41-31.53-18c-8.08-10.93-12.95-25.15-14-40.54a205.28,205.28,0,0,1,34.09-6.31,13.16,13.16,0,0,0-1.22,5.52c0,8.81,8.84,16,19.74,16s19.73-7.14,19.73-16a13.31,13.31,0,0,0-1.64-6.38C230.77,91.59,237.63,92.26,244.72,93.32Z"
              fill="#fff"/>
            <path d="M170.69,196.89c6.78,3.47,11.31,11.43,14.38,17q-9.21,3.27-18.45,6.85c-8,3.09-15.63,6.21-23,9.33a70,70,0,0,1-1.34-12.14c-.07-5-.24-9.23,1.52-11.9C148.4,199.12,165.54,194.27,170.69,196.89Z"
              fill="#fff"/>
          </g>
          <g id="shade_dark">
            <path d="M416.08,246.81c7.37-25.44,8.38-40.88,8.24-48.29A399.63,399.63,0,0,0,356,195.47c-7.09.27-14.12.72-21.1,1.3,20.68,2.18,47.09,7.08,51.7,18,5.86,13.92-30.33,137-48.4,196.47,41.68-69.35,62.92-118.73,73.75-151.18Q414.33,252.91,416.08,246.81Z"
              fill="#7ba835"/>
            <path d="M414.72,403.76c3.13-8.12,6.41-17.15,9.41-26.42q3.28-10.12,5.63-19.11A187.07,187.07,0,0,0,435,331.77a70.53,70.53,0,0,0,.24-16.1c-.74-6.14-2.51-9.15-3.85-10.59a6.85,6.85,0,0,0-.89-.81c-1.91-1.47-4.53-2-7.44-1.91,5.75,10.23,8.26,40.63-36.9,130.16H402.8C405.34,426.83,409.85,416.39,414.72,403.76Z"
              fill="#7ba835"/>
            <path d="M167.48,45.53A68.86,68.86,0,0,0,158,63.8a83.43,83.43,0,0,0-4,17.65c1.52-.39,3.19-.8,5-1.21,3.55-.8,7.63-1.62,12.17-2.38,3.24-13.14,11.78-42,25.79-50.31C185.93,28.28,175.55,34.59,167.48,45.53Z"
              fill="#7ba835"/>
            <path d="M270.69,77.72c-.6,1.29-1.14,2.63-1.62,4q2.55-.47,5.51-.9c1.79-.27,3.7-.53,5.69-.76,5.26-7.16,16.89-20.57,30.7-21.12a28.38,28.38,0,0,0-10.79-2.16C287.53,56.78,276.48,65.24,270.69,77.72Z"
              fill="#7ba835"/>
            <path d="M345.74,179.65q12.09-.71,23.94-.77a177.75,177.75,0,0,0-5.34-32.65c-5.11-18.52-12.22-26.09-17.11-29.18-.2.62-.42,1.23-.64,1.84C349.41,129.46,352.86,151,345.74,179.65Z"
              fill="#7ba835"/>
            <path d="M309.29,336.39q-.15,1.08-.3,2.1c2.32,16-2,33-8.7,48.47-8.46,19.53-20.63,36.49-27.76,45.56h10.16C317.49,389.23,309.29,336.39,309.29,336.39Z"
              fill="#7ba835"/>
            <path d="M197.11,398.16c5.51,10.44,12.21,21.95,20.36,34.36h8.87c-15-20.64-49.76-86.64-52.67-92.18C175.88,349.18,182,369.66,197.11,398.16Z"
              fill="#7ba835"/>
          </g>
          <g id="shade_light">
            <path d="M62.4,289.64l-3.09,1.91v1a75.16,75.16,0,0,0,1.22,9,133.18,133.18,0,0,0,7,23.43c8.72,22.14,28.4,58.63,72.64,107.54h18.61C128.28,406.79,75.63,313.54,62.4,289.64Z"
              fill="#9fd748"/>
            <path d="M48.32,319.16c0-.17-.11-.34-.16-.51a30.91,30.91,0,0,0-10.9,7.58l-.24.26-.24.27a29.75,29.75,0,0,0-4.21,6.31c-6.24,12.52-8,36.77,14.57,82.68,2.61,5.3,5.52,10.88,8.81,16.77h9.84C19.4,353.39,39.63,326.3,48.32,319.16Z"
              fill="#9fd748"/>
          </g>
        </g>
        <path d="M423.24,426.1c4.74-11.36,10.89-27,16.28-43.63q7.88-24.29,10.66-42.29c2.94-19,1.68-32.87-3.8-41.93a25.4,25.4,0,0,0-3.13-4.19c-.27-.3-.56-.58-.84-.86-5.09-5-11.81-7.35-20.08-7.05-.85,0-1.7.08-2.58.17q5.47-14.13,9.56-27.21,1.72-5.52,3.23-10.86c7.89-28.31,8.41-45.12,7.89-53.13a35,35,0,0,0-.73-5.62l-.58-2.42-.69-2.88-5.39-.82q-15.75-2.4-32.06-3.5c-5-.34-10-.61-15-.77-2.34-30.59-9-52.83-19.76-66.36a46.08,46.08,0,0,0-5.61-5.93,34,34,0,0,0-10.47-6.41c0-.79,0-1.59.05-2.38,0-.12,0-.23,0-.34,0-27.56-17.18-50.63-39.95-56-.37-.09-.75-.16-1.12-.23-1.27-.27-2.54-.49-3.84-.64a43.11,43.11,0,0,0-5.1-.3c-17.74,0-33.35,10.61-42.24,26.56A87.94,87.94,0,0,0,243.6,35.89a70.75,70.75,0,0,0-9.2-10.24l-.32-.31-.56-.47a52.93,52.93,0,0,0-28.19-13.2h-.11a49.31,49.31,0,0,0-6.21-.4h0c-12.65,0-24.65,4.85-34.8,13.86a70.66,70.66,0,0,0-9.78,10.77C143.24,51,137.08,71,137.08,92.23q0,3.61.24,7.19c.05.67.1,1.34.16,2,0,.39.06.77.1,1.16A100.41,100.41,0,0,0,142.65,126q.78,2.23,1.66,4.41c-4.25,5.38-12.32,15.94-21.61,29.83-2.41,3.59-4.9,7.41-7.43,11.42a408.69,408.69,0,0,0-20.79,36.87l-.06.12c-.24.49-.46,1-.7,1.47C84.37,229.29,78,247.26,74.56,263.77c-17.06,9.48-26.94,16-27.82,16.56l-2.34,1.55-.73.48L43.18,286v.09a39.23,39.23,0,0,0-.11,6.65,82.14,82.14,0,0,0,1.19,10.07,46.21,46.21,0,0,0-26,22.67q-6.8,13.36-5.84,31.71c1.22,23.32,11.83,52.58,31.79,87.46l2.33,4.08H413.19l2.19-4.68.18-.39c.74-1.58,3.5-7.61,7.21-16.44ZM404.67,321.75q4.08-8.82,7.72-17.32c.94-.3,1.91-.59,2.88-.84,1.15-.31,2.31-.57,3.45-.78,4.57-.82,8.92-.7,11.73,1.46a6.85,6.85,0,0,1,.89.81c1.34,1.44,3.11,4.45,3.85,10.59a70.53,70.53,0,0,1-.24,16.1,187.07,187.07,0,0,1-5.19,26.46q-2.34,9-5.63,19.11c-3,9.27-6.28,18.3-9.41,26.42-4.87,12.63-9.38,23.07-11.92,28.76H344.25q8.49-13.78,16.25-27Q386.79,360.54,404.67,321.75ZM272.53,432.52c7.13-9.07,19.3-26,27.76-45.56,7-16.14,11.43-34,8.36-50.67h0s-8.07,38.29-55.81,96.23H217.47c-8.15-12.41-14.85-23.92-20.36-34.36-20.47-38.74-24.52-62.68-24.52-62.68h0c-2.11,14.26.13,29.43,4.28,43.67,6.3,21.59,17,41.06,23.76,52.06l.81,1.31H140.22C96,383.61,76.3,347.12,67.58,325a133.18,133.18,0,0,1-7-23.43,69.08,69.08,0,0,1-1.27-10c1.13-.7,2.52-1.57,4.17-2.56a713.29,713.29,0,0,1,109.41-53.3c47.42-18.34,112.83-37.57,183.14-40.25a399.63,399.63,0,0,1,68.34,3.05c.14,7.41-.87,22.85-8.24,48.29q-1.75,6.09-4.15,13.28c-11.9,35.68-36.39,91.8-86.78,172.43Zm-240-99.45a29.75,29.75,0,0,1,4.21-6.31l.24-.27.24-.26a30.91,30.91,0,0,1,10.9-7.58c.25.82.52,1.65.8,2.5.64,2,1.35,4,2.14,6.11.19.52.38,1,.58,1.57,11.94,31.38,34.41,66.2,66.88,103.69H56c-3.29-5.89-6.2-11.47-8.81-16.77C24.55,369.84,26.33,345.59,32.57,333.07ZM167.48,45.53c8.6-11.64,19.8-18,31.53-18,8.51,0,16.73,3.38,23.89,9.66a52.62,52.62,0,0,1,7.65,8.39A69.38,69.38,0,0,1,240.45,65a83,83,0,0,1,3,11.77,246.73,246.73,0,0,0-50.5-1.5l-.33,0-.14,0a231,231,0,0,0-33.52,4.95c-1.79.41-3.46.82-5,1.21a83.43,83.43,0,0,1,4-17.65A68.86,68.86,0,0,1,167.48,45.53Zm163.74,36c-21.91-4.22-42.53-2.82-56.64-.72q-3,.44-5.51.9c.48-1.37,1-2.71,1.62-4,5.79-12.48,16.84-20.94,29.49-20.94,10.85,0,20.53,6.23,26.72,15.9A43.34,43.34,0,0,1,331.22,81.54Zm-49,14.66c1.19-.14,2.4-.27,3.66-.39a11.6,11.6,0,0,0-.55,3.54c0,4.41,2.49,8.35,6.39,11a20.23,20.23,0,0,0,11.18,3.24A20.54,20.54,0,0,0,313,111c4.53-2.57,7.5-6.82,7.5-11.63v0a11.31,11.31,0,0,0-.11-1.55v-.06a11.23,11.23,0,0,0-.32-1.53c1.83.23,3.68.52,5.53.83s3.92.72,5.9,1.15c.84.19,1.68.37,2.51.57-.43,20.7-13.62,37.63-30.38,39.67a29.25,29.25,0,0,1-3.39.2c-16,0-29.5-13.59-32.94-31.75a49.1,49.1,0,0,1-.84-8c2.37-.52,5.42-1.11,9-1.68C277.48,96.8,279.76,96.49,282.2,96.2ZM199.45,157H199a31.81,31.81,0,0,1-6.53-.67l-.44-.1a39.28,39.28,0,0,1-19-10.8,54.94,54.94,0,0,1-5.6-6.48,67,67,0,0,1-7.33-12.74,82.93,82.93,0,0,1-6.65-27.8,205.07,205.07,0,0,1,34.09-6.31c-.09.18-.15.38-.23.57a13.17,13.17,0,0,0-1,4.95c0,8.81,8.84,16,19.74,16,7.4,0,13.84-3.3,17.22-8.18a13.6,13.6,0,0,0,2.51-7.77,12.81,12.81,0,0,0-.4-3.17c0-.05,0-.09,0-.14l0,0a13.31,13.31,0,0,0-1.2-3c6.57.36,13.43,1,20.52,2.09-.19,17.19-5.14,33.24-14,45.32l-.21.29c-.08.12-.18.23-.27.35C221.82,150.55,210.91,156.81,199.45,157Zm-46.77-10.88.55.77q.59.87,1.2,1.71a68.25,68.25,0,0,0,11.88,12.55C176,169,187.22,173.2,199,173.2a50.81,50.81,0,0,0,29.81-9.86,66.74,66.74,0,0,0,14.78-14.77,85.76,85.76,0,0,0,12.34-24.26c8.39,18.13,25.07,30.51,44.24,30.51,17.32,0,32.62-10.13,41.59-25.47a59.82,59.82,0,0,0,5.46-12.3c4.89,3.09,12,10.66,17.11,29.18a177.75,177.75,0,0,1,5.34,32.65,482.49,482.49,0,0,0-66.94,5.17c-4.22.62-8.46,1.27-12.72,2q-11.55,2-23.26,4.48-25.83,5.52-52.22,13.6-7,2.13-13.94,4.42a86.88,86.88,0,0,0-7.74-12.42c-.59-.77-1.2-1.55-1.83-2.32l-.06-.07c-.66-.8-1.34-1.57-2-2.32l-.69-.73c-.48-.51-1-1-1.45-1.48-.27-.27-.54-.52-.82-.78-.45-.43-.92-.86-1.38-1.26l-.86-.74c-.47-.39-.94-.77-1.41-1.13-.28-.22-.56-.44-.85-.65-.51-.38-1-.73-1.55-1.08l-.74-.5c-.7-.45-1.4-.87-2.11-1.27l-.21-.12c-.73-.4-1.46-.78-2.19-1.12l-.1,0c-.92-.42-1.84-.82-2.77-1.16-7.31-2.67-36.12,7.58-40,14.14-.5.83-1,1.7-1.39,2.59s-.75,1.64-1.09,2.49c-.12.29-.21.59-.32.88-.22.6-.44,1.2-.64,1.82-.11.35-.21.72-.31,1.08-.17.58-.33,1.16-.48,1.76l-.27,1.18c-.13.59-.24,1.2-.35,1.81q-.12.61-.21,1.23c-.1.64-.18,1.28-.25,1.94-.05.4-.1.8-.14,1.22q-.09,1.09-.15,2.22c0,.35,0,.69-.06,1,0,1.12-.06,2.25,0,3.4a89.5,89.5,0,0,0,2.39,18.57c-8.87,4-17.12,7.94-24.73,11.72-2.09,1-4.14,2.06-6.12,3.07-1.27.64-2.53,1.28-3.76,1.92,11.76-39.33,38.19-79.24,53.83-100.66C149.53,150.29,151.2,148.05,152.68,146.09Zm-9,84c-.06-.31-.12-.64-.18-1a68.61,68.61,0,0,1-1.16-11.17A37,37,0,0,1,143.86,206c4.56-6.87,21.61-11.71,26.79-9.12,6.41,4.14,11.34,11.43,14.42,17q-9.23,3.27-18.45,6.85c-2.65,1-5.25,2.06-7.83,3.09Q151,226.94,143.67,230.06Z"
              id="outline" fill="#212e3e"/>
      </g>
      <path d="M519.69,329V224H498.5V177.39h21.19V158.81a88.91,88.91,0,0,1,4.56-29.18A66.52,66.52,0,0,1,537,107.14a55.21,55.21,0,0,1,19.72-14.35,64.07,64.07,0,0,1,25.92-5.05q21.51,0,47.59,9.78l-10.43,46.94a91.09,91.09,0,0,0-11.9-3.26,57.48,57.48,0,0,0-11.25-1.3q-15,0-15,16.62v20.87h37.49V224H581.63V329Z"
        fill="#212e3e"/>
      <path d="M757,210.31a126.39,126.39,0,0,0-32.6,3.92q-14.67,3.9-21.84,13V329H640.63V157.5h56.73v32.6q9.12-17.26,22.65-26.57a50.59,50.59,0,0,1,29.18-9.29,53.82,53.82,0,0,1,7.82.33Z"
        fill="#212e3e"/>
      <path d="M859.38,332.24q-23.14,0-40.59-7.34a87.82,87.82,0,0,1-29.34-19.56A80.73,80.73,0,0,1,771.52,277a97.41,97.41,0,0,1,0-67.48,80.73,80.73,0,0,1,17.93-28.36,87.82,87.82,0,0,1,29.34-19.56q17.44-7.34,40.59-7.34,22.82,0,40.42,7.34a87.57,87.57,0,0,1,29.51,19.56,80.87,80.87,0,0,1,17.93,28.36,97.41,97.41,0,0,1,0,67.48,80.87,80.87,0,0,1-17.93,28.36A87.57,87.57,0,0,1,899.8,324.9Q882.21,332.24,859.38,332.24Zm-30.32-89q0,17.28,8.48,27.06t21.84,9.78q13.36,0,21.84-9.78t8.48-27.06q0-17.28-8.48-27.06t-21.84-9.78q-13.38,0-21.84,9.78T829.06,243.24Z"
        fill="#212e3e"/>
      <path d="M1041,329a69.29,69.29,0,0,1-30.48-6.68A70.9,70.9,0,0,1,986.84,304a84,84,0,0,1-15.16-27.22,110.21,110.21,0,0,1,.49-69.44,83.68,83.68,0,0,1,16.47-28,76.1,76.1,0,0,1,25.26-18.41,76.88,76.88,0,0,1,32.28-6.69q18.57,0,32.6,7.34a54.45,54.45,0,0,1,22.16,21.35V157.5h53.79V313.33q0,20.22-7.49,36.51a78.32,78.32,0,0,1-21.19,27.71,99.7,99.7,0,0,1-32.93,17.77q-19.24,6.36-42.71,6.36-27.37,0-47.59-8.48A108.44,108.44,0,0,1,967,368.75l32.6-33.9a84.46,84.46,0,0,0,22.65,14.83,67.13,67.13,0,0,0,28.2,6,56.32,56.32,0,0,0,16.14-2.28,36.34,36.34,0,0,0,13.53-7.34,34.91,34.91,0,0,0,9.29-13.2q3.42-8.14,3.42-19.56V302.25a46.31,46.31,0,0,1-21.35,20.21A70.65,70.65,0,0,1,1041,329Zm22.17-48.9a30.33,30.33,0,0,0,16.46-4.4q7-4.41,13.2-13.21V231.83a41.76,41.76,0,0,0-13.53-18.58q-9-6.85-18.74-6.85a25.29,25.29,0,0,0-12.23,3.1,34.16,34.16,0,0,0-9.94,8.15,35.86,35.86,0,0,0-6.52,12.06,47.7,47.7,0,0,0-2.28,14.83q0,16,9.45,25.76T1063.13,280.08Z"
        fill="#212e3e"/>
      <path d="M1270.46,332.24q-22.5,0-40.1-7a84.91,84.91,0,0,1-29.5-19.07,81.87,81.87,0,0,1-18.09-27.71,88.44,88.44,0,0,1-6.2-32.93,102.49,102.49,0,0,1,6-35.21,81.52,81.52,0,0,1,17.93-29,86.56,86.56,0,0,1,29.34-19.72q17.45-7.34,40.59-7.34,22.82,0,40.42,7.34a87.57,87.57,0,0,1,29.51,19.56,80.87,80.87,0,0,1,17.93,28.36,95.59,95.59,0,0,1,6,33.74c0,3.26-.17,6.58-.49,9.94s-.71,6.36-1.14,9h-120.3q1,13.69,10.11,19.72a35.26,35.26,0,0,0,19.89,6,41.52,41.52,0,0,0,19.07-4.56q9-4.56,11.9-12.72l52.48,15q-10.44,20.53-32.11,33.58T1270.46,332.24ZM1297.84,225q-1.63-12.37-9.12-19.56t-19.24-7.17q-11.73,0-19.23,7.17T1241.12,225Z"
        fill="#212e3e"/>
      <path d="M541.38,348.23c4.73,0,9.35,1,12.43,3.19L550,361.76a13.54,13.54,0,0,0-7.59-2.42c-5.72,0-8.69,3.19-8.69,9.46v3.52h16.17v11H534.12v47.3H520.37v-47.3h-9.68v-11h9.68v-3.74C520.37,356.26,527.74,348.23,541.38,348.23ZM566,354c0-4.62,3.74-8.25,8.8-8.25s8.8,3.41,8.8,7.92a8.44,8.44,0,0,1-8.8,8.58C569.76,362.2,566,358.57,566,354Zm1.87,17.93h13.75v58.74H567.89Z"
        fill="#81bf30"/>
      <path d="M657.54,397v33.66H643.79v-31.9c0-10.45-5.17-15.51-14-15.51-9.78,0-16.39,5.94-16.39,17.71v29.7H599.67V371.88h13.1v7.59c4.51-5.39,11.65-8.25,20.23-8.25C647.08,371.22,657.54,379.25,657.54,397Z"
        fill="#81bf30"/>
      <path d="M724.2,396.19v34.43h-13v-7.15c-3.3,5.06-9.67,7.92-18.48,7.92-13.42,0-21.89-7.37-21.89-17.6,0-9.79,6.6-17.49,24.42-17.49h15.19v-.88c0-8-4.85-12.76-14.64-12.76-6.6,0-13.42,2.2-17.82,5.83l-5.39-10c6.28-4.84,15.4-7.26,24.86-7.26C714.4,371.22,724.2,379.25,724.2,396.19Zm-13.75,16.06v-6.82h-14.2c-9.35,0-11.87,3.52-11.87,7.81,0,4.95,4.17,8.14,11.21,8.14C702.3,421.38,708.13,418.3,710.45,412.25Z"
        fill="#81bf30"/>
      <path d="M799.65,397v33.66H785.9v-31.9c0-10.45-5.17-15.51-14-15.51-9.79,0-16.39,5.94-16.39,17.71v29.7H741.79V371.88h13.09v7.59c4.51-5.39,11.66-8.25,20.24-8.25C789.2,371.22,799.65,379.25,799.65,397Z"
        fill="#81bf30"/>
      <path d="M812.85,401.25c0-17.6,13.2-30,31.79-30,11.44,0,20.57,4.73,25.08,13.64L859.16,391a16.62,16.62,0,0,0-14.63-8.14c-10.12,0-17.82,7-17.82,18.37s7.7,18.37,17.82,18.37a16.62,16.62,0,0,0,14.63-8.14l10.56,6.16c-4.51,8.8-13.64,13.75-25.08,13.75C826.05,431.39,812.85,418.85,812.85,401.25Z"
        fill="#81bf30"/>
      <path d="M935.72,405.65H889.63c1.65,8.58,8.8,14.08,19,14.08,6.6,0,11.77-2.09,16-6.38l7.37,8.47c-5.28,6.27-13.53,9.57-23.65,9.57-19.69,0-32.45-12.65-32.45-30.14s12.87-30,30.36-30c17.16,0,29.7,12,29.7,30.36C935.94,402.68,935.83,404.33,935.72,405.65Zm-46.2-9.13h33.33c-1.1-8.47-7.59-14.3-16.61-14.3S890.84,387.94,889.52,396.52Z"
        fill="#81bf30"/>
    </g>
  </chakra.svg>
    )
};
export const FrogefinitySvg = createIcon({
  displayName: "Frogefinity",
  viewBox: "0 0 319.19 242.5",
  path: (<>
    <ellipse cx="92.74" cy="121.25" rx="80.74" ry="109.25" fill="none" stroke="#212e3e" strokeWidth="24px" />
    <ellipse cx="244.18" cy="129.38" rx="63.01" ry="73.63" fill="none" stroke="#212e3e" strokeWidth="24px" />
  </>),
});
export const FrogefinitySvgString = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 319.19 242.5">
    <ellipse cx="92.74" cy="121.25" rx="80.74" ry="109.25" stroke="#212e3e" stroke-width="24px"/>
    <ellipse cx="244.18" cy="129.38" rx="63.01" ry="73.63" stroke="#212e3e" stroke-width="24px"/>
  </svg>
`


export const FrogeLogoOutlineSvg = createIcon({
  displayName: "FrogeLogo",
  viewBox: "0 0 460 460",
  d: "M421.241,426.1c4.743-11.355,10.884-26.976,16.278-43.624,5.25-16.2,8.8-30.265,10.661-42.3,2.94-18.978,1.676-32.868-3.8-41.934a25.744,25.744,0,0,0-3.134-4.186c-.274-.3-.557-.576-.841-.855-5.085-5-11.8-7.356-20.081-7.052-.844.031-1.7.079-2.574.166q5.464-14.125,9.555-27.209,1.729-5.517,3.227-10.857c7.9-28.315,8.414-45.117,7.892-53.136a34.986,34.986,0,0,0-.725-5.62l-.583-2.419-.692-2.875-5.384-.822q-15.751-2.392-32.066-3.5-7.45-.512-15.007-.767c-2.338-30.59-8.967-52.834-19.758-66.358a46.22,46.22,0,0,0-5.615-5.935,33.959,33.959,0,0,0-10.471-6.406c.037-.794.047-1.587.051-2.385,0-.112.007-.222.007-.335,0-27.565-17.177-50.63-39.943-55.966-.372-.087-.75-.152-1.125-.23-1.264-.262-2.54-.486-3.835-.637a44.232,44.232,0,0,0-5.1-.295c-17.738,0-33.351,10.607-42.235,26.559A88.054,88.054,0,0,0,241.6,35.892a70.4,70.4,0,0,0-9.2-10.246c-.108-.1-.212-.206-.32-.3-.183-.165-.373-.312-.557-.474a52.973,52.973,0,0,0-28.184-13.2c-.04,0-.08-.006-.12-.011a49.142,49.142,0,0,0-6.2-.4h0c-12.655,0-24.654,4.847-34.8,13.863a69.951,69.951,0,0,0-9.781,10.769c-11.189,15.148-17.353,35.149-17.353,56.337q0,3.622.242,7.191c.045.672.1,1.341.156,2.01.034.386.066.773.1,1.158a100.338,100.338,0,0,0,5.066,23.37q.782,2.238,1.667,4.414c-4.255,5.375-12.32,15.933-21.616,29.822-2.409,3.6-4.9,7.41-7.427,11.427A407.55,407.55,0,0,0,92.48,208.5c-.018.037-.038.074-.056.111-.243.494-.467.979-.706,1.471-9.345,19.218-15.769,37.18-19.163,53.7C55.5,273.25,45.616,279.749,44.74,280.327L42.4,281.878l-.729.482-.492,3.654-.011.089a39.934,39.934,0,0,0-.106,6.65,83,83,0,0,0,1.187,10.07,46.2,46.2,0,0,0-26.02,22.669q-6.8,13.367-5.836,31.712c1.216,23.318,11.832,52.575,31.785,87.454l2.335,4.081h366.68l2.189-4.676c.028-.059.1-.2.182-.392.733-1.581,3.5-7.608,7.208-16.445C420.925,426.856,421.083,426.477,421.241,426.1ZM402.675,321.754q4.067-8.819,7.711-17.32c.948-.306,1.915-.59,2.886-.848,1.15-.305,2.305-.566,3.448-.772,4.569-.822,8.917-.708,11.728,1.457a7.2,7.2,0,0,1,.9.806c1.333,1.439,3.1,4.455,3.844,10.588a71.008,71.008,0,0,1-.234,16.1,187.75,187.75,0,0,1-5.19,26.465q-2.349,8.967-5.632,19.112c-3,9.27-6.28,18.3-9.411,26.414-4.874,12.637-9.386,23.07-11.918,28.762H342.245q8.491-13.786,16.251-27.051Q384.793,360.544,402.675,321.754ZM270.535,432.52c7.124-9.069,19.3-26.033,27.751-45.56,6.986-16.138,11.433-34.025,8.363-50.672v0s-8.066,38.293-55.81,96.232H215.466c-8.147-12.412-14.844-23.917-20.361-34.358-20.469-38.739-24.517-62.685-24.517-62.685v0c-2.108,14.269.132,29.433,4.287,43.678,6.3,21.591,17,41.052,23.752,52.053.275.447.549.894.81,1.313H138.22c-44.239-48.9-63.918-85.4-72.639-107.537a132.844,132.844,0,0,1-7.054-23.438,71.007,71.007,0,0,1-1.271-9.962c1.132-.707,2.528-1.569,4.17-2.567a714.56,714.56,0,0,1,109.417-53.3c47.417-18.343,112.828-37.575,183.138-40.25a399.73,399.73,0,0,1,68.334,3.048c.143,7.409-.863,22.847-8.233,48.291q-1.764,6.091-4.151,13.281c-11.9,35.676-36.39,91.794-86.777,172.429ZM30.57,333.071a29.829,29.829,0,0,1,4.212-6.306c.078-.09.154-.187.233-.275s.164-.172.245-.261a30.717,30.717,0,0,1,10.9-7.575q.381,1.226.8,2.5c.642,1.952,1.358,4,2.142,6.111.193.522.381,1.038.583,1.57,11.937,31.373,34.406,66.195,66.876,103.687H53.947c-3.288-5.895-6.2-11.468-8.809-16.77C22.554,369.835,24.332,345.586,30.57,333.071ZM165.479,45.526c8.6-11.64,19.8-18.046,31.535-18.046,8.51,0,16.727,3.38,23.883,9.662a53.13,53.13,0,0,1,7.657,8.385,69.382,69.382,0,0,1,9.894,19.458,81.971,81.971,0,0,1,2.957,11.768,246.337,246.337,0,0,0-50.5-1.5l-.326.022-.139.011a230.241,230.241,0,0,0-33.518,4.959q-2.7.612-4.987,1.2A83.361,83.361,0,0,1,155.968,63.8,68.94,68.94,0,0,1,165.479,45.526Zm163.74,36.016c-21.9-4.218-42.53-2.826-56.642-.726-1.965.292-3.809.6-5.507.9q.723-2.06,1.624-4c5.791-12.485,16.838-20.939,29.483-20.939,10.855,0,20.535,6.233,26.72,15.9A43.519,43.519,0,0,1,329.219,81.542ZM280.2,96.2c1.186-.138,2.4-.271,3.656-.391a11.7,11.7,0,0,0-.546,3.536c0,4.412,2.489,8.354,6.394,10.959a20.175,20.175,0,0,0,11.176,3.243,20.441,20.441,0,0,0,10.066-2.572c4.534-2.568,7.5-6.815,7.5-11.63l0-.026a11.6,11.6,0,0,0-.108-1.554l-.008-.056a11.727,11.727,0,0,0-.32-1.527c1.828.231,3.673.515,5.525.83q2.937.5,5.9,1.15c.838.185,1.675.367,2.514.571-.431,20.7-13.62,37.626-30.38,39.662a28.32,28.32,0,0,1-3.4.205c-16.032,0-29.493-13.589-32.937-31.752a48.97,48.97,0,0,1-.841-8.038c2.374-.519,5.421-1.114,8.985-1.677C275.481,96.8,277.759,96.486,280.2,96.2Zm-82.751,60.766c-.145,0-.289.015-.435.015a32.306,32.306,0,0,1-6.532-.668c-.147-.03-.292-.074-.438-.106a39.19,39.19,0,0,1-18.961-10.8,54.917,54.917,0,0,1-5.6-6.477,66.8,66.8,0,0,1-7.329-12.744,82.736,82.736,0,0,1-6.646-27.8,204.408,204.408,0,0,1,34.081-6.309c-.084.184-.148.377-.224.565a13.167,13.167,0,0,0-.988,4.954c0,8.809,8.835,15.949,19.733,15.949,7.406,0,13.848-3.3,17.223-8.175A13.573,13.573,0,0,0,223.84,97.6a13.069,13.069,0,0,0-.4-3.171c-.01-.044-.014-.089-.025-.133,0-.014-.01-.027-.014-.04a13.7,13.7,0,0,0-1.2-3.03c6.569.368,13.429,1.038,20.516,2.093-.193,17.193-5.141,33.237-13.963,45.326-.068.094-.132.193-.2.287-.089.12-.183.231-.272.35C219.824,150.55,208.911,156.813,197.449,156.967Zm-46.767-10.873c.177.261.365.511.544.769.4.573.794,1.148,1.206,1.708a68.667,68.667,0,0,0,11.881,12.553c9.686,7.868,20.909,12.077,32.7,12.077a50.8,50.8,0,0,0,29.809-9.858A66.958,66.958,0,0,0,241.6,148.571a85.681,85.681,0,0,0,12.343-24.258c8.391,18.127,25.069,30.507,44.234,30.507,17.326,0,32.618-10.125,41.595-25.465a60.454,60.454,0,0,0,5.457-12.3c4.888,3.093,12,10.662,17.112,29.181a177.632,177.632,0,0,1,5.338,32.649,481.836,481.836,0,0,0-66.934,5.17c-4.227.615-8.463,1.265-12.721,1.989q-11.556,1.968-23.268,4.476-25.821,5.519-52.219,13.6-6.954,2.129-13.933,4.424a86.759,86.759,0,0,0-7.748-12.417c-.588-.779-1.192-1.556-1.826-2.325-.019-.024-.04-.044-.059-.068-.664-.8-1.338-1.573-2.018-2.319-.23-.252-.465-.487-.7-.733-.478-.506-.958-1-1.444-1.483-.271-.266-.545-.521-.819-.779-.458-.432-.918-.854-1.383-1.261q-.426-.374-.856-.733-.705-.59-1.418-1.138c-.28-.217-.56-.436-.842-.644-.513-.378-1.031-.735-1.551-1.084-.247-.166-.492-.341-.74-.5q-1.05-.673-2.115-1.268c-.07-.039-.139-.085-.21-.124q-1.087-.6-2.191-1.116c-.029-.014-.066-.023-.1-.037-.916-.426-1.838-.817-2.767-1.158-7.318-2.674-36.122,7.574-40.006,14.132q-.743,1.256-1.39,2.6-.585,1.21-1.09,2.491c-.113.285-.211.582-.318.872-.222.6-.44,1.2-.636,1.822-.113.353-.213.717-.317,1.077-.167.58-.328,1.164-.474,1.761-.095.39-.183.786-.269,1.183q-.194.893-.356,1.808c-.073.408-.144.818-.207,1.234-.1.635-.178,1.282-.253,1.934-.046.405-.1.808-.135,1.22-.068.73-.113,1.476-.154,2.226-.019.348-.048.689-.061,1.042-.042,1.114-.059,2.245-.043,3.4a90.2,90.2,0,0,0,2.39,18.565c-8.867,4-17.118,7.941-24.725,11.716-2.086,1.035-4.136,2.061-6.121,3.07q-1.908.969-3.754,1.92c11.756-39.327,38.187-79.238,53.82-100.66C147.532,150.29,149.2,148.047,150.682,146.094Zm-9.012,83.971c-.062-.318-.123-.649-.183-.979a68.366,68.366,0,0,1-1.153-11.169A36.848,36.848,0,0,1,141.861,206c4.557-6.879,21.609-11.714,26.789-9.125,6.414,4.14,11.344,11.432,14.416,17q-9.213,3.276-18.446,6.856c-2.647,1.025-5.247,2.056-7.825,3.089C151.614,225.9,146.56,227.981,141.67,230.065Z"
});

