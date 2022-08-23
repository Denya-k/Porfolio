import React, { useState, useEffect } from 'react'
import Footer from '../../../Components/Footer';
import Header from '../../../Components/Header';
import Loader from '../../../Components/Loader';
import  '../../../scss/info.scss';
import Info from '.././Info';
import {useParams} from 'react-router-dom'
import Menu from '../../../Components/Menu';

export default function InfoSerial() {
    const {tvId} = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [menuActive, setMenuActive] = useState(false)



    // https://api.themoviedb.org/3/tv/{tv_id}?api_key=b52ea45bd4ccc863f946594d20229362&language=en-US
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${tvId}?api_key=b52ea45bd4ccc863f946594d20229362&language=en-US`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovie(data)
                setLoading(true)
            } )
    },[tvId])


    return(
      
        <div className="bg-info">
            <Header active={menuActive} setActive={setMenuActive} />
                <div className="info">
                        {loading ?<Info movie={movie} /> : <Loader />}
                </div>
            <Menu active={menuActive} setActive={setMenuActive} />
            <Footer />
        </div>
    );
}
