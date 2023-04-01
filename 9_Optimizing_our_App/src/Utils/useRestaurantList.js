import { useEffect , useState } from "react";
import { FETCH_RESTAURANTS_URL , restaurantList } from "../Constants/Constant";

const useRestaurantList = ()=>{

    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);

    useEffect(() => {
        getRestaurants();
      }, []);
    
      async function getRestaurants() { 
        const data = await fetch(FETCH_RESTAURANTS_URL);
        const restaurants = await data.json();
        setRestaurants(restaurants?.data?.cards[0]?.data?.data?.cards);
        setFilteredRestaurants(restaurants?.data?.cards[0]?.data?.data?.cards);
      }

      return [restaurants,filteredRestaurants];
}

export default useRestaurantList;
