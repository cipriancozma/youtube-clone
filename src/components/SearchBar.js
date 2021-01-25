import React, { useState } from "react";

const SearchBar = ({ onFrmSubmit }) => {
  const [term, setTerm] = useState("");

  const handleChange = event => {
    setTerm(event.target.value);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    // To call callback from parent component
    onFrmSubmit(term);
    setTerm("");
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={term} onChange={handleChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
