import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{

    const {resid} = useParams();
    console.log(resid);

    const [restaurantmenu , setRestaurantMenu] = useState();

    useEffect(()=>{
        getRestaurantMenu();
    },[]);

    getRestaurantMenu = async ()=>{
        const data =  await fetch();
        const menulist = data.json();
        setRestaurantMenu(menulist);
    }

    console.log(restaurantmenu);

    return (
        <div className="restaurant-menu">
            { menulist.map( (menuItem)=>{
                return <div className="restaurant-menu-card" ></div>
            } )}
        </div>
    )
};

export default RestaurantMenu;