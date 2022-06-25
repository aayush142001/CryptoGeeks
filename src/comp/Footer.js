import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col col-1'>
                    <h1>Crypto <span className='primary'>Geeks</span></h1>
                </div>
                <div className='col'>
                    <h5>Support</h5>
                    <span className='bar'></span>
                        <a href='#contact'>Contact Us</a>
                        <p>Chat</p>
                        <p>Help Center</p>
                        <p>FAQ</p>

                </div>
                <div className='col'>
                    <h5>Company</h5>
                    <span className='bar'> </span>
                        <p>About</p>
                        <p>Information</p>
                        <p>Legal</p>
                        <p>Privacy</p>
                </div>
                <div className='col'>
                    <h5>Social</h5>
                    <span className='bar'> </span>
                        <p><FaFacebook className='icon'/></p>
                        <p><FaTwitter className='icon'/></p>
                        <p><FaLinkedin className='icon'/></p>
                        <p><FaGithub className='icon'/></p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;
