import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { functions } from '../hooks/helpers'

import './Header.css';


import { ContextUser } from '../Contexts/ContextUser'

const url = 'https://www.svgrepo.com/show/356977/todo-list.svg';


function Header () {

    const { user } = useContext(ContextUser);

    function onLogout() {
        functions.deleteCookies()
    }

    return (
        <div className="header">
            <img src={url} alt="logo app"/>
            <h2 className="title">To-do List</h2>
            <div className="nav">
                {!user.auth ? <NavLink to="/App-Todo/login" className="btn-nav">Login</NavLink>: null}
                {!user.auth ? <NavLink to="/App-Todo/signup" className="btn-nav">Signup</NavLink>: null}
                {user.auth ? <NavLink to="/App-Todo/login" className="btn-nav" onClick={onLogout}>Logout</NavLink>: null}
            </div>
        </div>
    );
}

export { Header };