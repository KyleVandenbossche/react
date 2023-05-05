import React from 'react';
import logo from './logo.svg';
import './App.css';
import Switch from './switch';
import { Counter } from './components/counter/counter';
import PetInfo from './petinfo';
import { Header } from './components/header/header';
import {AdDesigner} from "./components/adDesigner/adDesigner"
import { VotesComponent } from './components/votes/votes';
import { ArraysEx } from './components/ArraysEx/ArraysEx';
import { Typing } from './components/Typing/Typing';
import { Circle } from './components/Circle/Circle';
import { Parent } from './components/Callbacks/Parent';



function App(){
  return(
    <div className='App'>
    <ArraysEx />
    <Typing />
    <Circle />
    <Parent />
    
    </div>


  )
}

export default App;
