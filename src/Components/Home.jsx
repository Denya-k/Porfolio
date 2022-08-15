import React, { useEffect,useState }  from 'react'
import Movie from './Sections/Movie'
import Series from './Sections/Series'
import Anime from './Sections/Anime'
import Books from './Sections/Books'
import Header from './Header'
import Footer from './Footer'
import '../scss/home.scss'


export default function Home() {
  const [movie, setMovies] = useState([]);
  const [series, setSerias] = useState([]);
  const [anime, setAnime] = useState([]);
  const [books, setBooks] = useState([]);


  const getMoviDefault = async () => {
      const popularUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b52ea45bd4ccc863f946594d20229362";
        
      const response = await fetch(popularUrl);
      const responseJson = await response.json();
  
      setMovies(responseJson.results)
  } 

   const getSerialsDefault = async () => {
      const popularUrl = "https://api.themoviedb.org/3/tv/popular?api_key=b52ea45bd4ccc863f946594d20229362&language=en-US&page=1";
       
       
      const response = await fetch(popularUrl);
      const responseJson = await response.json();
  
      setSerias(responseJson.results)
   }

   const getAnimeDefault = async () => {
    const popularUrl = "https://api.jikan.moe/v3/search/anime?q=naruto&page1";
      
      
      const response = await fetch(popularUrl);
      const responseJson = await response.json();
  
      setAnime(responseJson.results);
  } 

  const getBooksDefault = async () => {
    const popularUrl = "https://www.googleapis.com/books/v1/volumes?q=search+terms";
      
      const response = await fetch(popularUrl);
      const responseJson = await response.json();
      
      setBooks(responseJson.items);
  
  
  } 

  useEffect(()=>{
    getMoviDefault();
    getSerialsDefault();
    getAnimeDefault();
    getBooksDefault();
  },[])

  return (
    <>
    <Header />
      <div className="wrapper">
            <Movie movies={movie}/>
            <Series series={series}/>
            <Anime anime={anime} />
            <Books books={books} />
      </div>
    <Footer />
    </>
  )
}






































































// const getMoviesRequst = async () => {
      // const url = `https://www.omdbapi.com/?s=spider man?type=series&apikey=cb5b43d2`;

      // const response = await fetch(url);
      // const responseJson = await response.json();

      // setMovie(responseJson.Search)

      // console.log(responseJson.Search);
    // }

    // const getSeriesRequst = async () => {
      // const url = `https://www.omdbapi.com/?s=spider man?type=series&apikey=cb5b43d2`;
    
      // const response = await fetch(url);
      // const responseJson = await response.json();
    // } 

    // const getBooksRequst = async () => {
    //   const url = `https://www.googleapis.com/books/v1/volumes?q=search+terms`;
    
    //   const response = await fetch(url);
    //   const responseJson = await response.json();
    // } 

    // useEffect(()=>{
    //   getMoviesRequst();
    //   getSeriesRequst();
    // },[])
