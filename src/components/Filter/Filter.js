import React, { useEffect, useState } from "react";
import { urlConst } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilterOptions } from "../../actions";

const Filter = ({ filteredData }) => {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.filterOptions);
  const [selectedOption, setSelectedOption] = useState("");
  useEffect(() => {
    dispatch(fetchFilterOptions());
  }, [dispatch]);

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

  if (error) return <div>No filter Options Available</div>;

  return (
    <select
      onChange={handleSelect}
      className="text-sm rounded-lg block p-5 shadow-3xl outline-none"
    >
      <option>Filter by Region</option>
      {Array.from(new Set(data.map((item) => item.region)))
        .sort()
        ?.map((option, key) => (
          <option key={key}>{option}</option>
        ))}
    </select>
  );
};

export default Filter;
