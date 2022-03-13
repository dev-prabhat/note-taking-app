import React from 'react'
import { v4 as uuid } from "uuid"
import { useNote } from "../contexts/InputContext"
import "./common.css"

export default function InputForm() {
    const { state, dispatch } = useNote()
    const { value } = state

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: "SUBMIT" })
    }


    return (
        <form className='input-form' onSubmit={handleSubmit}>
            <label class="form-label">Title:</label>
            <input
                type="text"
                class="form-field border-radius-xs padding-xs"
                placeholder="title "
                required
                value={value.title}
                onChange={(e) => dispatch({ type: "ADD_TITLE", payload: { id: uuid(), title: e.target.value } })}
            />

            <label class="form-label">Description:</label>
            <textarea
                class="form-field border-radius-xs padding-xs"
                placeholder="write here..."
                rows="5"
                required
                value={value.description}
                onChange={(e) => dispatch({ type: "ADD_DESCRIPTION", payload: e.target.value })}
            >
            </textarea>
            <button className='btn btn-primary head-sm'>Submit</button>
        </form>
    )
}