import React from 'react'

function Sort({ sortText, handleChange }) {
    return (
        <>
            <div style={{ display: 'inline-block' }} className="text-md">Sort By</div>
            <select
                value={sortText}
                onChange={e => handleChange(e)}
            >
                <option value="stargazers_count">Stars</option>
                <option value="watchers_count">Watchers</option>
                <option value="score">Score</option>
                <option value="name">Name</option>
                <option value="created_at">Created At</option>
                <option value="updated_at">Updated At</option>
            </select>
        </>
    )
}

export default Sort