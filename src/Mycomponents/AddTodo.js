import React from 'react'

export const AddTodo = () => {
    // let format = {
    // }
    return (
        <div className='container my-4'>
            <form>
                <div class="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Task</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3"/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3"/>
                    </div>
                </div>
                <button 
                type="submit" 
                className="btn btn-sm btn-dark">Add Task</button>
            </form>
        </div>
    )
}
