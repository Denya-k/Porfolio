import React from 'react'
import { Link } from 'react-router-dom'


export default function Anime(props) {
  return (
    <section className="wrapper-section-top">
      <div className="container">
            <h2>Top Anime</h2>
            <div className="anime section__list">
                {props.anime.map((anime, index) => 
                <div className="anime section__item" key={index}>
                  <img src={anime.image_url}
                   alt="Anime Poster"
                  />
                  <div className="more"> 
                    <span className="anime section__title" >
                      {anime.title}
                    </span>
                    <Link className="link" to="#">Подробнее</Link>
                  </div>
                </div> 
                )}
            </div>
      </div>
    </section>
  )
}
