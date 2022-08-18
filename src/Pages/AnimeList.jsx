import React from 'react'
import Star from '../img/Star.svg'
import { Link } from 'react-router-dom'


export default function AnimeList(props) {
  return (
 
<div className="container-films">
{/* <h2>Popular Films</h2> */}
<div className="films-films__list">
    {props.anime.map((anime, index) =>
        <div className="films-films__item" key={index}>
        <div className="films-img">
          <img 
            className="poster" 
            src={anime.image_url} 
            alt="Movie Poster" 
          />
          </div>
        <span className="films-films__title-vote_average" >
          {anime.score} 
          <img
           className="star"
            src={Star} 
            alt="Star" 
          /> 
        </span>
        <span className="films-films__title" >
          {anime.title}
        </span>
        <div className="more"> 
          <Link 
            key={anime.id}
            className="link"
             to={`/InfoAnime/${anime.mal_id}`}
          >
            Подробнее
          </Link>
        </div>
    </div> )}
</div>
</div> 

  )
}