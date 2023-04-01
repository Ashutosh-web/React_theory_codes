import { IMG_CDN_URL } from '../Constants/Constant';

const Restaurants = ({
    cloudinaryImageId,
    name,
    cuisines,
    avgRating
  }) =>{
      return (
          <div className="restaurant-card">
              <img src={IMG_CDN_URL + cloudinaryImageId}></img>
              <h2>{name}</h2>
              <h4>{cuisines.join(', ')}</h4>
              <p>{avgRating}⭐</p>
          </div>
      )
  };

  export default Restaurants;