import React from "react"
import { useNote } from '../contexts/InputContext'
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
                            <h1 className="head-sm">{title}</h1>
                            <div className="text-sm">{description}</div>
                            <button className="padding-xs" onClick={() => dispatch({ type: "DELETE", payload: id })}>Trash</button>
                        </div>
                    ))
                )
            }
        </div>
    )
}