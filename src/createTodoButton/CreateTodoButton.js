import React from 'react';
import './CreateButton.css';

function CreateTodoButton ({ todos, setTodos }) {
    const onClickButton = (msg)=> {
        let valorTodo = prompt(msg);
        let id = todos.length + 1;
        todos.unshift({ id: id, text: valorTodo, completed: false });
        setTodos([...todos]);
    }
    return (
        <div>
            <button 
                className="btn"
                onClick={() => onClickButton("Ahora si! crearemos un to-do:")}
            >+</button>
        </div>
    );
}

export { CreateTodoButton };