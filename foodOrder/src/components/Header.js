import React, { useEffect, useState, useContext } from 'react';
import logo from '../assests/logo.jpg';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../util/useOnlineStatus';
import UserContext from '../util/UserContext';

const Header = () => {
    const [userState, setUserState] = useState('Login');
    const contxtData = useContext(UserContext);
    const handleCred = () => {
        userState == 'Login' ? setUserState('Logout') : setUserState('Login');
    }
    useEffect(() => {
        console.log('useEffect is called!!!');
        return () => {
            console.log('Component got unmounted!!!');
        }
    },[userState])
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100">
            <div className=''>
                <img className='w-24 h-24' src={logo}
                />
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4 gap-8'>
                    <li className='onlineStatus'>
                        Online Stattus: <span className='spantxt'>{onlineStatus ? '✅': '🔴'}</span>
                    </li>
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
                        <Link to = '/grocery'>Grocery</Link>
                    </li>
                    <li>
                        <Link to= '/card'>Cart</Link>
                    </li>
                    <li className='cursor-pointer' onClick={handleCred}>{userState}</li>
                    <li className='cursor-pointer font-bold'>{contxtData.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
