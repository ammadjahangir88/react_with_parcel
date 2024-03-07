import { useEffect, useState } from "react";
import { IMG_CDN_URL, restaurantList } from "./constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline";
const RestaurantCard = ({ restaurant }) => {
  //   console.log(restaurant);
  // console.log(restaurant)
  const { name, cuisines, avgRating, cloudinaryImageId } = restaurant;

  return (
    <div className="card">
      <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};
function filterData(searchText, restaurants) {
  // console.log(restaurants)
  return restaurants.filter((restaurant) => {
    return restaurant.info.name.includes(searchText);
  });
}
const Body = () => {
  // const restaurantInfoList =
  //   restaurantList[0]?.card.card.gridElements.infoWithStyle.restaurants.map(
  //     (item) => item.info
  //   );

  const [searchText, setSearchText] = useState("");
  const [restaurant, setRestaurant] = useState([]);
  const [restaurantInfoList, setRestaurantList] = useState([]);
  const isOnline=useOnline()
  useEffect(() => {
    // console.log("HEllo World AMmsajddhjsddh")
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setRestaurantList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  }
  if (!isOnline) return <h1>Sorry You are Offline! please check your internet connection</h1>
  // console.log(restaurantInfoList)
  return restaurantInfoList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <h1>{searchText}</h1>

        <button
          className="search-btn"
          onClick={() => {
            // let x = restaurantInfoList.filter((restaurantName) => {
            //   if (restaurantName.name == searchText) {
            //     return restaurantName;
            //   }
            // });
            const data = filterData(searchText, restaurantInfoList);
            console.log(restaurant);
            setRestaurant(data);
            // console.log("Hissdsssgfgsss", restaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurant?.map((info, index) => (
          <Link to={"restaurant/"+info.info.id}>
            <RestaurantCard restaurant={info.info} key={info.info.id} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
