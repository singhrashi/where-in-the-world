import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import { Link } from "react-router-dom";

const Countries = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSearchData = (data) => {
    setSearchData(data);
  };

  const handleFilterData = (data) => {
    setSearchData(data);
  };

  return (
    <div className="flex flex-col">
      <div className="flex mx-14 justify-between pt-10 pb-8">
        <Search searchData={handleSearchData} />
        <Filter filteredData={handleFilterData} />
      </div>
      <div className="flex flex-wrap gap-10.5 justify-evenly p-4">
        {data.length && !searchData.length
          ? data?.map((country, key) => (
              <Link
                to={`/country/${country.cioc ? country.cioc : country.cca2}`}
                key={key}
              >
                <Card key={key} country={country} />
              </Link>
            ))
          : searchData.length &&
            searchData?.map((country, key) => (
              <Link
                to={`/country/${country.cioc ? country.cioc : country.cca2}`}
                key={key}
              >
                <Card key={key} country={country} />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Countries;
