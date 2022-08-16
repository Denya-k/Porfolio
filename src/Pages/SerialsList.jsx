import React from 'react'
import Star from '../img/Star.svg'
import { Link } from 'react-router-dom'


export default function SerialsList(props) {
  return (
 
<div className="container-films">
<div className="films-films__list">
    {props.serials.map((serials, index) =>
        <div className="films-films__item" key={index}>
        <div className="films-img">
          <img className="poster"
            src={`https://image.tmdb.org/t/p/w300${serials.poster_path}`} 
            alt="Movie Poster" 
          />
        </div>
        <span className="films-films__title-vote_average" >
          {serials.vote_average} 
          <img 
            className="star" 
            src={Star} 
            alt="Star" 
          /> 
        </span>
        <span className="films-films__title" >
          {serials.name}
        </span>
        <div className="more"> 
          <Link className="link" to="#">Подробнее</Link>
        </div>
    </div> )}
</div>
</div> 

  )
}
