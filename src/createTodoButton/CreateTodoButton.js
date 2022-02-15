import React from "react";
import "./CreateButton.css";

function CreateTodoButton({ postTodo }) {


  

  const onClickButton = (msg) => {
    let valorTodo = prompt(msg);
    const newTodo = {
      text: valorTodo,
      completed: false,
    };
    // console.log(newTodo);
    postTodo(newTodo);
  };
  return (
    <div>
      <button
        className="btn"
        onClick={() => onClickButton("Ahora si! crearemos un to-do:")}
      >
        +
      </button>
    </div>
  );
}

export { CreateTodoButton };
