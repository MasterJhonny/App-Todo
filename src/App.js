import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';


// import compomentes
import { Home } from './Home/Home';
import { Signup } from "./Signup/Signup";
import { Login } from './Login/Login';


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

function App(props) {
  const [dataUser, setDatauser] = useState({});


  // render de los compomentes
  return (
    <Router>
      <Routes>
        <Route path="/"  element={
          <Home dataUser={dataUser} />
        }/>
        <Route path="/App-todo/signup" element={
          <Signup/>
        }/>
        <Route path="/App-todo/login" element={
          <Login setDatauser={setDatauser}/>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
