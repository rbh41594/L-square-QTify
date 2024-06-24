import React, { useEffect, useState } from "react";
import styles from "./Segment.module.css";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/carousel.jsx";
import Card from "../Card/card.jsx";
import Filters from "../Filters/filters.jsx";

export default function Section({ title, data, filterSource, type }) {
  const [displayToggle, setDisplayToggle] = useState(true);
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  useEffect(() => {
    if (filterSource) {
      filterSource().then((response) => {
        console.log("Filter source response:", response);
        const { data } = response;
        setFilters([...filters, ...data]);
      });
    }
  }, []);

  const handleToggle = () => {
    setDisplayToggle((prevState) => !prevState);
  };

  const showFilters = filters.length > 1;

  const cardsToRender = data.filter((card) =>
    showFilters && selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : true
  );

  console.log("Filters:", filters);
  console.log("Selected Filter Index:", selectedFilterIndex);
  console.log("Cards to render:", cardsToRender);

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!displayToggle ? "Collapse" : "Show All"}
        </h4>
      </div>
      {showFilters && (
        <div className={styles.filterWrapper}>
          <Filters
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrap}>
          {!displayToggle ? (
            <div className={styles.segmentWrapper}>
              {cardsToRender.map((ele) => (
                <Card data={ele} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={cardsToRender}
              renderComponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
}
