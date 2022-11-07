import React from 'react';
import { DivEscena } from './Escena.styles'; 


const frase = (props) => <DivEscena isActivated = {props.isActivated}> {props.text} </DivEscena>;

export default frase;

