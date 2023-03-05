import React from 'react'

const Search = ({searchBar}) => {
    const handleChange = (event) => {
      searchBar(event.target.value)
    }
  return (
    <div>
        <input type="text-box" placeholder='Search Starships' onChange={handleChange}/>
    </div>
  )
}

export default Search