import React from 'react'

export default function InfoAboutBook({book}) {
  return (
        <>
            <h1>Info About Book</h1>
            <div className="info-info__film">
                <img 
                    className="info-info__poster"
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt="Book Poster"
                />
                <div className="info-info__data">
                    <span className="info-info__title">
                        {book.volumeInfo.title  || "Not founded"}
                    </span>
                    <ul className="info-info__list">
                        <li className="info-info__item">
                            <b>Page Count: </b> 
                             {book.volumeInfo.pageCount}
                        </li>
                        <li className="info-info__item">
                            <b>Categories:</b>
                            {book.volumeInfo.categories}
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
                            {book.volumeInfo.authors}
                        </li>
                        {/* <li className="info-info__item">
                            <b>Vote count:</b>
                            {anime.producers}
                        </li> */}
                    </ul>
                </div>
            </div>
            <h3>Description</h3>
            <p>{book.volumeInfo.description}</p>
        </>
        );
}
