import React from 'react'
import  "../scss/menu.scss"
import  "../scss/@media/main.scss"
import { Link, NavLink } from 'react-router-dom';
import user from '../img/User.svg'


export default function Menu({active, setActive}) {
  return (
    <div className={active ? "menu active" : "menu"} onClick={() => setActive(false)}>
        <div className="blur"/>
        <div className="menu__content" onClick={(e) => e.stopPropagation()}>
            <div className="menu__header">
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

                <div className="menu-nav">
                    <NavLink 
                        to="/Home" 
                        className="menu-nav__link"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        to="/Films" 
                        className="menu-nav__link"
                    >
                        Films
                    </NavLink>

                    <NavLink 
                        to="/Serials" 
                        className="menu-nav__link"
                    >
                        Serials
                    </NavLink>

                    <NavLink 
                        to="/Anime" 
                        className="menu-nav__link"
                    >
                        Anime
                    </NavLink>

                    <NavLink 
                        to="/Book" 
                        className="menu-nav__link"
                    >
                        Books
                    </NavLink>
                </div>
            
        </div>
        
    </div>
  )
}
