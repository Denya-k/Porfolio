import React from 'react'
import { Link } from 'react-router-dom'

export default function BooksList(props) {
  return (
 
<div className="container-films">
<div className="films-films__list">
    {props.book.map((movie, index) =>
        <div className="films-films__item" key={index}>
        <div className="films-img">
          <img className="poster"
           src={movie.volumeInfo.imageLinks ? movie.volumeInfo.imageLinks.thumbnail : ""} 
           alt="Book Poster" 
          />
        </div>
        <span className="films-films__title" >
          {movie.volumeInfo.title}
        </span>
        <div className="more"> 
          <Link className="link" to="#">Подробнее</Link>
        </div>
    </div> )}
</div>
</div> 

  )
}
