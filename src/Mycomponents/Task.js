import React from 'react'

export const Task = ({todo,ondelete}) => {
    return (
        <div className='container my-2'>
             <h5>{todo.title}</h5>
             <p>{todo.description}</p>
             <button className="btn btn-sm btn-danger" onClick={()=>{ondelete(todo)}}>Delete</button>
        </div>
    )
}
