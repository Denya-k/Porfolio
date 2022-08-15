import React , { useEffect,useState }  from 'react'
import Footer from '../Components/Footer'
import Genre from '../Components/Genre'
import Header from '../Components/Header'
import Movie from '../Components/Sections/Movie'
import Search from '../Components/Search'
import '../scss/films.scss'
import Loader from '../Components/Loader'
import BooksList from './BooksList'
import '../scss/loader.scss'





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
        <Header />
            <main className="wrap">
                <div className="content">
                    <div className="search-form">
                        <Search
                         searchValue={searchValue}
                         setSearchValue={setSearchValue} 
                        />  
                        <span>&#709; rating</span>
                    </div>

               {/* <BooksList book={books}/> */}
               {loading ? <BooksList book={books}/> : <Loader />} 
                </div>
                <Genre />
            </main>
        <Footer />
    </div>
   
  )
}
