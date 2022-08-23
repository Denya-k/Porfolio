import React from 'react'
import Star from '../../img/Star.svg'

import { Link } from 'react-router-dom'


// cb5b43d2 API KEY

export default function Movie(props) {

  return (
    <section className="wrapper-section-top">
        <div className="container">
          <h2>Top Films</h2>
          <div className="movie section__list ">
              {props.movies.map((movie, index) => 
              <div className="movie section__item" key={index}>
                  <div className="more"> 
                  <span className="movie section__title" >
                    {movie.title}
                  </span>
                    <Link 
                      key={movie.id}
                      className="link" 
                      to={`/InfoFilm/${movie.id}`}
                    >
                      Подробнее
                    </Link>
                  </div>
                  <img 
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt="Movie Poster"
                  />
                  
              </div> 
              )}
          </div>
        </div>
    </section>
  )
}
