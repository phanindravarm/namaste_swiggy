import React from "react";
import { Link } from "react-router-dom";
export default function ReastaurentCard({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
}) {
  return (
    <>
      <div className="card">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
        <h3>Name :{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>rating : {avgRating}</h4>
      </div>
    </>
  );
}
