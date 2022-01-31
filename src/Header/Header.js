import React from 'react';
import './Header.css';

const url = 'https://www.svgrepo.com/show/356977/todo-list.svg';

function Header () {
    return (
        <div className="header">
            <img src={url}/>
            <h2 className="title">To-do List</h2>
        </div>
    );
}

export { Header };