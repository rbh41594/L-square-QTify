import React, { useState } from "react";
import styles from "./Search.css";
import {ReactComponent as SearchIcon} from "../../assets/Search icon.svg"

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
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input
        className={styles.search}
        value={query}
        onChange={handleInputChange}
        placeholder="Search for an album of your choice..."
        inputProps={{ "aria-label": "search" }}
      />
      <button className={styles.button} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export default Search;
