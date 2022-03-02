import React from 'react';
import './TodoCounter.css';

function TodoCounter ({ total, completed, userName }) {
    return (
        <div className="TodoCounter">
            <h2>Hi,  {userName} 🤚</h2>
            <p>Has completado {completed} de {total} tasks</p>
        </div>
    ); 
}

export { TodoCounter };