import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/welcome";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import Functionclick from "./Components/Functionclick";
import Classclick from "./Components/Classclick";
import EventBind from "./Components/EventBind";
import Hello from "./Components/Hello";
import ParentComponent from "./Components/ParentComponent";
import UserGreet from "./Components/UserGreet";
import NameList from "./Components/NameList";
import Stylesheet from "./Components/Stylesheet";
import Inline from "./Components/Inline";
import "./appStyle.css";
import Styles from "./appStyle.module.css";
import Forms from "./Components/Forms";
import LifeCycleA from "./Components/LifeCycleA";
import FragmentDemo from "./Components/FragmentDemo";
import Table from "./Components/Table";
import PureComp from "./Components/PureComp";
import ParentComp from "./Components/ParentComp";
import RefsDemo from "./RefsDemo";
import FocusRefs from "./Components/FocusRefs";
import FRParent from "./Components/FRParent";
import PortalDemo from "./Components/PortalDemo";
import Heros from "./Components/Heros";
import ErrorBoundry from "./Components/ErrorBoundry";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import ClickCounter2 from "./Components/ClickCounter2";
import HoverCounter2 from "./Components/HoverCounter2";
import User from "./Components/User";
import CountRender from "./Components/CountRender";
import ComponentC from "./Components/ComponentC";
import { userProvider, UserProvider } from "./Components/UserContext";
import PrakashSample from "./Components/PrakashSample";

function App() {
  return (
    <div className="App">
      {/* <Greet Name = "Raki" Age = "19"/> */}
      {/* <Greet Name = "Lalli" Age = "23"/> */}
      {/* <Greet Name = "Sony" Age = "15"/> */}
      {/* <Welcome Name = "Raki" Age = "19" /> */}
      {/* <Welcome Name = "Lalli" Age = "23" /> */}
      {/* <Welcome Name = "Sony" Age = "15" /> */}
      {/* < Hello /> */}
      {/* < Message /> */}
      {/* <Counter  value = '9'/> */}
      {/* <Functionclick /> */}
      {/* <Classclick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreet /> */}
      {/* <NameList /> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={Styles.success}>Success</h1> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <Inline /> */}
      {/* <Forms /> */}
      {/* <LifeCycleA /> */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}
      {/* <PureComp /> */}
      {/* <ParentComp /> */}
      {/* <RefsDemo /> */}
      {/* <FocusRefs /> */}
      {/* <FRParent /> */}
      {/* <PortalDemo /> */}
      {/* 
          <ErrorBoundry>
            <Heros heroname='Captain America' />
          </ErrorBoundry>

          <ErrorBoundry>
            <Heros heroname='Thanos' />
          </ErrorBoundry>

          <ErrorBoundry>
            <Heros heroname='Thor' />
          </ErrorBoundry>
       */}
      {/* 
          <ClickCounter />
          <HoverCounter name='Raki' />
      */}
      {/* 
          <ClickCounter2 />
          <HoverCounter2 />
          <User name={(isLoggedin)=>isLoggedin ? 'Rakii' : 'guest'}/>
      */}
      {/* 
          < CountRender render={ (count,incrementCount) => (
                  <ClickCounter2 count={count} incrementCount={incrementCount} />
          )} />
          < CountRender render={ (count,incrementCount) => (
                  <HoverCounter2 count={count} incrementCount={incrementCount} />
          )} />
      */}
      {/* 
          <CountRender>
          { (count,incrementCount) => (
                    <ClickCounter2 count={count} incrementCount={incrementCount} />
          )}
          </CountRender>

          <CountRender>
          { (count,incrementCount) => (
                    <HoverCounter2 count={count} incrementCount={incrementCount} />
          )}
          </CountRender>
      */}
      {/* 
        <ComponentC />
        <UserProvider value='raki'>
            <ComponentC />
         </UserProvider>
      */}
      <PrakashSample />
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
    </div>
  );
}

export default App;
