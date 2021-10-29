import React from "react";
import "./search-box.styles.css";

function SearchBox({handleChange, placeholder}) {
  return (
    <div>
      <input
        className="search"
        onChange={handleChange}
        type="search"
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchBox;
