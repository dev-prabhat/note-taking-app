import React, { useState } from 'react'
import { v4 as uuid } from "uuid"
import { useNote } from "../contexts/InputContext"

import { GrAdd } from "react-icons/gr";
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
            <label className="form-label">Title:</label>
            <input
                type="text"
                className="form-field border-radius-xs padding-xs"
                placeholder="title "
                required
                value={form.title}
                onChange={(e) => setForm(prev => ({ ...prev, title: e.target.value }))}
            />
            <label className="form-label">Description:</label>
            <textarea
                className="form-field border-radius-xs padding-xs"
                placeholder="write here..."
                rows="5"
                required
                value={form.description}
                onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
            >
            </textarea>
            <div className='action-container padding-xs'>
                <span className='action-message padding-xxs border-radius-xs'>Add </span>
                <GrAdd onClick={handleSubmit} className='head-sm' />
            </div>
        </form>
    )
}