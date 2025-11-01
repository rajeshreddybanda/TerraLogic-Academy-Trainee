import React from 'react';
import logo from './logo.svg';
import './App.css';
import LifeCycleDemo from './ClassLifeCycleDemo'; 
import FunctionalLifeCycle from './FunctionalLifeCycleDemo';
import UserExample from './components/UserExample'; 
import PostList from './Axiosx';
function App() {
  // return (
  //   <div className="App">
  //     <>
  //     {/* <UserExample/>
  //     <FunctionalLifeCycle/>
  //   <LifeCycleDemo/></> */}
  //   <PostList/>
  //   </div>
  
  //   );
  return (
    <div className="App">
      <PostList/>
    </div>
  );
}

export default App;
