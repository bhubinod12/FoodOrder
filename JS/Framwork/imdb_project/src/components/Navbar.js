import React from 'react';
import Logo from '../logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex border-2 space-x-8 py-4 pl-4'>
        <img src= {Logo} alt='movie logo' className='w-[50px] border-solid divide-x'/>
        <Link to ='/' className='text-blue-600'>Movies</Link>
        <Link to ='/watchList' className='text-blue-600'>WatchList</Link>
    </div>
  )
}

export default Navbar