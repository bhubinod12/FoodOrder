import React from 'react'
import banner from '../banner.jpg'

function Banner() {
  return (
    <div className='relative' >
      <img src= {banner} alt='banner' className='w-full h-[50vh] position-relative' />
      <div className='text-xl text-center absolute bottom-0 text-white center bg-black bg-opacity-50 w-full py-2'>
        john wick
      </div>
    </div>
  )
}

export default Banner