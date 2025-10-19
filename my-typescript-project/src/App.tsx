import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import { Button } from './button';
import { Card } from './Cards';
import MyClassComponent from './MyClassComponent';

function App() {
  return (
    <div className="App">
    <MyClassComponent/>
      <Card  name ="ABD"  age = {26}  mobile = {9912277577}/>
      <Card  name ="MSD"  age = {27}  mobile = {991277577}/>
     {/* <Button Card ="Vellers"/>
      <Button name ="RoKo"/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
