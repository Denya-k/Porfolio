import React, {useState} from 'react'
import Footer from './Footer'
import Genre from './Genre'
import GenreMobile from './GenreMobile'
import Header from './Header'
import Menu from './Menu'
// import "../scss/@media/main.scss";


export default function Layout({search, children}) {
  const [menuActive, setMenuActive] = useState(false)
  const [genreActive, setGenreActive] = useState(false)

  return (
    <>
          <Header active={menuActive} setActive={setMenuActive} />
        <div className="blur__genre" />

              <main className="wrap">
                  <div className="content">
                      <div className="search-form">
                          {search} 
                          <div
                            onClick={()=> setGenreActive(!genreActive)}
                            id="genre__icon"
                          > 
                          Genre &#709;
                          </div>
                      </div>
                      {children}
                    </div>
                  <Genre  />
                  <GenreMobile  active={genreActive} setActive={setGenreActive} />
              </main>
              <Menu active={menuActive} setActive={setMenuActive} />
          <Footer />
    </>
  )
}
