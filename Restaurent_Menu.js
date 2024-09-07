import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
  const [restaurant, setRestaurent] = useState({});
  const { id } = useParams();
  const a = 27739;
  const b = 6498;
  useEffect(() => {
    getMenu();
  }, []);
  async function getMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    // console.log(json.data.cards[2]?.card?.card?.info);
    setRestaurent(json.data?.cards[2]?.card?.card?.info);
  }
  console.log(restaurant);

  return (
    <>
      <h1>restaurent name : {restaurant.name}</h1>

      <h3>area : {restaurant.areaName}</h3>
      <h3>city : {restaurant.city}</h3>

      <h3>avg Rating : {restaurant.avgRating}</h3>
    </>
  );
};

export default RestaurentMenu;
