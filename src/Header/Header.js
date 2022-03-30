import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const url = 'https://www.svgrepo.com/show/356977/todo-list.svg';


function Header ({ httpOnly }) {

    console.log('httpOnly', httpOnly);

    const auth = httpOnly;

    console.log('auth', auth);



    function onLogout() {
        console.log('onLogout!!');
    }

    async function getIsAutenticated(){
        const response = await fetch('http://192.168.1.101:8080/api/v1/users/auth');
        const data = await response.json();

        console.log(data)
        // setAuth(data.value);
    }

    useEffect(() => {
        getIsAutenticated();
    }, [])

    return (
        <div className="header">
            <img src={url} alt="logo app"/>
            <h2 className="title">To-do List</h2>
            <div className="nav">
                {!auth ? <NavLink to="/App-Todo/login" className="btn-nav">Login</NavLink>: null}
                {!auth ? <NavLink to="/App-Todo/signup" className="btn-nav">Signup</NavLink>: null}
                {auth ? <NavLink to="/App-Todo/login" className="btn-nav" onClick={onLogout}>Logout</NavLink>: null}
            </div>
        </div>
    );
}

export { Header };