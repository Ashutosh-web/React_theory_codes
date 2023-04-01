import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resid } = useParams();

  const restaurantmenu = useRestaurantMenu(resid);
  
  return (
    <div className="restaurant-menu">
      { restaurantmenu.map( (menuItem)=>{
                return <div className="restaurant-menu-card" ></div>
            } )}
      menu
    </div>
  );
};

export default RestaurantMenu;
