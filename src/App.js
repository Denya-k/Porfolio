import React from "react";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import FilmsPage from "./Pages/FilmsPage";
import TVShow from "./Pages/TVShow";
import AnimePage from "./Pages/AnimePage";
import BooksPage from "./Pages/BooksPage";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Login//Registration";
import ForgotPassword from "./Pages/Login//ForgotPassword";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Films" element={ <FilmsPage />} />
            <Route path="/TVShow" element={ <TVShow /> } />
            <Route path="/Anime" element={ <AnimePage /> } />
            <Route path="/Book" element={ <BooksPage /> } />
            <Route path="/" element={ <Login /> } />
            <Route path="/Registration" element={ <Registration/> } />
            <Route path="/ForgotPassword" element={ <ForgotPassword /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
