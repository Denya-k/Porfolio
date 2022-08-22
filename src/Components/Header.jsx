import React from 'react'
import logo from '../img/logo.svg'
import user from '../img/User.svg'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink,
  } from 'react-router-dom';

export default function Header() {
  return (
        <header className='header'>
            <div className="header-wrapper">
                <div className="header-logo">
                    <img 
                    className="header-logo__img"
                    src={logo}
                    alt="logo"
                    />
                </div>
                <div className="header-nav">
                    <NavLink to="/Home" className="header-nav__link">Home</NavLink>
                    <NavLink to="/Films" className="header-nav__link">Films</NavLink>
                    <NavLink to="/Serials" className="header-nav__link">Serials</NavLink>
                    <NavLink to="/Anime" className="header-nav__link">Anime</NavLink>
                    <NavLink to="/Book" className="header-nav__link">Books</NavLink>
                </div>
                <div className="header-login">

                    <Link
                        to="/MyProfile"
                    >
                        <img 
                            className="header-login__img"
                            src={user}
                            alt="user"
                        />
                    </Link>
                    <Link 
                        to="/" 
                        className="header-login__text" 
                        onClick={()=> localStorage.clear()}
                    >
                        {localStorage.getItem("name")}
                    </Link>
                </div>
            </div>
        </header>
  )
}
