import React, { useState, useEffect } from 'react'
import Footer from '../../../Components/Footer';
import Header from '../../../Components/Header';
import Loader from '../../../Components/Loader';
import  '../../../scss/info.scss';
import {useParams} from 'react-router-dom'
import InfoAboutBook from './InfoAboutBook';

export default function InfoBook() {
    const {bookId} = useParams();
    const [anime, setAnime] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
            .then(res => res.json())
            .then(data => {
                setAnime(data)
                setLoading(true)
            } )
    },[bookId])


    return(
      
        <div className="bg-info">
            <Header />
                <div className="info">
                        {loading ?<InfoAboutBook anime={anime} /> : <Loader />}
                </div>
            <Footer />
        </div>
    );
}
