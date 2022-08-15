import React from 'react'
import google from '../img/Google Plus.svg'
import twitter from '../img/Twitter.svg'
import discord from '../img/Discord New.svg'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-connection">
          <a href="#"><img src={google} alt="Google Plus" /></a>
          <a href="#"><img src={twitter} alt="Twitter" /></a>
          <a href="#"><img src={discord} alt="Discord" /></a>
            
            
            
        </div>
    </footer>
  )
}
