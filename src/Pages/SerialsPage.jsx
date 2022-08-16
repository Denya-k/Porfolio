import React , { useEffect,useState }  from 'react'
import Layout from '../Components/Layout'
import Loader from '../Components/Loader'
import Search from '../Components/Search'
import SerialsList from './SerialsList'


export default function SerialsPage() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [loading, setLoading] = useState(false);

  
  const getMoviDefault = async () => {
    const popularUrl = "https://api.themoviedb.org/3/tv/popular?api_key=b52ea45bd4ccc863f946594d20229362&language=en-US&page=1";
      // const url =        " https://api.themoviedb.org/3/search/movie?api_key=b52ea45bd4ccc863f946594d20229362&query=spider+man";
      
      
      const response = await fetch(popularUrl);
      const responseJson = await response.json();
  
      setMovies(responseJson.results)
      setLoading(true)
  
  
  } 
      
  const getMoviesRequst = async (searchValue) => {
    // const popularUrl = "https://api.themoviedb.org/3/tv/popular?api_key=b52ea45bd4ccc863f946594d20229362&language=en-US&page=1";
      const url = `https://api.themoviedb.org/3/search/tv?api_key=b52ea45bd4ccc863f946594d20229362&query=${searchValue}`;

      const response = await fetch(url);
      const responseJson = await response.json();
  
      if(responseJson.results ) {
        setMovies(responseJson.results)
      } 
      setLoading(true)

    }
  
    useEffect(()=>{
      getMoviDefault();
    },[])
  
    useEffect(()=>{
      getMoviesRequst(searchValue);
    },[searchValue])
   
  
  return (
      <div className="bg-tv">
          <Layout
           children={loading ? <SerialsList movies={movies} /> : <Loader /> }
           search={<Search searchValue={searchValue} setSearchValue={setSearchValue}/> }
           />
      </div>
     
    )
  }