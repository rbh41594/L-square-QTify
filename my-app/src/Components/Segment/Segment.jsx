import React, { useState } from "react";
import styles from "./Segment.module.css";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/carousel.jsx";
import Card from "../Card/card.jsx";

export default function Section({ title, data, type }) {
  const [displayToggle, setDisplayToggle] = useState(true);
  const handleToggle = () => {
    setDisplayToggle((prevState) => !prevState);
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!displayToggle ? "Collapse" : "Show All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrap}>
          {!displayToggle ? (
            <div className={styles.segmentWrapper}>
              {data.map((ele) => (
                <Card data={ele} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              renderComponent={(data) => (
                <Card data={data} type={type} />
              )}
            />
          )}
        </div>
      )}
    </div>
  );
}
