//import React from 'react';
import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./Components/ClassCounter";
import HookCounter from "./Components/HookCounter";
import HookCounter2 from "./Components/HookCounter2";
import HookCounter3 from "./Components/HookCounter3";
import HookCounter4 from "./Components/HookCounter4";
import ClassUseEffSamp from "./Components/ClassUseEffSamp";
import HookUseEffect from "./Components/HookUseEffect";
import ClassUseEffSamp2 from "./Components/ClassUseEffSamp2";
import HookUseEffect2 from "./Components/HookUseEffect2";
import ClassMouse from "./Components/ClassMouse";
import HookMouse from "./Components/HookMouse";
import MouseContainer from "./Components/MouseContainer";
import IntervalClassCounter from "./Components/IntervalClassCounter";
import IntervalHooksCounter from "./Components/IntervalHooksCounter";
import DataFetching from "./Components/DataFetching";
import ComponentC from "./Components/ComponentC";
import UseReducerCounter from "./Components/UseReducerCounter";
import UseReducerCounter2 from "./Components/UseReducerCounter2";
import UseReducerCounter3 from "./Components/UseReducerCounter3";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
import DataFetching1 from "./Components/DataFetching1";
import DataFetching2 from "./Components/DataFetching2";
import ParentComponent from "./Components/ParentComponent";
import CounterUseMemo from "./Components/CounterUseMemo";
import FocusInput from "./Components/FocusInput";
import ClassTimer from "./Components/ClassTimer";
import HookTimer from "./Components/HookTimer";
import DocTitle from "./Components/DocTitle";
import DocTitle2 from "./Components/DocTitle2";
import Counter1 from "./Components/Counter1";
import Counter2 from "./Components/Counter2";
//import useForms from './Components/useForms';
//import useForm from './Components/useForm'
import UseForm from "./Components/UseForm";


//export const UserContext=React.createContext()

//export const CityContext=React.createContext()

/*

  export const CountContext = React.createContext()
  const initialstate =0
  const reducer =(state,action) =>{
    switch(action){
      case 'increment' :
          return  state + 1
        case 'decrement' :
          return  state - 1
        case 'reset' :
          return  initialstate
        default :
            return state
    }
  }

 */

function App() {
  //const [count,dispatch] = useReducer(reducer,initialstate)
  return (
    <div className="App">
      {/** 
       
       *  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

       */}

      {/**
        * 
            <ClassCounter />
            <br />
             <HookCounter /> 
        */}
      {/* <HookCounter2 />  */}
      {/* <HookCounter3 /> */}
      {/* <HookCounter4 /> */}
      {/* <ClassUseEffSamp /> */}

      {/* <HookUseEffect/> */}
      {/* <ClassUseEffSamp2 /> */}
      {/* <HookUseEffect2 /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHooksCounter /> */}
      {/* <DataFetching /> */}

      {/* 
            <UserContext.Provider value={'Rakesh'}>
              <CityContext.Provider value={'Chirala'}>
                nti <ComponentC/>
              </CityContext.Provider>    
            </UserContext.Provider>
        */}
      {/* <UseReducerCounter/> */}
      {/* <UseReducerCounter2/> */}
      {/* <UseReducerCounter3/> */}
      {/* 
          <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
            Count -&gt; {count}
            <ComponentA />
            <ComponentB />
            <ComponentC />
          </CountContext.Provider>
        */}
      {/* <DataFetching1 /> */}
      {/* <DataFetching2 /> */}
      {/* <ParentComponent /> */}
      {/* <CounterUseMemo /> */}
      {/* <FocusInput /> */}
      {/* <ClassTimer /> */}
      {/* <HookTimer /> */}
      {/* <DocTitle /> */}
      {/* <DocTitle2 /> */}
      {/* <Counter1 /> */}
      {/* <Counter2 /> */}
      {/* */}
      {/* <useForm></useForm> */}
      {/* <UseForm/> */}
      
    </div>
  );
}

export default App;
