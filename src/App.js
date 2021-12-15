import './App.css';
import Header from './Mycomponents/Header';
import { About } from './Mycomponents/About';
import { Footer } from './Mycomponents/Footer';
import { Todos } from './Mycomponents/Todos';
import React, { useState,useEffect } from 'react';
import { AddTodo } from './Mycomponents/AddTodo';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  let initTodo;
  if (!localStorage.getItem('todos')===null){
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'))
  }

  const addtask = (title,desc) => {
    let sno;
    if (todos.length===0) {
      sno=1
    } 
    else{
      sno = todos[todos.length-1].srno +1
    }
    const mytodo = {
      srno: sno,
      title : title ,
      description: desc
    }
    setTodos([...todos,mytodo] );

    
  }
  const ondelete= (todo) => {
    setTodos(todos.filter((e)=>{
      return e!==todo
    }));
    localStorage.setItem('todos' , JSON.stringify(todos))
  }
  const [todos, setTodos] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem('todos' , JSON.stringify(todos)) 
  }, [todos])

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={
            <>
            <hr/>
          <Todos todos={todos} ondelete={ondelete}/>
            <hr/>
          <AddTodo addtask={addtask}></AddTodo>
            </>
          }/>
          <Route exact path="/about" element={<About/>}>
          </Route>  
        </Routes>    

       
        <Footer/>
      </Router>
    </>
  );
}

export default App;
