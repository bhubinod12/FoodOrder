import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../util/constant';
import useRestaurantMenu from '../util/useRestaurantMenu';

const RestaurantMenu = () => {
    // const [restInfo, setRestInfo] = useState(null);
    const {resId} = useParams();
    const restInfo = useRestaurantMenu(resId); // Custom Hooks-> Moved below useEffect and fetchMenu code into the util/useRestaurantMenu.js

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch( MENU_API + resId);
    //     const jsonData = await data.json();
    //     setRestInfo(jsonData.data);
    // }

    // console.log(restInfo);
    // if (restInfo === null) return (<Shimmer />);
    if (restInfo === null) return (<h1>Loading...</h1>);

    const {name, cuisines, costForTwoMessage} = restInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    if (!itemCards) {
        console.log('No data present!!!');
        return <h1>Data not found!!!</h1>
        return;
    }

  return (
    <div className='menu'>
         <h1>{name}</h1>
         <h3>{cuisines.join(', ')} - {costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul>
            {
                itemCards.map((item) => {
                    return <li key={item.card.info.id}>{item.card.info.name} - {"Rs "}{item.card.info.price/100}</li>
                })
            }
        </ul>

    </div>
  )
}

export default RestaurantMenu