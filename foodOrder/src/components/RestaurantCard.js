const cardStyle = {
    backgroundColor: '#b6f3fc',
    textAlign: 'center',
    margin:10
}

import React from 'react'
import { CDN_URL } from '../util/constant';

const RestaurantCard = (props) => {
    const {cardData} = props;
    // console.log(cardData);
    
    return (
        <>
            <div className='res-card m-2 p-2 w-[250] rounded-lg bg-emerald-100 hover:bg-emerald-400 text-center hover:text-white'>
                    <img src={
                    CDN_URL + cardData.info.cloudinaryImageId 
                    }
                    className='rounded-md'
                    alt='food-logo'
                    width='100%'
                />
                <h1 className='font-semibold py-2 text-lg'>{cardData.info.name}</h1>
                <h2>{cardData.info.cuisines.join(', ')}</h2>
                <h4>{cardData.info.areaName}</h4>
                <h4>{cardData.info.avgRating} stars</h4>
                <h4>{cardData.info.costForTwo}</h4>
                <h4>{cardData.info.sla.deliveryTime} minutes</h4>
            </div>
        </>
    )
}

export default RestaurantCard