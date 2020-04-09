import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import Welcome from './components/welcome';
import Message from './components/message';
import Counter from './components/Counter';
import FunctionClick from './components/functionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';
import Clock from './components/Clock'
import ParentRef from './components/ParentRef';
import Text from './components/Text';
class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <Hello name="mega">
          <p>hello mega welcome</p>
        </Hello>
        <Hello name="lucy">
          <button>subs</button>
        </Hello>
        <Welcome name="dhoop"></Welcome> */}
        {/* <Message></Message> */}
        {/* <Counter></Counter> */}
        {/* <FunctionClick></FunctionClick> */}
        {/* <ClassClick></ClassClick> */}
        {/* <EventBind></EventBind> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <UserGreeting></UserGreeting> */}
        <Clock></Clock>
        <Form></Form>
        <ParentRef></ParentRef>
        {/* <Text></Text> */}
        {/* <NameList></NameList> */}
        
      </div>
    )
  }
}

export default App;
