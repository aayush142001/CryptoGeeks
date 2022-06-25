import { MenuItem, Select } from '@material-ui/core';
import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AuthModal from '../Components/Authentication/AuthModal';
import UserSidebar from "../Components/Authentication/UserSidebar";
import { CurrencyState } from '../CurrContext';
import './Navbar.css'

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)
const {currency,setCurrency,user} = CurrencyState();
    return (
        <div className='header'>
            <div className='container'>
                <Link to="/" className='logo'>Crypto <span className='primary'>Geeks</span></Link>
                <ul className={click ? 'nav-menu active' : 'nav-menu not-active'}>
                    <li>
                        <Link to='/home'>Coins</Link>
                    </li>
                    <li>
                        <Link to='/articles'>Articles</Link>
                    </li>
                    <li>
                        <Link to='/'>Learn</Link>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>
                
              <li>  <Select variant='outlined' value={currency} style={{
         width:100,
         height:40,
       }}
       onChange={(e)=>setCurrency(e.target.value)}
       >
         <MenuItem value={'INR'} style={{color:'#08D9D6'}}>INR</MenuItem>
         <MenuItem value={'USD'} style={{color:'#08D9D6'}}>USD</MenuItem>
       </Select></li>
       </ul>
               {user ? <UserSidebar /> : <AuthModal/>}
               
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#FFFFFF'}}/>) : (<FaBars size={20} style={{color: '#FFFFFF'}} />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
