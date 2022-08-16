import React, { useEffect,useState }  from 'react'
import Movie from '../Components/Sections/Movie'
import Anime from '../Components/Sections/Anime'
import Books from '../Components/Sections/Books'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../scss/home.scss'
import Serials from '../Components/Sections/Serials'


export default function Home() {
  const [movie, setMovies] = useState([]);
  const [serials, setSerias] = useState([]);
  const [anime, setAnime] = useState([]);
  const [books, setBooks] = useState([]);
 
  const moviesrUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b52ea45bd4ccc863f946594d20229362";
  const serialsUrl = "https://api.themoviedb.org/3/tv/popular?api_key=b52ea45bd4ccc863f946594d20229362&language=en-US&page=1";
  const animesrUrl = "https://api.jikan.moe/v3/search/anime?q=naruto&page1";
  const bookslarUrl = "https://www.googleapis.com/books/v1/volumes?q=search+terms";

  const getRequestDefault = async (moviesrUrl,serialsUrl,animesrUrl,bookslarUrl) => {
    const moviesResponse = await fetch(moviesrUrl);
    const moviesResponseJson = await moviesResponse.json();
    setMovies(moviesResponseJson.results);

    const serialsRresponse = await fetch(serialsUrl);
    const serialsResponseJson = await serialsRresponse.json();
    setSerias(serialsResponseJson.results);

    const animesResponse = await fetch(animesrUrl);
    const animesResponseJson = await animesResponse.json();
    setAnime(animesResponseJson.results);

    const booksResponse = await fetch(bookslarUrl);
    const booksResponseJson = await booksResponse.json();
    setBooks(booksResponseJson.items);
  
  }

  useEffect(()=>{
    getRequestDefault(moviesrUrl, serialsUrl, animesrUrl, bookslarUrl)
  },[])

  return (
    <>
    <Header />
      <div className="wrapper">
            <Movie movies={movie}/>
            <Serials serials={serials}/>
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
