import React from 'react'

export default function InfoAboutAnime({anime}) {
  return (
        <>
            <h1>Info About Anime</h1>
            <div className="info-info__film">
                <img 
                    className="info-info__poster"
                    src={anime.data.images.webp.large_image_url}
                    alt="Anime Poster"
                />
                <div className="info-info__data">
                    <span className="info-info__title">
                        {anime.data.titles.title  || "Not founded"}
                    </span>
                    <ul className="info-info__list">
                        <li className="info-info__item">
                            <b>Apisode: </b> 
                             {anime.data.episodes}
                        </li>
                        <li className="info-info__item">
                            <b>Status:</b>
                            {anime.data.status}
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
                            <b>Rating: </b>
                            {anime.data.score}
                        </li>
                        {/* <li className="info-info__item">
                            <b>Vote count:</b>
                            {anime.producers}
                        </li> */}
                    </ul>
                </div>
            </div>
            <h3>Description</h3>
            <p>{anime.data.synopsis}</p>
        </>
        );
}