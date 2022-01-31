import React from 'react';
import './CreateButton.css';

function CreateTodoButton () {
    const onClickButton = (msg)=> {
        alert(msg)
    }
    return (
        <div className="container__btn">
            <button onClick={() => onClickButton("Ahora si!")}>+</button>
        </div>
    );
}

export { CreateTodoButton };