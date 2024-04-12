// Changing the project name from ZeroToHero to FoodOrder:
import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard';
// import { restaurants } from '../util/fakeData_2'; Not using now taking from Swigy API using fetch(URL) method
import { SWIGY_API_URL } from '../util/constant';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
const Body = () => {
    // const cardData = restaurants;
    let [cardData, setCardData] = useState([]);
    const [inputval, setInputVal] = useState('');
    const [filteredrestaunrant, setFilteredrestaunrant] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const responseData = await fetch (SWIGY_API_URL);
        const jsonData = await responseData.json();
        // console.log(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        // return;
        const resData = await jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setCardData(resData);
        // console.log(resData);
        setFilteredrestaunrant(resData);
    }
    const handleFilteredRes = () => {
        // Filter logic need to write here
        const filterRestaurant = cardData.filter((item) => {
           return item.info.avgRating >= 4.4
        })
        setFilteredrestaunrant(filterRestaurant);
    }
    const handleInputVal = (e) => {
        setInputVal(e.target.value);
    }
    const handleSubmit = () => {
        const filterRestaurant = cardData.filter((item) => {
            return item.info.name.toLowerCase().includes(inputval.toLowerCase());
        })
        setFilteredrestaunrant(filterRestaurant);
    }
    // console.log(filteredrestaunrant);
    
    // Shimmer UI

    return cardData.length === 0 ? (<Shimmer/>): 
    (
        
        <div className="bodyWrap">
            <div className="filter">
                <div className='search'>
                    <input type='text' className='search-box' value={inputval} 
                        onChange={handleInputVal}
                    />
                    <button className='searchBtn' onClick={handleSubmit}>Search</button>
                </div>
                <button className='filter-btn' onClick={handleFilteredRes}>Top rated restaurant</button>
            </div>
            <div className="res-container">
                {filteredrestaunrant.map((restaurant) => {
                    return <Link 
                        key = {restaurant.info.id} 
                        to= {"/restaurant/" + restaurant.info.id}
                        >
                        <RestaurantCard cardData = {restaurant}/>
                    </Link>
                   
                })}
            </div>
        </div>
    )
}

export default Body