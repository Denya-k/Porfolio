import React from 'react'
import { Link } from 'react-router-dom'
import noImage from "../img/no_image.jpg"

export default function BooksList(props) {
  return (
 
<div className="container-films">
<div className="films-films__list">
    {props.book.map((movie, index) =>
        <div className="films-films__item" key={index}>
        <div className="films-img">
          <img className="poster"
           src={movie.volumeInfo.imageLinks ? movie.volumeInfo.imageLinks.thumbnail :  `${noImage}`} 
           alt="Book Poster" 
          />

        <div className="more"> 
          <Link 
            key={movie.id}
            className="link"
             to={`/InfoBook/${movie.id}`}
          >
            Подробнее
          </Link>
        </div>
          
        </div>
        <span className="films-films__title" >
          {movie.volumeInfo.title}
        </span>
        
    </div> )}
</div>
</div> 

  )
}
