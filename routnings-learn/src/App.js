// import { Link, Route, Router, Routes } from 'react-router-dom';
// import Home from './Home';
// import About from './About';


// function App() {
//   return (
//       <Router>
//           <nav>
//             <Link to="/">Home</Link> | <Link to="/about">About</Link>
//           </nav>
//            <Routes>
//             <Route path='/' element={<Home/>}/>
//             <Route path='/about' element={<About/>}/>
//           </Routes>
//       </Router>
//   );
// }

// export default App;

import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import { Post } from './Post'
import { BrowserRouter as Router } from 'react-router-dom'
import NotFound from './NotFound'
import { Form } from './ButtonNavigation'

const App = () => {
  return (
    <>
 
    
  
      <Router>
        <nav>
          <Link to='/'>Home</Link> | <Link to='/about'>About</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path = "/posts/:id" element ={<Post/>}/>
          <Route path = "*" element ={<NotFound/>}/>
          <Route path = "form" element ={<Form/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App