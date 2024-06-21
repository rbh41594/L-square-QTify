import React from "react"
import Navbar from "./Components/Navbar/Navbar.jsx"
import { Hero } from "./Components/Hero/hero.jsx";
import Card from "./Components/Card/card.jsx"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Card/>
    </div>
  );
}

export default App;
