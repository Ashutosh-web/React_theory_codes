import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{

    const {resid} = useParams();
    console.log(resid);

    return (
        <div>
            Menu
        </div>
    )
};

export default RestaurantMenu;