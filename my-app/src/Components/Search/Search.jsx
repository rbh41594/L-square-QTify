import React, { useState } from "react";
import "./Search.css";
import {ReactComponent as SearchIcon} from "../../Assets/Search-icon.svg"

function Search() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with query:", query);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form className="wrapper" onSubmit={handleSubmit}>
      <input
        className="search"
        value={query}
        onChange={handleInputChange}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
      <button className="search-button" type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export default Search;
