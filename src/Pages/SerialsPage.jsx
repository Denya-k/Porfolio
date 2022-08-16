import React , { useEffect,useState }  from 'react'
import Layout from '../Components/Layout'
import Loader from '../Components/Loader'
import Search from '../Components/Search'
import SerialsList from './SerialsList'
import NotFound from '../Components/NotFound'



export default function SerialsPage() {
    const [serials, setSerials] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);

  const getSerialsDefault = async () => {
    const popularUrl = "https://api.themoviedb.org/3/tv/popular?api_key=b52ea45bd4ccc863f946594d20229362&language=en-US&page=1";
      const response = await fetch(popularUrl);
      const responseJson = await response.json();
  
      setSerials(responseJson.results)
      setLoading(true)
  } 
      
  const getSerialsRequst = async (searchValue) => {
    const url = `https://api.themoviedb.org/3/search/tv?api_key=b52ea45bd4ccc863f946594d20229362&query=${searchValue}`;
    
    if(searchValue) {
      const response = await fetch(url);
      const responseJson = await response.json();
      if(responseJson.results &&  responseJson.results.length !== 0) {
        setSerials(responseJson.results);
        setNotFound(false);
      }  else {
        setNotFound(true);
      }
    }
    

  }
  
  useEffect(()=>{
    getSerialsDefault();
  },[])

  useEffect(()=>{
    getSerialsRequst(searchValue);
  },[searchValue])
   
  
  return (
      <div className="bg-tv">
          <Layout
           children={loading ? (notFound ? <NotFound /> : <SerialsList serials={serials} />): <Loader />}
           search={<Search searchValue={searchValue} setSearchValue={setSearchValue}/> }
           />
      </div>
     
    )
  }
