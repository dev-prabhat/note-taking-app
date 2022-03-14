import React from "react"
import { useNote } from '../contexts/InputContext'
import { FiTrash2 } from "react-icons/fi"
import "./common.css"

export default function NoteList() {
    const { state, dispatch } = useNote()
    const { notes } = state

    return (
        <div className="padding-sm notes">
            {
                notes.length > 0 && (
                    notes.map(({ id, title, description }) => (
                        <div className="single-note border-radius-sm margin-xs padding-xs" key={id}>
                            <h1 className="head-md note-title">{title}</h1>
                            <div className="text-sm">{description}</div>
                            <button className="padding-xxs" onClick={() => dispatch({ type: "DELETE", payload: id })}><FiTrash2 /></button>
                        </div>
                    ))
                )
            }
        </div>
    )
}