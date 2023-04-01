import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_MENU_URL } from "../Constants/Constant";

const useRestaurantMenu = () => {
  const [restaurantmenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  getRestaurantMenu = async () => {
    try {
      const data = await fetch(FETCH_RESTAURANT_MENU_URL + resid);
      const menulist = await data.json();
      console.log(
        menulist?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
          ?.card?.card?.itemCards
      );
      
      setRestaurantMenu(restaurantmenu);

      return menulist;
    } catch (error) {
      console.log(error);
    }
  };
};

export default useRestaurantMenu;
