import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { restaurantList } from "../Constants/Constant";
import Restaurants from "./RestaurantCard";

const filterData = (searchText, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText)
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);


  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() { 
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9689968&lng=77.72088529999999&sortBy=DELIVERY_TIME&page_type=DESKTOP_WEB_LISTING");
    const restaurants = await data.json();
    setRestaurants(restaurants?.data?.cards[0]?.data?.data?.cards);
    setFilteredRestaurants(restaurants?.data?.cards[0]?.data?.data?.cards);
  }

  return (
    <>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Search Restraunt"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            console.log(e.target.value);
          }}
        ></input>

        <button
          className="btn"
          onClick={() => {
            const filteredData = filterData(searchText, restaurants);
            setFilteredRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return <Link to={"/Restaurantmenu/"+restaurant.data.id} key={restaurant.data.id} ><Restaurants  {...restaurant.data} /></Link>;
        })}
      </div>
    </>
  );
};

export default Body;
