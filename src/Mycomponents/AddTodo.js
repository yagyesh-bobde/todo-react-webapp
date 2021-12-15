import React,{ useState } from 'react'

export const AddTodo = ({addtask}) => {
    const [title, setTitle] = useState('')
    const [desc, setdesc] = useState('')

    const submit = (e) => {
        e.preventDefault()
        if (!title || !desc ) {
            alert('Title and Description both are required')
        }
        else{
            addtask(title,desc)
            setTitle('')
            setdesc('')
        }
    }

    return (
        <div className='container my-4' >
            <form onSubmit={submit}>
                <h3>Add a Task</h3>
                <div className="mb-3">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Task</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="task"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="col-sm-2 col-form-label">Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e)=>setdesc(e.target.value)} id="desc"/>
                </div>
                <button 
                type="submit" 
                className="btn btn-sm btn-dark">Add Task</button>
            </form>
        </div>
    )
}
