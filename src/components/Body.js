import React,{useState,useEffect} from "react";
import RestaurantCard from "./RestaurantCard"
// import  resList from "../utils/mockData"

const Body = () => {
    const [listOfRestaurant, setlistOfRestaurant]= useState([])
     useEffect(()=>{
    fetchData();
    },[])

const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.483609&lng=73.81764&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json=  await data.json()
    // setlistOfRestaurant(json)
    setlistOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants )
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
}
   return (
      <div className="body">
        <div className="search">
          <button onClick={()=>{
            const filteredRestaurant=listOfRestaurant.filter((res)=>res.info.avgRating>4.3)
           setlistOfRestaurant(filteredRestaurant)
          }}>Top Rated Restaurant</button>
        </div>
        <div
          className="resContainer"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {listOfRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Body;