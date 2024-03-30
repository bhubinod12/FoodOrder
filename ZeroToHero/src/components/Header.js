import React, { useEffect, useState } from 'react';
import logo from '../assests/logo.jpg';

const Header = () => {
    const [userState, setUserState] = useState('Login');
    const handleCred = () => {
        userState == 'Login' ? setUserState('Logout') : setUserState('Login');
    }
    useEffect(() => {
        console.log('useEffect is called!!!');
    })
    return (
        <div className="header">
            <div className="logo">
                <img src={logo}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li className='loginBtn' onClick={handleCred}>{userState}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
