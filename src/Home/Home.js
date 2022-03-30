import React, { useState, useEffect, useContext } from 'react';


//import component 
import { Header } from "../Header/Header";
import { TodoCounter } from "../todoCounter/TodoCounter";
import { TodoSearcher } from "../todoSearcher/TodoSearcher";
import { TodoList } from "../todoList/TodoList";
import { TodoItem } from '../todoItem/TodoItem';
import { CreateTodoButton } from "../createTodoButton/CreateTodoButton";

// import context
import { ContextUser } from '../Contexts/ContextUser'

function Home () {

  const { user, setUser} = useContext(ContextUser);

  console.log('user Login', user);
   
    // estado de los todos existentes
  const [todos, setTodos] = React.useState([]);
  // estado de los valores buscados
  const [searchValue, setSearchValue] = React.useState('');

  // function async for get Todos
  async function getTodos(id) {
    const response = await fetch(`http://192.168.1.101:8080/api/v1/todos/${id}`);
    const data = await response.json();
    console.log(data)
    setTodos(data.reverse());
  }
  
  // function async for crete to todo
  async function postTodo(data) {
    const { text, completed, user_id } = data;
    try {
      const response = await fetch("http://192.168.1.101:8080/api/v1/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          text,
          completed,
          user_id
        }),
      });
      await response.json();

    } catch (error) {
      console.error(error);
    }
    getTodos(user.id);
  }

  // function asycn to update los data  
  async function updateTodo (id, done) {
    try {
      const response = await fetch(`http://192.168.1.101:8080/api/v1/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          completed: done,
        }),
      });
      const data = await response.json();

    } catch (error) {
      console.error(error);
    }
    getTodos(user.id);
  }

  // function async to delete item 
  async function deleteItem (id) {
    try {
      const response = await fetch(`http://192.168.1.101:8080/api/v1/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      const data = await response.json();
      console.log('here!', data);
    } catch (error) {
      console.error(error);
    }
    getTodos(user.id);
  }

  useEffect(() => {
    getTodos(user.id);
    console.log('here! id', user.id)
  }, []);


  // cantidad de todos completed
  const completedTodos = todos.filter(todo => !!todo.completed).length;

  // exprecion regular para buscar to-dos
  let expre = new RegExp(searchValue, "i");
  // flitrado de los todos
  let nombres = todos.filter(todo => expre.test(todo.text));
    
    return (
        <React.Fragment>
            <Header
              httpOnly={user.httpOnly}
            />
            <div className="main">
              <TodoCounter
                total={todos.length}
                completed={completedTodos}
                userName={user.name}
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
                    viewTodos={nombres}
                    deleteItem={deleteItem}
                    updateTodo={updateTodo}
                  />
                ))}
              </TodoList>
              <CreateTodoButton
                postTodo={postTodo}
                userId={user.id} 
              />
            </div>
        </React.Fragment>
    );
}

export { Home };