import React from 'react'
// import '../scss/header.scss'


export default function Search(props) {
  return (
    <div className="search">
        <input 
        type="text"
        className="search-search__input"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)  }
        />
    </div>
  )
}
