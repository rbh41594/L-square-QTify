import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./API/api.js";
import { StyledEngineProvider } from "@mui/material";

function App() {
  const [data, setData] = useState({});
  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevState) => {
        return { ...prevState, [key]: data };
      });
    });
  };
  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  }, []);

  const { topAlbums = [], newAlbums = [] } = data;

  return (
    <div>
      <StyledEngineProvider>
        <Navbar />
        <Outlet context={{ data: { topAlbums, newAlbums } }} />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
