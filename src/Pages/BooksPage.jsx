import React , { useEffect,useState }  from 'react'
import Search from '../Components/Search'
import '../scss/films.scss'
import Loader from '../Components/Loader'
import BooksList from './BooksList'
import '../scss/loader.scss'
import Layout from '../Components/Layout'





export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

const getBooksDefault = async () => {
  const popularUrl = "https://www.googleapis.com/books/v1/volumes?q=search+terms";
    
    const response = await fetch(popularUrl);
    const responseJson = await response.json();
    
    setBooks(responseJson.items);
    setLoading(true);


} 
    
const getBooksRequst = async (searchValue) => {
        
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}`;
    
    const response = await fetch(url);
    const responseJson = await response.json();
    setLoading(true);
    if(responseJson.items ) {
        setBooks(responseJson.items)
    } 
    console.log(responseJson);
   
  }

  useEffect(()=>{
    getBooksDefault();
    getBooksRequst(searchValue)
  },[searchValue])

  // useEffect(()=>{
  //   getBooksRequst(searchValue);
  // },[searchValue])


return (
    <div className="bg-book">
        <Layout
            children={loading ? <BooksList book={books}/> : <Loader />} 
            search={<Search searchValue={searchValue} setSearchValue={setSearchValue}/> }
          />
    </div>
   
  )
}




