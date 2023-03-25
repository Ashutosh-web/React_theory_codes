import { restaurantList } from "./constant";

const filterData = (searchText, restaurants) => {
    return restaurants.filter((restaurant) =>
      restaurant.data.name.includes(searchText)
    );
  }
  

const SearchBar = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);

    return (
        <div className="search-bar">
            <input
                className="search-input"
                type="text"
                placeholder="Search Restraunt"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                    console.log(e.target.value);
                }}
            ></input>

            <button className="btn" onClick={() => {
                const filteredData = filterData(searchText, restaurants);
                setRestaurants(filteredData);

            }}>Search</button>

            <button className="btn" onClick={() => {
                setRestaurants(restaurantList);
            }}>Clear Filter</button>
        </div>
    )
} 

export default SearchBar;