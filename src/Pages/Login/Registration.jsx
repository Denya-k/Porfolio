import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.svg'
import '../../scss/form.scss'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Registration() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [name, setName] = useState("")
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [repeatPasswordDirty, setRepeatPasswordDirty] = useState(false)
    const [nameDirty, setNameDirty] = useState(false)
    const [emailError, setEmailError] = useState("Email не может быть пустым")
    const [passwordError, setPasswordError] = useState("Password не может быть пустым")
    const [repeatPasswordError, setRepeatPasswordError] = useState("Repeat Password не может быть пустым")
    const [nameError, setNameError] = useState("Name не может быть пустым")
    const [formValid, setFormValid] = useState(false)


    useEffect(() => {
        if(emailError || passwordError || repeatPasswordError || nameError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError,repeatPasswordError,nameError])

    const emailHandler = (e) => {
        setEmail(e.target.value)


        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        
        if(!reg.test(String(e.target.value).toLowerCase())) {
            setEmailError("Некоректный Email")
            if(!e.target.value.length) {
                setNameError("Email не может быть пустым")
            }
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
    const repeatPasswordHandler = (e) => {
        setRepeatPassword(e.target.value)
        if(e.target.value.length != password.length || e.target.value != password ) {
        // if(e.target.value != password ) {
            setRepeatPasswordError("Пароль не совподает")
        } else {
            setRepeatPasswordError("")
        }
    }

    const nameHandler = (e) => {
        setName(e.target.value)
        if(e.target.value.length < 3 ) {
            setNameError("Слишком короткое имя")
            // if(!e.target.value.length) {
            //     setNameError("Name не может быть пустым")
            // }
        } else {
            setNameError("")
        }
    }
    
    const blurHandler = (e) => {
        switch (e.target.name) {
            case "email": 
            setEmailDirty(true)
            break
            case "password": 
            setPasswordDirty(true)
            break
            case "repeatPassword": 
            setRepeatPasswordDirty(true)
            break
            case "name": 
            setNameDirty(true)
            break

        }
    }

    function createUser() {
        localStorage.setItem("email",email)
        localStorage.setItem("password",password)
        localStorage.setItem("name",name)
    }



  return (
    <div className="form-container">
        <form className="form">
            <img
                className="logo"
                src={logo} 
                alt="My List" 
            />
            <h1>Registration</h1>

            {(emailDirty && emailError) && <div className="err" >{emailError}</div>}
            <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} type="email" name="email" placeholder="Enter your email..."></input>
            
            {(passwordDirty && passwordError) && <div className="err" >{passwordError }</div>}
            <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} type="password" name="password" placeholder="Enter your password..."></input>
            
            {(repeatPasswordDirty && repeatPasswordError) && <div className="err" >{repeatPasswordError }</div>}
            <input onChange={e => repeatPasswordHandler(e)} value={repeatPassword} onBlur={e => blurHandler(e)} type="password" name="repeatPassword" placeholder="Repeat password..."></input>
            
            {(nameDirty && nameError) && <div className="err" >{nameError }</div>}
            <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} type="text" name="name" placeholder="User Name"></input>
            
            <div className="registraition__content">
                <Link to="/">Log in</Link>
                <Link to="/"><button onClick={createUser} disabled={!formValid} className={formValid ? "button form-valid" : "button"} type="submit">Registretion</button></Link>
            </div>
        </form>
    </div>
  )
}