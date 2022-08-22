import React from 'react'

export default function InfoAboutBook({anime}) {
  return (
        <>
            <h1>Info About Anime</h1>
            <div className="info-info__film">
                <img 
                    className="info-info__poster"
                    src={anime.volumeInfo.imageLinks.thumbnail}
                    alt="Anime Poster"
                />
                <div className="info-info__data">
                    <span className="info-info__title">
                        {anime.volumeInfo.title  || "Not founded"}
                    </span>
                    <ul className="info-info__list">
                        <li className="info-info__item">
                            <b>Page Count: </b> 
                             {anime.volumeInfo.pageCount}
                        </li>
                        <li className="info-info__item">
                            <b>Categories:</b>
                            {anime.volumeInfo.categories}
                        </li>
                        {/* <li className="info-info__item">
                            <b>Production companies: </b>
                            {movie.production_companies[0].name}    
                        </li> */}
                        {/* <li className="info-info__item">
                            <b>Tagline: </b>
                            {movie.tagline}...
                        </li> */}
                        <li className="info-info__item">
                            <b>Authors: </b>
                            {anime.volumeInfo.authors}
                        </li>
                        {/* <li className="info-info__item">
                            <b>Vote count:</b>
                            {anime.producers}
                        </li> */}
                    </ul>
                </div>
            </div>
            <h3>Description</h3>
            <p>{anime.volumeInfo.description}</p>
        </>
        );
}
