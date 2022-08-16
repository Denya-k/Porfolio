import React from 'react'
import { Link } from 'react-router-dom'




export default function Serials(props) {
  return (
    <section className="wrapper-section-top">
      <div className="container">
            <h2>Top Serials</h2>
            <div className="seriasl section__list">
                {props.serials.map((serials, index) =>
                 <div className="seriasl section__item" key={index}>
                    <img 
                      src={`https://image.tmdb.org/t/p/w300${serials.poster_path}`}
                      alt="Serials Poster"
                    />
                    <div className="more"> 
                      <span className="serials section__title" >
                        {serials.name}
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