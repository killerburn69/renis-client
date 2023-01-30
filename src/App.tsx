// import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import Active from './pages/ActiveAccount/Active';
import Home from './pages/Home/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/active' element={<Active/>}/>
      </Routes>
    </Router>
  );
}

export default App;
