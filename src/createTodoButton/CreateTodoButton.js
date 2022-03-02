import React from "react";
import "./CreateButton.css";

function CreateTodoButton({ postTodo, userId }) {


  

  const onClickButton = () => {
    let valorTodo = prompt("Ahora si! crearemos un to-do:");
    if(valorTodo){
      const newTodo = {
        text: valorTodo,
        completed: false,
        user_id: userId
      };
      // console.log(newTodo);
      postTodo(newTodo);
    } else {
      onClickButton()
    }
  };
  return (
    <div>
      <button
        className="btn"
        onClick={() => onClickButton()}
      >
        +
      </button>
    </div>
  );
}

export { CreateTodoButton };
