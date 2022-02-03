import React from "react";
import './App.css';


// import compomentes
import { Header } from "./Header/Header";
import { TodoCounter } from "./todoCounter/TodoCounter";
import { TodoSearcher } from "./todoSearcher/TodoSearcher";
import { TodoList } from "./todoList/TodoList";
import { TodoItem } from './todoItem/TodoItem';
import { CreateTodoButton } from "./createTodoButton/CreateTodoButton";

// list of compoments
const defaultsTodos = [
  { id: 1, text: 'Cortar cebolla', completed: false },
  { id: 2, text: 'Tomar el curso de React', completed: true },
  { id: 3, text: 'Tomar Verano', completed: true },
  { id: 4, text: 'Lalalalal', completed: true },
  { id: 5, text: 'las vida', completed: false },
  { id: 6, text: 'como hacer', completed: true },
  { id: 7, text: 'tomar agua', completed: false },
  { id: 8, text: 'comer tomar', completed: true },
  { id: 9, text: 'hacer galletas', completed: false },
  { id: 10, text: 'hacer helados', completed: true },
  { id: 11, text: 'hacer la tarea', completed: true }
]

function App(props) {
  // estado de los todos existentes
  const [todos, setTodos] = React.useState(defaultsTodos);
  // estado de los valores buscados
  const [searchValue, setSearchValue] = React.useState('');

  // cantidad de todos completed
  const completedTodos = todos.filter(todo => !!todo.completed).length;

  // exprecion regular para buscar to-dos
  let expre = new RegExp(searchValue, "i");
  // flitrado de los todos
  let nombres = todos.filter(todo => expre.test(todo.text));

  // render de los compomentes
  return (
    <React.Fragment>
      <Header/>
      <div className="main">
        <TodoCounter
          total={todos.length}
          completed={completedTodos}
        />
        <TodoSearcher
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList>
          {nombres.map(todo => (
            <TodoItem 
              key={todo.text} 
              id={todo.id} 
              text={todo.text} 
              completed={todo.completed}
              todos={todos}
              setTodos={setTodos}
              viewTodos={nombres}
            />
          ))}
        </TodoList>
        <CreateTodoButton
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
