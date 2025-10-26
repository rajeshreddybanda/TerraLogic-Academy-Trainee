import React from 'react';
import logo from './logo.svg';
import './App.css';
//import ButtonClick from './ButtonClick'; 
import IncrementComponent, { DecrementComponent } from './IncrementComponent';
import DataBinding from './DataBindingComponenet';
import ParentComponent from './ParentComponent';
import Greeting from './Greetings';
import ConditionalRendering from './ConditionalRendering';
function App() {
  return (
    <div className="App">
        {/* <>
      <IncrementComponent/>
      <DecrementComponent/>
      <DataBinding/>
      <ParentComponent /></> */}
      <Greeting isLoggedIn={true} isAuthorised={false}/>
      <ConditionalRendering isLoggedIn={false}/>
      {/* 
         <ButtonClick /><header className="App-header">
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
