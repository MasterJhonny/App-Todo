import React from 'react';
import './TodoCounter.css';

function TodoCounter ({ total, completed }) {
    return (
        <div className="TodoCounter">
            <h2>Hi, Jhonny 🤚</h2>
            <p>Has completado {completed} de {total} tasks</p>
        </div>
    ); 
}

export { TodoCounter };