import React from "react";
import Hero from "../../Components/Hero/hero.jsx";
import Segment from "../../Components/Segment/Segment.jsx";
import { useOutletContext } from "react-router-dom";

function Homepage() {
  const { data } = useOutletContext();
  const { newAlbums, topAlbums } = data;
  return (
    <>
      <Hero />
      <Segment title="Top Albums" data={topAlbums} type="album"/>
      <Segment title="New Albums" data={newAlbums} type="album"/>
    </>
  );
}

export default Homepage;
