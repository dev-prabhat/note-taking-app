import React, { useState } from 'react'
import { v4 as uuid } from "uuid"
import { useNote } from "../contexts/InputContext"
import "./common.css"

export default function InputForm() {
    const { dispatch } = useNote()

    const [form, setForm] = useState({ title: "", description: "" })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: "ADD", payload: { id: uuid(), title: form.title, description: form.description } })
        setForm({ title: "", description: "" })
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
                value={form.title}
                onChange={(e) => setForm(prev => ({ ...prev, title: e.target.value }))}
            />

            <label class="form-label">Description:</label>
            <textarea
                class="form-field border-radius-xs padding-xs"
                placeholder="write here..."
                rows="5"
                required
                value={form.description}
                onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
            >
            </textarea>
            <button className='btn btn-primary head-sm'>Submit</button>
        </form>
    )
}