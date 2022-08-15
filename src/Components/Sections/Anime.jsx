import React from 'react'

export default function Anime(props) {
  return (
    <section className="wrapper-section-top">
      <div className="container">
            <h2>Top Anime</h2>
            <div className="anime-anime__list">
                {props.anime.map((anime, index) => <div className="anime-anime__item" key={index}>
                    <img src={anime.image_url} alt="Anime Poster" />
                    <span className="anime-anime__title" >{anime.title}</span>
                </div> )}
            </div>
      </div>
    </section>
  )
}
