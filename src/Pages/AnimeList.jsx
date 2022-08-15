import React from 'react'
import Star from '../img/Star.svg'

export default function AnimeList(props) {
  return (
 
<div className="container-films">
{/* <h2>Popular Films</h2> */}
<div className="films-films__list">
    {props.anime.map((movie, index) =>
        <div className="films-films__item" key={index}>
        <div className="films-img"><img className="poster" src={movie.image_url} alt="Movie Poster" /></div>
        <span className="films-films__title-vote_average" >{movie.score} <img className="star" src={Star} alt="Star" /> </span>
        <span className="films-films__title" >{movie.title}</span>
    </div> )}
</div>
</div> 

  )
}