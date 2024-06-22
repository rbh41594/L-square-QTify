import React from "react";
import "./hero.css";
import headphones from "../../Assets/headphones.svg";

export default function Hero() {
  return (
    <div className="hero">
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={headphones} alt="headphones" width={122} />
      </div>
    </div>
  );
}
