import React from 'react'
import "./common.css"

export default function InputForm() {
    return (
        <form className='input-form'>
            <label class="form-label">Title:</label>
            <input
                type="text"
                class="form-field border-radius-xs padding-xs"
                placeholder="title"
                required
            />

            <label class="form-label">Description:</label>
            <textarea
                class="form-field border-radius-xs padding-xs"
                placeholder="write here..."
                rows="5"
                required
            >
            </textarea>
            <button className='btn btn-primary head-sm'>Submit</button>
        </form>
    )
}