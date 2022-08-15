import React from 'react'


// cb5b43d2 API KEY

export default function Series(props) {
  return (
    <section className="wrapper-section-top">
      <div className="container">
            <h2>Top Series</h2>
            <div className="series-series__list">
                {props.series.map((series, index) => <div className="series-series__item" key={index}>
                    <img src={`https://image.tmdb.org/t/p/w300${series.poster_path}`} alt="Series Poster" />
                    <span className="series-series__title" >{series.name}</span>
                </div> )}
            </div>
      </div>
    </section>
  )
}