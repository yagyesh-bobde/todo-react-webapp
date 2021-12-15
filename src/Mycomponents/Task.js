import React from 'react'

export const Task = ({todo,ondelete}) => {
    return (
        <div className='container'>
             <h4>{todo.title}</h4>
             <p>{todo.description}</p>
             <button className="btn btn-sm  btn-danger" onClick={()=>{ondelete(todo)}}>Delete</button>
        </div>
    )
}
