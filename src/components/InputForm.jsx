import React, { useState } from 'react'
import { useNote } from "../contexts/InputContext"
import "./common.css"

export default function InputForm() {
    const { setNotes } = useNote()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    const handleTitle = (value) => {
        setTitle(value)
    }

    const handleDescription = (value) => {
        setDescription(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setNotes(pre => [...pre, { title, description }])
        setTitle("")
        setDescription("")
    }


    return (
        <form className='input-form' onSubmit={handleSubmit}>
            <label class="form-label">Title:</label>
            <input
                type="text"
                class="form-field border-radius-xs padding-xs"
                placeholder="title "
                required
                value={title}
                onChange={(e) => handleTitle(e.target.value)}
            />

            <label class="form-label">Description:</label>
            <textarea
                class="form-field border-radius-xs padding-xs"
                placeholder="write here..."
                rows="5"
                required
                value={description}
                onChange={(e) => handleDescription(e.target.value)}
            >
            </textarea>
            <button className='btn btn-primary head-sm'>Submit</button>
        </form>
    )
}