import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import "../scss/profile.scss"

export default function MyProfile() {
  return (
    <div className="profile">
    <Header />
        <div className="main wrapper">
            <div className="profile-info">
                <img 
                    src={require("../img/MyProfile.svg").default}
                    alt="My Photo" 
                />
                <span className="profile-info__name">First name</span>
                <span className="profile-info__sur_name">Surename</span>

                <ul className="profile-info__list">
                    <li className="profile-info__item">Sex</li>
                    <li className="profile-info__item">Age</li>
                    <li className="profile-info__item">Email</li>
                    <li className="profile-info__item">On site since: </li>
                </ul>
            </div>

            <div className="profile-statics">
                <div className="profile-statics__header">
                    <div>
                        <h3>My Profile</h3>
                        <h2>{localStorage.getItem("name")}</h2>
                    </div>
                    <Link to="#">change password</Link>
                </div>
            </div>
        </div>
    <Footer />
    </div>
  )
}
