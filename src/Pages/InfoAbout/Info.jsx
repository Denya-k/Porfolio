import React from 'react'

export default function Info({movie}) {
  return (
        <>
            <h1>Info About Films</h1>
            <div className="info-info__film">
                <img 
                    className="info-info__poster"
                    src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                    alt="Movie Poster"
                />
                <div className="info-info__data">
                    <span className="info-info__title">
                        {movie.original_title   || movie.name || "Not founded"}
                    </span>
                    <ul className="info-info__list">
                        <li className="info-info__item">
                            <b>Release data: </b> 
                             {movie.release_date}
                        </li>
                        <li className="info-info__item">
                            <b>Genres:</b>
                            {movie.genres.map((genre,id) => <span key={id}> {genre.name} </span>)}
                        </li>
                        <li className="info-info__item">
                            <b>Production companies: </b>
                            {movie.production_companies[0].name}    
                        </li>
                        <li className="info-info__item">
                            <b>Tagline: </b>
                            {movie.tagline}...
                        </li>
                        <li className="info-info__item">
                            <b>Rating: </b>
                            {movie.vote_average}
                        </li>
                        <li className="info-info__item">
                            <b>Vote count:</b>
                            {movie.vote_count}
                        </li>
                    </ul>
                </div>
            </div>
            <h3>Description</h3>
            <p>{movie.overview}</p>
        </>
        );
}
