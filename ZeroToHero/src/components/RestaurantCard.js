const cardStyle = {
    backgroundColor: '#f0f0f0',
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
            <div className='res-card' style={cardStyle}>
                    <img src={
                    CDN_URL + cardData.info.cloudinaryImageId 
                    }
                    alt='food-logo'
                    width='100%'
                />
                <h1>{cardData.info.name}</h1>
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