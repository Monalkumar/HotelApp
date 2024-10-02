import React from "react";
import {CDN_URL} from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
  
    return (
      <div className="RestaurantCard">
        <div className="cardLogo" style={{ display: "flex" }}>
          <img
            src={CDN_URL + resData.info.cloudinaryImageId }
            style={{ height: "195px" }}
          />
        </div>
        <h2>{resData.info.name}</h2>
        <h2>{resData.info.avgRating}</h2>
      </div>
    );
  };

  export default RestaurantCard;