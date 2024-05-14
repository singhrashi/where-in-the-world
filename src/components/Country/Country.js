import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { urlConst } from "../../constants";
import backArrowIcon from "../../call-made.svg";

const Country = () => {
  const { countryCode } = useParams();
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const url = `${urlConst.globalUrl}${urlConst.getCountryByCountryCode}/${countryCode}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setCountryData(data);
        }
      })
      .catch((error) => console.error(error));
  }, [countryCode]);
  return (
    <div className="p-14 flex gap-8 flex-col">
      <Link to="/">
        <div className="flex justify-center rounded-lg bg-white shadow-3xl p-2.5 bg-white w-34 gap-4">
          <img src={backArrowIcon} alt="backIcon" />
          <span>Back</span>
        </div>
      </Link>
      {countryData.length ? (
        <div className="flex w-full">
          <img
            src={countryData[0].flags.svg}
            alt={countryData[0].flags.alt}
            className="h-96 rounded-lg"
          />
          <div className="flex flex-col gap-5 w-full p-14 basis-2/4">
            <span className="text-3.5xl">{countryData[0].name.official}</span>
            <div className="flex w-full justify-between">
              <div className="text-base leading-8">
                <div>
                  <span className="font-semibold">Native Name: </span>
                  <span>
                    {
                      countryData[0].name.nativeName[
                        Object.keys(countryData[0].name.nativeName)[0]
                      ].official
                    }
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Population: </span>
                  <span>{countryData[0].population}</span>
                </div>
                <div>
                  <span className="font-semibold">Region: </span>
                  <span>{countryData[0].region}</span>
                </div>
                <div>
                  <span className="font-semibold">Sub Region: </span>
                  <span>{countryData[0].subregion || 'Not available'}</span>
                </div>
                <div>
                  <span className="font-semibold">Capital: </span>
                  <span>{countryData[0].capital?.[0] || 'Not available'}</span>
                </div>
              </div>
              <div className="text-base leading-8">
                <div>
                  <span className="font-semibold">Top Level Domain: </span>
                  <span>{countryData[0].tld[0]}</span>
                </div>
                <div>
                  <span className="font-semibold">Languages: </span>
                  <span>
                    {Object.values(countryData[0].languages).join(",")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Country;
