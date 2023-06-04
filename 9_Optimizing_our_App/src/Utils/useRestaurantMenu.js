import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_MENU_URL } from "../Constants/Constant";

const useRestaurantMenu = (resid) => {
  const [restaurantmenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    console.log("I am here");
    getRestaurantMenu();
  }, []);

  getRestaurantMenu = async () => {
    try {
      const response = await fetch(FETCH_RESTAURANT_MENU_URL + resid);
      const res_data = await response.json();
      console.log(FETCH_RESTAURANT_MENU_URL + resid);
      
      const menulist = res_data.data.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards;

      const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
      const NestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

      

      const menu = menulist.map(item => {
        if((item.card.card["@type"] === itemCategory) || (item.card.card["@type"] === NestedItemCategory) ) {
          return item.card.card;
        }
      })

      const modifiedData = {
        info : res_data.data.cards[0].card.card.info,
        menu : menu.filter(value => value !== undefined)
      };
      setRestaurantMenu(modifiedData);

      //console.log(menulist?.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name);
      console.log(restaurantmenu);

    } catch (error) {
      console.log("Api not giving result");
      console.log(FETCH_RESTAURANT_MENU_URL + resid);
      console.log(error);
    }
  };

  return restaurantmenu;

};

export default useRestaurantMenu;
