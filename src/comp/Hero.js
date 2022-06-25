import React from 'react'
import './Hero.css'
import Crypto from '../assets/hero2.png'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <h1>Instant access to Crypto, anytime and anywhere</h1>
                    <p>Cryptocurrency just got even better.</p>
                    <div className='input-container'>
                        {/* <input type='email' placeholder='Enter your email' /> */}
                        <Link to="/articles"><button className='btn'>Learn More</button></Link>
                    </div>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
