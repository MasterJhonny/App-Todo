import React from "react";
import './App.css';


// import compomentes
import { Header } from "./Header/Header";
import { TodoCounter } from "./todoCounter/TodoCounter";
import { TodoSearcher } from "./todoSearcher/TodoSearcher";
import { TodoList } from "./todoList/TodoList";
import { TodoItem } from './todoItem/TodoItem';
import { CreateTodoButton } from "./createTodoButton/CreateTodoButton";

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de React', completed: false },
  { text: 'Tomar Verano', completed: true },
  { text: 'Lalalalal', completed: false }

]

function App(props) {
  return (
    <React.Fragment>
      <Header/>
      <div className="main">
        <TodoCounter/>
        <TodoSearcher />
        <TodoList>
          {todos.map((todo, index) => (
            <TodoItem key={todo.text} id={index.toString()} text={todo.text} completed={todo.completed}/>
          ))}
        </TodoList>
        <CreateTodoButton/>
      </div>
    </React.Fragment>
  );
}

export default App;
