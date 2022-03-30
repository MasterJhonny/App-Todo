import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';


// import compomentes
import { Home } from './Home/Home';
import { Signup } from "./Signup/Signup";
import { Login } from './Login/Login';


import { ContextUserProvider } from './Contexts/ContextUser'

// import use user
import { useUser } from './hooks/useUser';

// const defaultsTodos = [
//   { id: 1, text: 'Cortar cebolla', completed: false },
//   { id: 2, text: 'Tomar el curso de React', completed: true },
//   { id: 3, text: 'Tomar Verano', completed: true },
//   { id: 4, text: 'Lalalalal', completed: true },
//   { id: 5, text: 'las vida', completed: false },
//   { id: 6, text: 'como hacer', completed: true },
//   { id: 7, text: 'tomar agua', completed: false },
//   { id: 8, text: 'comer tomar', completed: true },
//   { id: 9, text: 'hacer galletas', completed: false },
//   { id: 10, text: 'hacer helados', completed: true },
//   { id: 11, text: 'hacer la tarea', completed: true }
// ]

// function Redirect ({to}){
//   let navigate = useNavigate();

//   useEffect(() => {
//     navigate(to)
//   })
//   return null;
// }



function App(props) {

  const auth = useUser().isAuthent()


  // render de los compomentes
  return (
    <ContextUserProvider>
      <Router>
        <Routes>
          <Route path="/App-Todo" element={auth ? <Home/> : <Navigate to="/App-todo/login"/> }/>
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
