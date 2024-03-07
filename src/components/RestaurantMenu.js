import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constants";
import useRestaurant from "./utils/useRestaurant";

const RestaurantMenu = () => {
 
  const params = useParams();
  const { id } = params;
  const {restaurant,menu}=useRestaurant(id)
  console.log(restaurant)
  return (
    <div className="menu">
      <div>
        <h1>Restaurant id :{id} </h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <br />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} stars</h3>
        <h3>{restaurant.areaName}</h3>
        <h3>{restaurant.costForTwoMessage}</h3>
      </div>    
      <div>
        <h1>Menu</h1>
        <ul>  
          {menu.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
