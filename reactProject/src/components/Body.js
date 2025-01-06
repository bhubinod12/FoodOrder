// Changing the project name from ZeroToHero to FoodOrder:
import React, { useEffect, useState, UserContext, useContext } from 'react'
import RestaurantCard from './RestaurantCard';
// import { restaurants } from '../util/fakeData_2'; Not using now taking from Swigy API using fetch(URL) method
import { SWIGY_API_URL } from '../util/constant';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../util/useOnlineStatus';
import UserContext from '../util/UserContext';



const Body = () => {
    // const cardData = restaurants;
    let [cardData, setCardData] = useState([]);
    const [inputval, setInputVal] = useState('');
    const [filteredrestaunrant, setFilteredrestaunrant] = useState([]);
    const [isHOC, setIsHOC] = useState(true);
    const contxtData = useContext(UserContext);
    const defaultValue = contxtData.loggedInUser;
    
    const {loggedInUser, setUserName} = useContext(UserContext);
    console.log(contxtData);

    // console.log("Body restaurant data is ", cardData)
    const RestaurantCardHOC = RestaurantCardWidgetOn(RestaurantCard);
    // console.log(isHOC);

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const responseData = await fetch (SWIGY_API_URL);
        console.log(responseData)
        const jsonData = await responseData.json();
        
        console.log(jsonData.data.cards);
        // card.card.gridElements.infoWithStyle.restaurants
        // return;
        const resData = await jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        // const resData = await jsonData.data.cards;
        // console.log(resData);
        // return;
        setCardData(resData);
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
    
    const onlineStatus = useOnlineStatus();

    if (onlineStatus == false) {
        return <h1>Looks you are offline!!! Please check your internet.</h1>
    }

    // Shimmer UI

    return cardData.length === 0 ? (<h1>Loading...</h1>): 
    (
        
        <div className="bodyWrap">
            <div className="flex mt-4">
                <div className='search m-2 p-2'>
                    <input 
                        type='text' 
                        className='border border-solid border-black' 
                        value={inputval} 
                        onChange={handleInputVal}
                    />
                    <button className='ml-2 px-2 py-1 rounded-md bg-blue-400 text-white' 
                        onClick={handleSubmit}>
                        Search
                    </button>
                </div>
                <div className='flex items-center '>
                    <button className='bg-purple-400 rounded-md px-2 py-1 text-white' 
                        onClick={handleFilteredRes}>
                            Top rated restaurant
                    </button>

                </div>
                <div className='m-2 p-2'>
                    <label className='px-2'>User Name</label>
                    <input className='border border-solid border-black'
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
            </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {filteredrestaunrant.map((restaurant) => {
                    return <Link 
                        key = {restaurant.info.id} 
                        to= {"/restaurant/" + restaurant.info.id}
                        >
                        {/* if the restaurant is promoted then add a promoted label to it */
                            isHOC == true ? <RestaurantCardHOC cardData = {restaurant} defaultVal = {defaultValue}/> : <RestaurantCard cardData = {restaurant} defaultVal = {defaultValue}/>
                        }
                        <RestaurantCard cardData = {restaurant} defaultVal = {defaultValue}/>
                    </Link>
                   
                })}
            </div>
        </div>
    )
};

// Higher Order Component

 // HOC
 const RestaurantCardWidgetOn = (RestaurantCard) => {
    return (props) => {
        // setIsHOC(true);
        // console.log('Defalut value',  props.defaultVal)
        return (
            <div>
                <label>HOC {props.defaultVal}</label>

                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default Body