import React , { useEffect,useState }  from 'react'
import Layout from '../Components/Layout'
import Loader from '../Components/Loader'
import Search from '../Components/Search'
import '../scss/films.scss'
import FilmsList from './FilmsList'
import NotFound from '../Components/NotFound'


export default function FilmsPage() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

const getMoviDefault = async () => {
  const popularUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b52ea45bd4ccc863f946594d20229362";

    const response = await fetch(popularUrl);
    const responseJson = await response.json();

    setMovies(responseJson.results);
    setLoading(true);
} 
    
const getMoviesRequst = async (searchValue) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=b52ea45bd4ccc863f946594d20229362&query=${searchValue}`;
    
    if(searchValue) {
      const response = await fetch(url);
      const responseJson = await response.json();
      if(responseJson.results && responseJson.results.length !== 0) {
        setMovies(responseJson.results);
        setNotFound(false);

      } else {
        setNotFound(true);

      }
      
    }
    
  }

  useEffect(()=>{
    getMoviDefault();
  },[]);

  useEffect(()=>{
    getMoviesRequst(searchValue);
  },[searchValue]);



return (
    <div className="bg-films">

          <Layout
            children={loading ? (notFound ? <NotFound /> : <FilmsList movies={movies} />): <Loader />}
            search={<Search searchValue={searchValue} setSearchValue={setSearchValue}/> }
          />
    </div>
   
  )
}
