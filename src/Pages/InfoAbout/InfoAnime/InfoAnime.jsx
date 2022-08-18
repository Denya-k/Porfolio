import React, { useState, useEffect } from 'react'
import Footer from '../../../Components/Footer';
import Header from '../../../Components/Header';
import Loader from '../../../Components/Loader';
import  '../../../scss/info.scss';
import {useParams} from 'react-router-dom'
import InfoAboutAnime from './InfoAboutAnime';

export default function InfoAnime() {
    const {animeId} = useParams();
    const [anime, setAnime] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/anime/${animeId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAnime(data)
                setLoading(true)
            } )
    },[animeId])


    return(
      
        <div className="bg-info">
            <Header />
                <div className="info">
                        {loading ?<InfoAboutAnime anime={anime} /> : <Loader />}
                </div>
            <Footer />
        </div>
    );
}
