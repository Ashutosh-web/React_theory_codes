import { IMT_CDN_URL } from '../Components/Constants/Constant';

/* I can use destructuring as well
{
    cloudinaryImageId,
    name,
    cuisines,
    avgRating
}
*/

const Restaurants = ({
    cloudinaryImageId,
    name,
    cuisines,
    avgRating
  }) =>{
      return (
          <div className="restaurant-card">
              <img src={IMT_CDN_URL + cloudinaryImageId}></img>
              <h2>{name}</h2>
              <h4>{cuisines.join(', ')}</h4>
              <p>{avgRating}⭐</p>
          </div>
      )
  };

  export default Restaurants;