import React , { useEffect,useState }  from 'react'
import Layout from '../Components/Layout';
import Loader from '../Components/Loader';
import Search from '../Components/Search';
import AnimeList from './AnimeList';
import NotFound from '../Components/NotFound'


export default function AnimePage() {
    const [anime, setAnime] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);


  
  const getAnimeDefault = async () => {
    const popularUrl = "https://api.jikan.moe/v3/search/anime?q=naruto&page1";
      
      
      const response = await fetch(popularUrl);
      const responseJson = await response.json();
  
      setAnime(responseJson.results);
      setLoading(true);
  
  } 
      
  const getAnimeRequst = async (searchValue) => {
      
    const url = `https://api.jikan.moe/v3/search/anime?q=${searchValue}&page1`;

    // if(searchValue) {
    //   const response = await fetch(url);
    //   const responseJson = await response.json();
    //   if(responseJson.results.length !== 0 ) {
    //     setAnime(responseJson.results);
    //     console.log(responseJson.results);
    //     setNotFound(false);

    //   } else {
    //     setNotFound(true);
    //   }
    if(searchValue) {
      const response = await fetch(url);
      const responseJson = await response.json();
      if(responseJson.results ) {
        console.log(responseJson.results.length);
        setAnime(responseJson.results);
        setNotFound(false);
      } else {
        setNotFound(true);
      }
    }
    }
  
    useEffect(()=>{
      getAnimeDefault();
    },[])
  
    useEffect(()=>{
      getAnimeRequst(searchValue);
    },[searchValue])
  
  
  
  
    
  
  return (
      <div className="bg-anime">
          <Layout
            children={loading ? (notFound ? <NotFound /> : <AnimeList anime={anime}/>): <Loader />}
            search={<Search searchValue={searchValue} setSearchValue={setSearchValue}/> }
          />
      </div>
     
    )
  }
