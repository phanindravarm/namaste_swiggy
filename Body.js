import { List } from "./data";
import { useEffect, useState } from "react";
import React from "react";
import ReastaurentCard from "./cards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
export default function Body() {

  const [allRestaurents, setAllRestaurents] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
  const [search, setSearch] = useState("");

  const fliterData = (search, allRestaurents) => {
    return allRestaurents.filter((restaurent) =>
      restaurent.info.name.toLowerCase().includes(search.toLowerCase())
    );
  };
  useEffect(() => {
    getRestaurents();
  }, []);

  async function getRestaurents() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(allRestaurents)
    setFilteredRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  // console.log(allRestaurents)
  return (allRestaurents.length === 0) ? 
 
    <Shimmer />
 : (
    <>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          // console.log(search)
        }}
      ></input>
      <button
        onClick={() => {
          setFilteredRestaurents(fliterData(search, allRestaurents));
        }}
      >
        search
      </button>

      <div className="info">
        {filteredRestaurents.map((restaurent) => {
          return (
          <Link to={"/restaurent/"+restaurent.info.id}>  <ReastaurentCard key={restaurent.info.id} {...restaurent.info} /></Link>
          );
        })}
      </div>
    </>
  );
}
