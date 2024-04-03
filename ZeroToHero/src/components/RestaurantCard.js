const cardStyle = {
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    margin:10
}

import React from 'react'
import { CDN_URL } from '../util/constant';

const RestaurantCard = (props) => {
    const {cardData} = props;
    console.log(cardData[0].info);
    return (
        <>
        {
            cardData.map((item) => {
                const cloudinaryImageId = item.info.cloudinaryImageId
                return (
                    <div key={item.info.id} className='res-card' style={cardStyle}>
                         {/* <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cloudinaryImageId'  */}
                         <img src={
                            CDN_URL + cloudinaryImageId 
                         }
                            alt='food-logo'
                            width='100%'
                        />
                        <h1>{item.info.name}</h1>
                        <h2>{item.info.cuisines.join(', ')}</h2>
                        <h4>{item.info.areaName}</h4>
                        <h4>{item.info.avgRating} stars</h4>
                        <h4>{item.info.costForTwo}</h4>
                        <h4>{item.info.sla.deliveryTime} minutes</h4>

                    </div>
                )
            })
        }
        </>
    )
}

export default RestaurantCard