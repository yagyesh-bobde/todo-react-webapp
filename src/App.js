import './App.css';
import Header from './Mycomponents/Header';
import { Footer } from './Mycomponents/Footer';
import { Todos } from './Mycomponents/Todos';
import React, { useState } from 'react';
import { AddTodo } from './Mycomponents/AddTodo';

function App() {
  const ondelete= (todo) => {
    setTodos(todos.filter((e)=>{
      return e!==todo
    }));
  }
  const [todos, setTodos] = useState([
    {
      srno : 1,
      title : 'Go to the store',
      description: 'Buy grocesseries'
    },
    {
      srno : 2,
      title : 'Go to the barbar',
      description: 'Cut ur hair'
    },
    {
      srno : 3,
      title : 'Go to CCD',
      description: 'Buy Latte'
    }
  ])
  return (
    <>
      <Header/>
      <AddTodo></AddTodo>
      <Todos todos={todos} ondelete={ondelete}/>
      <Footer/>
    </>
  );
}

export default App;
