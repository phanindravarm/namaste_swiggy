import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Header() {
  const [title,setTitle]=useState("Khansaar")
  return (
    <div className="heading">
      <Link to="/">
      <h1 onClick={()=>{
        title=="Khansaar" ? setTitle("Salaar") : setTitle("Khansaar")
      }}>{title}</h1></Link>

      <div className="nav">
        <ul >
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <Link to="/cart"><li>Cart</li></Link>
        </ul>
      </div>
    </div>
  );
}
