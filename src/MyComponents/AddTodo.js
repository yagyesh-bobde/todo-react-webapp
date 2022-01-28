import React, { useState } from 'react';

export const AddTodo = (props) => {
    let styleAdd = {
        width:'50%'
    }

    const [title, settitle] = useState('');
    const [desc, setdesc] = useState('');

    const submit = (e) => {
        e.preventDefault() //stops the reloading of the page
        if (!title || !desc) {
            alert('Title of Description cannot be empty')
        }
        props.addTodo(title,desc)
    }

  return <div className='my-3 container' style={styleAdd}>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Task</label>
    <input type="text" value={title} onChange={(e) => {settitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" value={desc} onChange={(e) => {setdesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-primary btn-success">Submit</button>
</form>
  </div>;
};
