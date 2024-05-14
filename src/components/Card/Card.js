import React from "react";

const Card = ({ country }) => {
  return (
    <div className="flex flex-col w-66 h-82 rounded-lg bg-white shadow-3xl">
      <img src={country.flags.png} alt={country.flags.alt} className="rounded-tl-lg rounded-tr-lg h-40" />
      <div className="flex flex-col gap-4 m-5">
        <span className="font-extrabold">{country.name.official}</span>
        <div className="flex flex-col leading-4 gap-3">
          <div>
            <span className="font-semibold">Population:</span>
            <span>{country.population}</span>
          </div>
          <div>
            <span className="font-semibold">Region:</span>
            <span>{country.region}</span>
          </div>
          <div>
            <span className="font-semibold">Capital:</span>
            <span>{country.capital}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
