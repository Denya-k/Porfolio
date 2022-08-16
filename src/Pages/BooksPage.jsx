import React , { useEffect,useState }  from 'react'
import Search from '../Components/Search'
import '../scss/films.scss'
import Loader from '../Components/Loader'
import BooksList from './BooksList'
import '../scss/loader.scss'
import Layout from '../Components/Layout'
import NotFound from '../Components/NotFound'

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);


const getBooksDefault = async () => {
  const popularUrl = "https://www.googleapis.com/books/v1/volumes?q=search+terms";
    
    const response = await fetch(popularUrl);
    const responseJson = await response.json();
    
    setBooks(responseJson.items);
    setLoading(true);


} 
    
const getBooksRequst = async (searchValue) => {
        
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}`;
    
    if(searchValue) {
      const response = await fetch(url);
      const responseJson = await response.json();
      if(responseJson.items &&  responseJson.items.length !== 0) {
        setBooks(responseJson.items);
        setNotFound(false);
      }  else {
        setNotFound(true);
      }
    }


    // const response = await fetch(url);
    // const responseJson = await response.json();
    
    // if(responseJson.items ) {
    //     setBooks(responseJson.items)
    // } 
   
  }

  useEffect(()=>{
    getBooksDefault();
    getBooksRequst(searchValue)
  },[searchValue])

  useEffect(()=>{
    getBooksRequst(searchValue);
  },[searchValue])


return (
    <div className="bg-book">
        <Layout
           children={loading ? (notFound ? <NotFound /> : <BooksList book={books}/>): <Loader />}
            search={<Search searchValue={searchValue} setSearchValue={setSearchValue}/> }
          />
    </div>
   
  )
}




