import React, { useEffect, useState } from 'react';
import logo from '../assests/logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    const [userState, setUserState] = useState('Login');
    const handleCred = () => {
        userState == 'Login' ? setUserState('Logout') : setUserState('Login');
    }
    useEffect(() => {
        console.log('useEffect is called!!!');
        return () => {
            console.log('Component got unmounted!!!');
        }
    },[userState])
    return (
        <div className="header">
            <div className="logo">
                <img src={logo}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to= '/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li>
                        <Link to = '/contact-us'>Contact Us</Link>
                    </li>
                    <li>
                        <Link to= '/card'>Cart</Link>
                    </li>
                    <li className='loginBtn' onClick={handleCred}>{userState}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
