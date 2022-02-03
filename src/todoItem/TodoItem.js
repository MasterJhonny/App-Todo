import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  // state de completed de cada to-do item
  const [stateCompleted, setStateCompleted] = React.useState(props.completed);

  // function for change the state of completed
  const changedStateCompleted = () => {
    setStateCompleted(!stateCompleted);
    let index = props.id;
    let todosModificados = props.todos.map(todo => {
      if(todo.id === index) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    props.setTodos([...todosModificados]);
  }

  // function de marcar completed
  const completedTodo = (todo) => {
    if(!stateCompleted){
      alert(`has Completed el To-do, ${todo}`);
    } else {
      alert(`Aun no completed el To-do, ${todo}`);
    }
    changedStateCompleted();
  };

  // function for delete to-do item
  const deleteTodo = (todo) => {
    alert(`has Deleted el To-do, ${todo}`);
    let index = props.id;
    let todosNoDelete = props.todos.filter(todo => todo.id !== index);
    props.setTodos([...todosNoDelete]);
  };

  // reder To-do item
  return (
    <li className="TodoItem" id={props.id}>
      <label>
        <input
          onClick={() => completedTodo(props.text)}
          type="checkbox"
          className="Todo__check"
        />
        <span
          className={`item__check ${stateCompleted && "item__icon--check"}`}
        ></span>
        <p className={`parrafo ${stateCompleted && "item__text--check"}`}>
          {props.text}
        </p>
      </label>
      <span
        onClick={() => deleteTodo(props.text)}
        className="delete-item"
        title="borrar To-do"
      ></span>
    </li>
  );
}

export { TodoItem };
