import React from "react"
import EditForm from './EditForm'
import { useNote } from '../contexts/InputContext'
import "./common.css"

export default function NoteList() {
    const { state } = useNote()
    const { notes } = state

    return (
        <div className="padding-sm notes">
            {
                notes.length > 0 && (
                    notes.map((note) => (
                        <EditForm key={note.id} note={note} />
                    ))
                )
            }
        </div>
    )
}