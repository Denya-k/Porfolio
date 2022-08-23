import React from 'react'

export default function InfoAboutBook({book}) {
  return (
    <div className="info-about">
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
                    <li className="info-info__item">
                        <b>Authors: </b>
                        {book.volumeInfo.authors}
                    </li>
                   
                </ul>
            </div>
        </div>
        <h3>Description</h3>
        <p>{book.volumeInfo.description}</p>
    </div>
        );
}
