import React, { useState } from "react";
import "./Segment.css";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/carousel.jsx";
import Card from "../Card/card.jsx";

export default function Section({title, data, type}) {
  const [ displayToggle, setDisplayToggle ] = useState(true);
  const handleToggle = () => {
    setDisplayToggle((prevState) => !prevState);
  };
  return (
    <div>
      <div className="header">
        <h3>{title}</h3>
        <h4 className="toggleText" onClick={handleToggle}>
          {!displayToggle ? "Collapse" : "Show All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className="cardWrap">
          {!displayToggle ? (
            <div className="carouselWrapper">
              {data.map((ele) => (
                <Card data={ele} type={type} />
              ))}
            </div>
          ) : (
            <Carousel data={data} />
          )}
        </div>
      )}
    </div>
  );
}
