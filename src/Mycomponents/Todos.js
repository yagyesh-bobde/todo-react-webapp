import React from 'react'
import { Task } from '../Mycomponents/Task'

export const Todos = (props) => {
    return (
        <div >
            <div className='container'>
            <h5>Your Tasks</h5>
            {props.todos.length===0? 'No Tasks' : 
            props.todos.map((todo)=>{
                return (<>
                <Task todo={todo} key={todo.srno} ondelete={props.ondelete}/>
                <hr/>
                </>
                )
            })}
            </div>
        </div>
    )
}
