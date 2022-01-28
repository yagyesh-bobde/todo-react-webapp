import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState } from 'react';



function App() {
  const onDelete = (todo) => {
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo = (title , desc) => {
    let sno;
    if (todos.length===0) {
       sno = 1
    }
    else {
       sno = todos[todos.length - 1].sno +1
    }
    const newTodo = {
      sno : sno,
      title: title,
      desc:desc
    }
    setTodos([...todos,newTodo])
  }

  const [todos, setTodos] = useState(
    [{
    sno:1 ,
    title: 'Go to the mall',
    desc: 'in the Mall buy this stuff'
  },
  {
    sno:2 ,
    title: 'Go to the market',
    desc: 'in the market buy this stuff'
  },
  {
    sno:3 ,
    title: 'Go to the shop',
    desc: 'in the shop buy this stuff'
  }]
  )
  return (
   <>
    <Header title="My Todos List"/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos = {todos} onDelete={onDelete}/>
    <Footer/>
   </>
  );
}

export default App;
