import { Link } from "react-router-dom";
import { useState } from "react";
import { filterData } from "../Utils/helper";
import Offline from "./Offline";
import useOnline from "../Utils/useOnline";
import Restaurants from "./RestaurantCard";
import useRestaurantList from "../Utils/useRestaurantList";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, filteredRestaurants] = useRestaurantList();

  const isOnline = useOnline();

  if (!isOnline) {
    return <Offline />;
  }

  return restaurants.length == 0 ? (
    <div>Shimmer</div>
  ) : (
    <>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Search Restraunt"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
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
          return (
            <Link
              to={"/Restaurantmenu/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <Restaurants {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
