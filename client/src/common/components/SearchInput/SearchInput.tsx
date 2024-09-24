import React from "react";
import { MagnifyingGlass } from "phosphor-react";

import './SearchInput.css';

interface ISearchInput {
  value: string;
  onChange: (data: string) => void;
}

function SearchInput({ value, onChange }: ISearchInput) {
  return (
    <div className="searchInput inputWrapper">
      <MagnifyingGlass size={16} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchInput;
