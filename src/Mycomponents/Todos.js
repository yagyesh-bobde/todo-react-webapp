import React from 'react'
import { Task } from './Task'

export const Todos = (props) => {
    return (
        <div>
            <h5>Task List</h5>
            <Task todo={props.todos[0]}/>
        </div>
    )
}
