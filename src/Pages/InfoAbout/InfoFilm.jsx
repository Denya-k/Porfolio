import React, { useState, useEffect } from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Loader from '../../Components/Loader';
import  '../../scss/info.scss';
import Info from './Info';
import {useParams} from 'react-router-dom'



export default function InfoFilm() {
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b52ea45bd4ccc863f946594d20229362&`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovie(data)
                setLoading(true)
            } )
    },[movieId])


   return(
        <div className="bg-info">
            <Header />
                <div className="info">
                    {loading ?<Info movie={movie} /> : <Loader />}
                </div>
            <Footer />
        </div>
   );
}









































// export default function InfoFilm({id}) {
//     console.log(id);
//     const [movies, setMovies] = useState([]);
//     const [loading, setLoading] = useState(false);


    
//     const getMoviDefault = async () => {
//         const url = `https://api.themoviedb.org/3/movie/299534?api_key=b52ea45bd4ccc863f946594d20229362&`;
      
//           const response = await fetch(url);
//           const responseJson = await response.json();
      
//           setMovies(responseJson);
//           setLoading(true);
//       } 

//       useEffect(()=>{
//         getMoviDefault();
//       },[]);
   
//   return (
//     <div className="bg-info">
//         <Header />
//             {loading ?<Info movie={movies} /> : <Loader />}
//         <Footer />
//     </div>
//   )
// }











































  // useEffect(() => {
    //     async function fetchData() {
    //         const url = `https://api.themoviedb.org/3/movie/299534?api_key=b52ea45bd4ccc863f946594d20229362&`;
        
        
    //       const response = await fetch(url);
    //       const responseJson = await response.json();
    //     //   if(responseJson.results && responseJson.results.length !== 0) {
    //         setMovie(responseJson.results);
    //         console.log(responseJson.results)
    //         fetchData()
    //         console.log(responseJson.results)

    //     }
    // }, [])
