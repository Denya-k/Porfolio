import React from 'react'


// https://www.googleapis.com/books/v1/volumes?q=search+terms

export default function Books(props) {
  return (
    <section className="wrapper-section-top">
      <div className="container">
            <h2>Top Books</h2>
            <div className="anime-anime__list">
                {props.books.map((anime, index) => <div className="anime-anime__item" key={index}>
                    <img src={anime.volumeInfo.imageLinks.thumbnail} alt="Books Poster" />
                    <span className="anime-anime__title" >{anime.volumeInfo.title}</span>
                </div> )}
            </div>
      </div>
    </section>
  )
}
