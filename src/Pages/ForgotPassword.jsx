import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.svg'
import '../scss/form.scss'
import { useState } from 'react'
import { useEffect } from 'react'

export default function ForgotPassword() {
    const [email, setEmail] = useState("")
    const [emailDirty, setEmailDirty] = useState(false)
    const [emailError, setEmailError] = useState("Email не может быть пустым")
    const [formValid, setFormValid] = useState(false)


    useEffect(() => {
        if(emailError ) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError])

    const emailHandler = (e) => {
        setEmail(e.target.value)

        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        
        if(!reg.test(String(e.target.value).toLowerCase())) {
            setEmailError("Некоректный Email")
        } else {
            setEmailError("")
        }
    }

   
    
    const blurHandler = (e) => {
        switch (e.target.name) {
            case "email": 
            setEmailDirty(true)
            break
            

        }
    }



  return (
    <div className="form-container">
        <form className="form">
            <img src={logo} alt="My List" />
            <h1>Forgot Password</h1>
            {(emailDirty && emailError) && <div className="err" >{emailError}</div>}
            <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} type="email" name="email" placeholder="Enter your email..."></input>
            <span className="registratiom-massage">We will send you massage to set or reset your new password</span>
            <div className="registraition__content">
                <Link to="/">Login</Link>
                <Link to="/"><button disabled={!formValid} className={formValid ? "button form-valid" : "button"} type="submit">Send</button></Link>
            </div>
        </form>
    </div>
  )
}