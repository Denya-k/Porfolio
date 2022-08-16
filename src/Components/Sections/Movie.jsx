import React from 'react'
import { Link } from 'react-router-dom'


// cb5b43d2 API KEY

export default function Movie(props) {

  return (
    <section className="wrapper-section-top">
        <div className="container">
                <h2>Top Films</h2>
                <div className="movie-movie__list ">
                    {props.movies.map((movie, index) => 
                    <div className="movie-movie__item hover-effect-cover" key={index}>

                        <div className="more"> 
                          <Link className="link" to="#">Подробнее</Link>
                        </div>

                        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="Movie Poster" />
                        <span className="movie-movie__title" >{movie.title}</span>
                    
                        
                    </div> )}
                </div>
        </div>
    </section>
  )
}
