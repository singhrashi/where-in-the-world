import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../../actions";
import Spinner from "../Spinner/Spinner";

const Countries = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.country);
  const [searchData, setSearchData] = useState([]);
  const [searchError, setSearchError] = useState(false);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleSearchData = (data) => {
    setSearchData(data);
  };

  const handleFilterData = (data) => {
    setSearchData(data);
  };

  const handleSearchError = (error) => {
    console.log(error);
    if (error) {
      setSearchError(true);
    } else {
      setSearchError(false);
    }
  };
  if (loading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col">
      <div className="flex mx-14 justify-between pt-10 pb-8">
        <Search searchData={handleSearchData} searchError={handleSearchError} />
        <Filter filteredData={handleFilterData} />
      </div>
      <div className="flex flex-wrap gap-10.5 justify-evenly p-4">
        {data.length && !searchData.length && !searchError
          ? data?.map((country, key) => (
              <Link
                to={`/country/${country.cioc ? country.cioc : country.cca2}`}
                key={key}
              >
                <Card key={key} country={country} />
              </Link>
            ))
          : searchData.length &&
            !searchError &&
            searchData?.map((country, key) => (
              <Link
                to={`/country/${country.cioc ? country.cioc : country.cca2}`}
                key={key}
              >
                <Card key={key} country={country} />
              </Link>
            ))}
        {searchError && <span>No data available for searched Country</span>}
      </div>
    </div>
  );
};

export default Countries;
