import React from "react";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import FilmsPage from "./Pages/FilmsPage";
import AnimePage from "./Pages/AnimePage";
import BooksPage from "./Pages/BooksPage";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Login//Registration";
import ForgotPassword from "./Pages/Login//ForgotPassword";
import SerialsPage from "./Pages/SerialsPage";
import InfoFilm from "./Pages/InfoAbout/InfoFilm";
import InfoSerial from "./Pages/InfoAbout/InfoSerial/InfoSerial";
import InfoAnime from "./Pages/InfoAbout/InfoAnime/InfoAnime";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Films" element={ <FilmsPage />} />
            <Route path="/Serials" element={ <SerialsPage /> } />
            <Route path="/Anime" element={ <AnimePage /> } />
            <Route path="/Book" element={ <BooksPage /> } />
            <Route path="/" element={ <Login /> } />
            <Route path="/Registration" element={ <Registration/> } />
            <Route path="/ForgotPassword" element={ <ForgotPassword /> } />
            <Route path="/InfoFilm/:movieId" element={ <InfoFilm /> } />
            <Route path="/InfoSerial/:tvId" element={ <InfoSerial /> } />
            <Route path="/InfoAnime/:animeId" element={ <InfoAnime /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
