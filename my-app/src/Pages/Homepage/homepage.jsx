import React from "react";
import Hero from "../../Components/Hero/hero.jsx";
import Segment from "../../Components/Segment/Segment.jsx";
import { useOutletContext } from "react-router-dom";
import { fetchFilters } from "../../API/api.js";
import styles from "./homepage.module.css";

function Homepage() {
  const { data } = useOutletContext();
  const { newAlbums, topAlbums, songs } = data;
  return (
    <>
      <Hero />
      <div className={styles.wrapper}>
        <Segment title="Top Albums" data={topAlbums} type="album" />
        <Segment title="New Albums" data={newAlbums} type="album" />
        <Segment
          title="Songs"
          data={songs}
          filterSource={fetchFilters}
          type="songs"
        />
      </div>
    </>
  ); 
}

export default Homepage;
