import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resid } = useParams();
  //const [restaurantmenu, setRestaurantMenu] = useState(null);
  
  const restaurantmenu = useRestaurantMenu(resid);
  
  // data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards : path 1 for kanti sweets 
  // data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards : path for some other restaurant

  return ( restaurantmenu.length == 0 ) ? (
    <div>Shimmer</div>
  ) : (
    <div className="restaurant-menu">
    <h2>{restaurantmenu?.info?.name}</h2>
    { restaurantmenu["menu"].map((menuItemList) =>{
      return (
        <>
        <h4>{menuItemList?.title}</h4>
        <ul>
        {menuItemList?.itemCards.map((menuItem) => {
          return <li>{menuItem?.card?.info?.name}</li>
        })}
        </ul>
        </>
      )
    })}

    </div>
  );
};

export default RestaurantMenu;
