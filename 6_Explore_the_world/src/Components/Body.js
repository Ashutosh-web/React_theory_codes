import { useState } from "react";
import Restaurants from "./RestaurantCard";
import { restaurantList } from "..Constants/Constants";

const filterData = (searchText, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
}

const Body = () => {

  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

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

        <button className="btn" onClick={() => {
          const filteredData = filterData(searchText, restaurants);
          setRestaurants(filteredData);

        }}>Search</button>

        <button className="btn" onClick={() => {
          console.log("making empty search text...");
          setSearchText("");
          setRestaurants(restaurantList);
        }}>Clear Filter</button>
      </div>
      <div className="restaurant-list">
        {
          restaurants.map((restaurant) => {
            return <Restaurants key={restaurant.data.id}  {...restaurant.data} />
          })
        }
      </div>
    </>
  )
};

export default Body;