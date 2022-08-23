import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Menu from '../Components/Menu'
import "../scss/profile.scss"

export default function MyProfile() {
  const [menuActive, setMenuActive] = useState(false)
  return (
    <div className="profile">
        <Header active={menuActive} setActive={setMenuActive} />

        <div className="main wrapper">
            <div className="profile-info">
                <img 
                    src={require("../img/MyProfile.svg").default}
                    alt="My Profile" 
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

                <div className="profile-list__film">
                    <h3 className="profile-list__title-bl">List Films</h3>
                    <div className="profile-list__films-bl">
                        <div className="profile-list__item-bl">5</div>
                        <div className="profile-list__item-bl">4</div>
                        <div className="profile-list__item-bl">20</div>
                    </div>
                    <div className="profile-list__static">
                        <div className="profile-list__static-item">Sheduled</div>
                        <div className="profile-list__static-item">Watching</div>
                        <div className="profile-list__static-item">Watched</div>
                    </div>
                </div>

                <div className="profile-list__film">
                    <h3 className="profile-list__title-br">List Serials</h3>
                    <div className="profile-list__films-br">
                        <div className="profile-list__item-br">3</div>
                        <div className="profile-list__item-br">13</div>
                        <div className="profile-list__item-br">9</div>
                    </div>
                    <div className="profile-list__static">
                        <div className="profile-list__static-item">Sheduled</div>
                        <div className="profile-list__static-item">Watching</div>
                        <div className="profile-list__static-item">Watched</div>
                    </div>
                </div>

                <div className="profile-list__film">
                    <h3 className="profile-list__title-vi">List Anime</h3>
                    <div className="profile-list__films-vi">
                        <div className="profile-list__item-vi">12</div>
                        <div className="profile-list__item-vi">4</div>
                        <div className="profile-list__item-vi">10</div>
                    </div>
                    <div className="profile-list__static">
                        <div className="profile-list__static-item">Sheduled</div>
                        <div className="profile-list__static-item">Watching</div>
                        <div className="profile-list__static-item">Watched</div>
                    </div>
                </div>

                <div className="profile-list__film">
                    <h3 className="profile-list__title-ligr">List Book</h3>
                    <div className="profile-list__films-ligr">
                        <div className="profile-list__item-ligr">15</div>
                        <div className="profile-list__item-ligr">4</div>
                        <div className="profile-list__item-ligr">3</div>
                    </div>
                    <div className="profile-list__static">
                        <div className="profile-list__static-item">Sheduled</div>
                        <div className="profile-list__static-item">Reading</div>
                        <div className="profile-list__static-item">Read</div>
                    </div>
                </div>

            </div>
        </div>
        <Menu active={menuActive} setActive={setMenuActive} />
    <Footer />
    </div>
  )
}
