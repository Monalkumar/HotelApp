// import React, { useState } from "react";
// import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";

// const Body = () => {
//   const [listOfRestaurants, setlistOfRestaurant] = useState(resList);
//   return (
//     <div className="body">
//       <div className="search">
//         <button
//           onClick={() => {
//             const filteredRestaurant = listOfRestaurants.filter((res)=>res.info.avgRating > 4.1);
//            setlistOfRestaurant(filteredRestaurant)
           
//           }}
//         >
//           Top Rated Restaurant
//         </button>
//       </div>
//       <div
//         className="resContainer"
//         style={{ display: "flex", flexWrap: "wrap" }}
//       >
//         {listOfRestaurants.map((restaurant) => (
//           <RestaurantCard key={restaurant.info.id} resData={restaurant} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;
