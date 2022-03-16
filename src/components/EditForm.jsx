import React, { useState } from 'react';
import { useNote } from '../contexts/InputContext';

import { FiTrash2, FiEdit } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { GrUpdate } from "react-icons/gr";

import "./common.css"

const EditForm = ({ id, title, description }) => {
    const { dispatch } = useNote();
    const [isEditing, setIsEditing] = useState(false);
    const [editFrom, setEditForm] = useState({
        updatedTitle: title,
        updatedDescription: description,
    });
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
        <div className="single-note border-radius-xs margin-xs padding-xs">
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
                    <button className='padding-xxs'>
                        <GrUpdate />
                    </button>
                    <button className='padding-xxs' onClick={() => setIsEditing((prev) => !prev)}><ImCancelCircle /></button>
                </form>
            ) : (
                <div>
                    <h1 className="head-md note-title">{title}</h1>
                    <div className="text-sm">{description}</div>
                    <button className="padding-xxs" onClick={() => deleteItem(id)}><FiTrash2 /></button>
                    <button className="padding-xxs" onClick={() => setIsEditing((prev) => !prev)}><FiEdit /></button>
                </div>
            )}
        </div>
    );
};

export default EditForm;
