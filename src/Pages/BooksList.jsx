import React from 'react'
import Star from '../img/Star.svg'

export default function BooksList(props) {
  return (
 
<div className="container-films">
<div className="films-films__list">
    {props.book.map((movie, index) =>
        <div className="films-films__item" key={index}>
        <div className="films-img"><img className="poster" src={movie.volumeInfo.imageLinks ? movie.volumeInfo.imageLinks.thumbnail : ""} alt="Book Poster" /></div>
        {/* <div className="films-img"><img className="poster" src="http://books.google.com/books/content?id=Y7JQD8Ihox4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="Book Poster" /></div> */}
        <span className="films-films__title" >{movie.volumeInfo.title}</span>
    </div> )}
</div>
</div> 

  )
}
