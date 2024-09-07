import React from "react";

export default function Shimmer() {
  return (
    <div className="shimmer">
      {Array(20)
        .fill("")
        .map((e,index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
}
