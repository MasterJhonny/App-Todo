import React, { useContext } from "react";
import { ContextUser } from '../Contexts/ContextUser'

import "./CreateButton.css";



function CreateTodoButton({ postTodo }) {

  const { user } = useContext(ContextUser);

  const onClickButton = () => {
    let valorTodo = prompt("Ahora si! crearemos un to-do:");
    if(valorTodo){
      const newTodo = {
        text: valorTodo,
        completed: false,
        user_id: user.id
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
