import React from 'react'
import { Task } from '../Mycomponents/Task'

export const Todos = (props) => {
    return (
        <div >
            <h3>Good Morning Yagyesh,</h3>
            
            <h4 className='text-center my-4 py-3'>Here is your List of Tasks!</h4>
            {props.todos.length===0? 'No Tasks' : 
            props.todos.map((todo)=>{
                return <Task todo={todo} key={todo.srno} ondelete={props.ondelete}/>
            })}
        </div>
    )
}
