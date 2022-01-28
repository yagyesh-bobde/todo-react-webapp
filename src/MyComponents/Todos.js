import React from 'react';
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
    let stylelist = {
        width:'70%'
    }
  return (
      <div className='container' style={stylelist}>
          <h3 className='text-center my-3'>ToDos List</h3>

           {props.todos.length === 0? <h3>No Tasks to Display</h3> :  
          props.todos.map((todo)=> {
              return(<> 
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
              <hr/>
                </>)
          })
          }
          
      </div>
  )
};
