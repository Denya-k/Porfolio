import React from 'react'
import Star from '../img/Star.svg'
import { Link} from 'react-router-dom' 
import noImage from "../img/no_image.jpg"


export default function FilmsList(props) {
  
  return (
 
<div className="container-films" >
<div className="films-films__list" >
    {props.movies.map((movie, index) =>
    <div className="films-films__item" key={index}  id={movie.id}>
        <div className="films-img"  >
          
          <img 
            className="poster"
            src={movie.poster_path ? 
              `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            :
              `${noImage}`
        
            }
            alt="Movie Poster"
          />

        <div className="more"> 
          <Link 
            key={movie.id}
            className="link" 
            to={`/InfoFilm/${movie.id}`}
          >
            Подробнее
          </Link>
        </div>


        </div>
        <span className="films-films__title-vote_average" >
          {movie.vote_average} <img className="star" src={Star} alt="Star" /> 
        </span>
        <span className="films-films__title" >
          {movie.title}
        </span>
    </div> 
    )}
</div>
</div> 

  )
}
