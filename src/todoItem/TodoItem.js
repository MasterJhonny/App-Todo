import React from 'react';
import './TodoItem.css';

function TodoItem (props) {
    const completedTodo = (todo) => {
        alert(`has Completed el To-do, ${todo}`)

    }
    const deleteTodo = (todo) => {
        alert(`has Deleted el To-do, ${todo}`)
    }
    
    return (
        <li className='TodoItem' id={props.id}>
            <label>
                <input
                    onClick={() => completedTodo(props.text)}
                    type="checkbox" className="Todo__check"/> 
                <span className={`item__check ${props.completed && "item__icon--check"}`}></span>
                <p className={`parrafo ${props.completed && "item__text--check"}`} >{props.text}</p>
            </label>
            <span
                onClick={() => deleteTodo(props.text)} 
                className='delete-item' title="borrar To-do"></span>
        </li>
    );
}



export { TodoItem };