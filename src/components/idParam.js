import React from "react";
import { Input } from "antd";

const Search = Input.Search;

 const SearchInput = ({ onSearch, placeholder, label}) => (
  <div>
    <h2>{label}</h2>
    <Search
      placeholder={placeholder}
      onSearch={onSearch}
      style={{ width: 300 }}
      enterButton 
    />

  </div>
);


export default SearchInput;