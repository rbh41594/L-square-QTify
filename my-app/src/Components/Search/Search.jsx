import React, { useState } from "react";
import "./Search.css";
import { ReactComponent as SearchIcon } from "../../Assets/Search-icon.svg";

function Search() {
  // const defaultText = "Search a song";
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with query:", query);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // const handleFocus = () => {
  //   if (query === defaultText) {
  //     setQuery("");
  //   }
  // };

  // const handleBlur = () => {
  //   if (query === "") {
  //     setQuery(defaultText);
  //   }
  // };

  return (
    <form className="wrapper" onSubmit={handleSubmit}>
      <input
        className="search"
        value={query}
        placeholder="Search a song"
        onChange={handleInputChange}
        // onFocus={handleFocus}
        // onBlur={handleBlur}
        inputProps={{ "aria-label": "search" }}
      />
      <button className="search-button" type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export default Search;