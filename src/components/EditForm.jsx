import React, { useState, useEffect } from 'react';
import { useNote } from '../contexts/InputContext';

import { FiTrash2, FiEdit } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { GrUpdate } from "react-icons/gr";

import "./common.css"

const EditForm = ({ note }) => {
    const { id, title, description } = note
    const { dispatch } = useNote();
    const [isEditing, setIsEditing] = useState(false);
    const [editFrom, setEditForm] = useState({
        updatedTitle: title,
        updatedDescription: description,
    });

    useEffect(() => {
        if (note) {
            setEditForm(prev => ({
                ...prev
            }))
        }
    }, [note.title, note.description, note])

    const deleteItem = (id) => {
        dispatch({ type: 'DELETE', payload: id });
    };

    const updateItem = (e) => {
        e.preventDefault();
        dispatch({
            type: 'EDIT',
            payload: { id, title: editFrom.updatedTitle, description: editFrom.updatedDescription },
        });
        setIsEditing((prev) => !prev);
    };
    return (
        <div className="single-note border-radius-xs margin-sm padding-sm">
            {isEditing ? (
                <form onSubmit={updateItem}>
                    <label className="form-label">Title:</label>
                    <input
                        type="text"
                        className="form-field border-radius-xs padding-xs"
                        placeholder="Enter the title"
                        value={editFrom.updatedTitle}
                        onChange={(e) =>
                            setEditForm((prev) => ({ ...prev, updatedTitle: e.target.value }))
                        }
                        required
                    />

                    <label>Description:</label>
                    <textarea
                        className="form-field border-radius-xs padding-xs"
                        type="text"
                        placeholder="Enter the content here"
                        value={editFrom.updatedDescription}
                        onChange={(e) =>
                            setEditForm((prev) => ({ ...prev, updatedDescription: e.target.value }))
                        }
                        required
                    >
                    </textarea>
                    <div className='d-flex'>
                        <div className='action-container padding-xs'>
                            <span className='action-message padding-xxs border-radius-xs'>Update</span>
                            <GrUpdate onClick={updateItem} className='head-sm' />
                        </div>
                        <div className='action-container padding-xs'>
                            <span className='action-message padding-xxs border-radius-xs'>Cancel</span>
                            <ImCancelCircle onClick={() => setIsEditing((prev) => !prev)} className='head-sm' />
                        </div>
                    </div>
                </form>
            ) : (
                <div>
                    <h1 className="head-md note-title">{title}</h1>
                    <div className="text-sm">{description}</div>
                    <div className='d-flex'>
                        <div className='action-container padding-xs'>
                            <span className='action-message padding-xxs border-radius-xs'>Delete</span>
                            <FiTrash2 onClick={() => deleteItem(id)} />
                        </div>
                        <div className='action-container padding-xs'>
                            <span className='action-message padding-xxs border-radius-xs'>Edit</span>
                            <FiEdit onClick={() => setIsEditing((prev) => !prev)} />
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default EditForm;
