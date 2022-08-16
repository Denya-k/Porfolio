import React from 'react'
import { Link } from 'react-router-dom'



export default function Books(props) {
  return (
    <section className="wrapper-section-top">
      <div className="container">
            <h2>Top Books</h2>
            <div className="book section__list">
                {props.books.map((book, index) =>
                <div className="book section__item" key={index}>
                    <img 
                      src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""}
                      alt="Books Poster" 
                    />
                    <div className="more"> 
                      <span className="book section__title" >
                        {book.volumeInfo.title}
                      </span>
                      <Link className="link" to="#">Подробнее</Link>
                    </div>
                    
                </div> )}
            </div>
      </div>
    </section>
  )
}
