import React, { createContext, useContext, useEffect, useReducer } from 'react'

const InputFormContext = createContext()

const InputFormProvider = ({ children }) => {
    const [state, dispatch] = useReducer(noteReducer, {
        notes: [],
        value: {
            id: "", title: "", description: ""
        }
    })

    function noteReducer(state, action) {
        switch (action.type) {
            case "ADD_TITLE":
                const { id, title } = action.payload
                return { ...state, value: { ...state.value, id, title } }
            case "ADD_DESCRIPTION":
                return { ...state, value: { ...state.value, description: action.payload } }
            case "DELETE":
                return { ...state, notes: state.notes.filter(item => item.id !== action.payload) }
            case "SUBMIT":
                return { ...state, notes: [...state.notes, state.value], value: { title: "", description: "" } }
            case "GET":
                return { ...state, notes: [...state.notes, ...action.payload] }
            default:
                return state
        }
    }

    const { notes } = state
    useEffect(() => {
        const noteArr = JSON.parse(localStorage.getItem("mynotes"))
        if (noteArr) {
            dispatch({ type: "GET", payload: noteArr })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("mynotes", JSON.stringify(notes));
    }, [notes])

    return (
        <InputFormContext.Provider value={{ state, dispatch }}>
            {children}
        </InputFormContext.Provider>
    )
}

const useNote = () => useContext(InputFormContext)

export { InputFormProvider, useNote } 