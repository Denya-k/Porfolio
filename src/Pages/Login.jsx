import React, {useState, useEffect} from 'react'
import { Link,  useNavigate} from 'react-router-dom' 
import logo from '../img/logo.svg'
import google from '../img/Google Plus.svg'
import twitter from '../img/Twitter.svg'
import discord from '../img/Discord New.svg'
import '../scss/form.scss'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState("Email не может быть пустым")
    const [passwordError, setPasswordError] = useState("Password не может быть пустым")
    const [formValid, setFormValid] = useState(false)


    useEffect(() => {
        if(emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)

        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        
        if(!reg.test(String(e.target.value).toLowerCase())) {
            setEmailError("Некоректный Email")
        } else {
            setEmailError("")
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        
        if(e.target.value.length < 6 ) {
            setPasswordError("Password содержит менее 6 символов")
            if(!e.target.value.length) {
                setPasswordError("Password не может быть пустым")
            }
        } else {
            setPasswordError("")
        }
    }

    const navigate = useNavigate();
    function formSubmit(event) {
        const emailUser = localStorage.getItem("email")
        const passwordUser = localStorage.getItem("password")

        if(emailUser ===  email && passwordUser === password) {
        return  navigate("/Home", {replace: true})

        } else if(emailUser !==  email) {
            setEmailError("Непарвильный email!")
            return false
        }else if(passwordUser !==  password) {
            setPasswordError("Неправильный пароль!")
            return false
        
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "email": 
            setEmailDirty(true)
            break
            case "password": 
            setPasswordDirty (true)
            break

        }
    }

  return (
    <div className="form-container">
        <form className="form" onSubmit={e=> e.preventDefault()}>
            <img src={logo} alt="My List" />
            <h1>Join</h1>
            {(emailDirty && emailError) && <div className="err" >{emailError}</div>}
            <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} type="email" name="email" placeholder="Enter your email..."></input>
            {(passwordDirty && passwordError) && <div className="err" >{passwordError }</div>}
            <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} type="password" name="password" placeholder="Enter your password..."></input>
            <div className="registraition__content">
                <Link to="/Registration">Registration</Link>
                <button onClick={formSubmit} disabled={!formValid} className={formValid ? "button form-valid" : "button"} type="submit">Sing in</button>
            </div>
            <Link className="forgot" to="/ForgotPassword">forgot password</Link>
            <div className="icon">
                <a href="#"><img src={google} alt="Google Plus" /></a>
                <a href="#"><img src={twitter} alt="Twitter" /></a>
                <a href="#"><img src={discord} alt="Discord" /></a>
            </div>
        
        </form>
    </div>
  )
}
