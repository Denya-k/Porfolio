import React, { useState, useEffect } from 'react'
import Footer from '../../../Components/Footer';
import Header from '../../../Components/Header';
import Loader from '../../../Components/Loader';
import  '../../../scss/info.scss';
import {useParams} from 'react-router-dom'
import InfoAboutBook from './InfoAboutBook';
import Menu from '../../../Components/Menu';

export default function InfoBook() {
    const {bookId} = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(false);
    const [menuActive, setMenuActive] = useState(false)


    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
            .then(res => res.json())
            .then(data => {
                setBook(data)
                setLoading(true)
            } )
    },[bookId])


    return(
      
        <div className="bg-info">
            <Header active={menuActive} setActive={setMenuActive} />
                <div className="info">
                        {loading ?<InfoAboutBook book={book} /> : <Loader />}
                </div>
                <Menu active={menuActive} setActive={setMenuActive} />
            <Footer />
        </div>
    );
}
