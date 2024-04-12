import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../util/constant';

const RestaurantMenu = () => {
    const [restInfo, setRestInfo] = useState(null);
    const {resId} = useParams();
    // console.log(resId);
    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        // console.log('Hiii');
        const data = await fetch( MENU_API + resId);
        // console
        const jsonData = await data.json();
        // console.log(jsonData.data);
        // setRestInfo(jsonData.data.cards[2].card.card.info);
        // setItemCards(jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
        setRestInfo(jsonData.data);
        // console.log(restInfo);
    }
    if (restInfo === null) return (<Shimmer />);
    // console.log(restInfo);
    const {name, cuisines, costForTwoMessage} = restInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
    if (!itemCards) {
        console.log('No data present!!!');
        return <h1>Data not found!!!</h1>
        return;
    }
    // if (itemCards.length === 0) return;
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