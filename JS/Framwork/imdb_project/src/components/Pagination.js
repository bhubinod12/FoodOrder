import React from 'react'

function Pagination(props) {
    let {currentPage, onNext, onPrev} = props;
  return (
    <div className='flex justify-center mb-4'>
        <div onClick={onPrev} className='border-2 p-2 rounded-l-xl  border-blue-400'>prev page</div>
        <div className='border-2 p-2  border-blue-400'>{currentPage}</div>
        <div onClick={onNext} className='border-2 p-2 rounded-r-xl  border-blue-400'>next page</div>
    </div>
  )
}

export default Pagination