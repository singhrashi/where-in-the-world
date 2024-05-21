import React, { useEffect, useState } from "react";
import searchIcon from "../../search-outline.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults } from "../../actions";

const Search = ({ searchData, searchError }) => {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.searchResults);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (inputValue) {
      dispatch(fetchSearchResults(inputValue));
      searchData(data);
    } else {
      searchData([]);
    }
  }, [dispatch, inputValue]); // eslint-disable-line react-hooks/exhaustive-deps

  if (error) return searchError(error);

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
