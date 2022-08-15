import React , { useEffect,useState }  from 'react'
import Footer from '../Components/Footer'
import Genre from '../Components/Genre'
import Header from '../Components/Header'
import Loader from '../Components/Loader'
import Search from '../Components/Search'
import '../scss/films.scss'
import MovieList from './MovieList'


export default function FilmsPage() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

const getMoviDefault = async () => {
  const popularUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b52ea45bd4ccc863f946594d20229362";
    // const url =        " https://api.themoviedb.org/3/search/movie?api_key=b52ea45bd4ccc863f946594d20229362&query=spider+man";
    
    
    const response = await fetch(popularUrl);
    const responseJson = await response.json();

    setMovies(responseJson.results)


} 
    
const getMoviesRequst = async (searchValue) => {
    const apiKey = "b52ea45bd4ccc863f946594d20229362";
    const popularUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b52ea45bd4ccc863f946594d20229362";
    const url =        `https://api.themoviedb.org/3/search/movie?api_key=b52ea45bd4ccc863f946594d20229362&query=${searchValue}`;
    
    const response = await fetch(url);
    const responseJson = await response.json();
    setLoading(true)
    if(responseJson.results ) {
      setMovies(responseJson.results)
    } 
  }

  useEffect(()=>{
    getMoviDefault();
  },[])

  useEffect(()=>{
    getMoviesRequst(searchValue);
  },[searchValue])



return (
    <div className="bg-films">
        <Header />
            <main className="wrap">
                <div className="content">
                    <div className="search-form">
                        <Search
                         searchValue={searchValue}
                         setSearchValue={setSearchValue} 
                        />  
                        <span >&#709; rating</span>
                    </div>

               {loading ? <MovieList movies={movies} />: <Loader />}
                </div>
                <Genre />
            </main>
        <Footer />
    </div>
   
  )
}
