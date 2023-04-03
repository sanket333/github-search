import React from 'react'

function Search({ query, handleChange }) {
  return (
    <>
        <input
        align="middle"
        className='search'
        placeholder='Search...'
        value={query}
        onChange={e => handleChange(e)}
      />
    </>
  )
}

export default Search