import React, { useEffect, useState } from "react";
import { urlConst } from "../../constants";
import searchIcon from "../../search-outline.svg";

const Search = ({ searchData }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };
  const filterData = () => {
    if (inputValue) {
      const url = `${urlConst.globalUrl}${urlConst.searchByCountryName}/${inputValue}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            searchData(data);
          }
        })
        .catch((error) => console.error(error));
    } else {
      searchData([]);
    }
  };

  useEffect(() => {
    filterData();
  }, [inputValue]);

  return (
    <div className="relative flex text-dark-gray bg-white p-5 gap-5 items-center rounded-lg basis-2/5 shadow-3xl">
      <img src={searchIcon} className="w-5 text-dark-gray" alt="searchIcon" />
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Search for a country..."
        className="h-10 text-sm focus:outline-none w-full h-full"
      />
    </div>
  );
};

export default Search;
