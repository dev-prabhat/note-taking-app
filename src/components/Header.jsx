import React from "react"
import "./common.css"

export default function Header() {
    return (
        <nav className="nav-bar d-flex">
            <a href="/" className="btn-link d-inline_block">
                <h1 className="head-lg">Note App</h1></a>
            <div className="search-container position-rel">
                <input
                    className="text-center padding-xs form-field border-radius-xs padding-xs text-sm"
                    type="text"
                    placeholder="Search"
                />
                <i className="fas fa-search position-abs top-50 left-0 tranform"></i>
            </div>
            <a href="/" className="btn-link d-inline_block">
                <h1 className="head-sm">Github</h1></a>
        </nav>
    )
}