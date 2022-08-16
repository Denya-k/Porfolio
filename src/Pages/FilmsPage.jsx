import React , { useEffect,useState }  from 'react'
import Layout from '../Components/Layout'
import Loader from '../Components/Loader'
import Search from '../Components/Search'
import '../scss/films.scss'
import FilmsList from './FilmsList'


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

          <Layout
            children={loading ? <FilmsList movies={movies} />: <Loader />}
            search={<Search searchValue={searchValue} setSearchValue={setSearchValue}/> }
          />
    </div>
   
  )
}
