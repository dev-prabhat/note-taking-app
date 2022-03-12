import React, { createContext, useContext, useState } from 'react'

const InputFormContext = createContext()

const InputFormProvider = ({ children }) => {
    const [notes, setNotes] = useState([])

    return (
        <InputFormContext.Provider value={{ notes, setNotes }}>
            {children}
        </InputFormContext.Provider>
    )
}

const useNote = () => useContext(InputFormContext)

export { InputFormProvider, useNote } 