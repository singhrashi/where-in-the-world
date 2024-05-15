import React, { useEffect, useState } from "react";
import { urlConst } from "../../constants";

const Filter = ({ filteredData }) => {
  const [filterOptions, setFilterOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  useEffect(() => {
    const url = `${urlConst.globalUrl}${urlConst.filterOptions}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setFilterOptions(
            Array.from(new Set(data.map((item) => item.region))).sort()
          );
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const filterData = () => {
    const url = `${urlConst.globalUrl}${urlConst.searchByRegion}/${selectedOption}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          filteredData(data);
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (selectedOption) {
      filterData();
    }
  }, [selectedOption]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select
      onChange={handleSelect}
      class="text-sm rounded-lg block p-5 shadow-3xl outline-none"
    >
      <option>Filter by Region</option>
      {filterOptions.map((option, key) => (
        <option key={key}>{option}</option>
      ))}
    </select>
  );
};

export default Filter;
