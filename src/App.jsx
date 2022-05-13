import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';


// import compomentes
import { Home } from './Home/Home';
import { Signup } from "./Signup/Signup";
import { Login } from './Login/Login';

// context provider
import { ContextUserProvider } from './Contexts/ContextUser'


function App(props) {

  // const auth = useUser().isAuthent()
  const auth = true;

  // render de los compomentes
  return (
    <ContextUserProvider>
      <Router>
        <Routes>
          <Route path="/App-Todo" element={ <Home/> }/>
          <Route path="/App-Todo/signup" element={
            <Signup/>
          }/>
          <Route path="/App-Todo/login" element={
            <Login/>
          }/>
        </Routes>
      </Router>
    </ContextUserProvider>
  );
}

export default App;
