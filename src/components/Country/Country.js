import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import backArrowIcon from "../../call-made.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountryDetailsPage } from "../../actions";
import Spinner from "../Spinner/Spinner";

const Country = () => {
  const { countryCode } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.detailsPage);

  useEffect(() => {
    dispatch(fetchCountryDetailsPage(countryCode));
  }, [dispatch]);

  if (loading) return <Spinner />;
  if (error) return <div>No Details available</div>;
  return (
    <div className="p-14 flex gap-8 flex-col">
      <Link to="/">
        <div className="flex justify-center rounded-lg bg-white shadow-3xl p-2.5 bg-white w-34 gap-4">
          <img src={backArrowIcon} alt="backIcon" />
          <span>Back</span>
        </div>
      </Link>
      {data.length ? (
        <div className="flex w-full">
          <img
            src={data[0].flags.svg}
            alt={data[0].flags.alt}
            className="h-96 rounded-lg"
          />
          <div className="flex flex-col gap-5 w-full p-14 basis-2/4">
            <span className="text-3.5xl">{data[0].name.official}</span>
            <div className="flex w-full justify-between">
              <div className="text-base leading-8">
                <div>
                  <span className="font-semibold">Native Name: </span>
                  <span>
                    {
                      data[0].name.nativeName[
                        Object.keys(data[0].name.nativeName)[0]
                      ].official
                    }
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Population: </span>
                  <span>{data[0].population}</span>
                </div>
                <div>
                  <span className="font-semibold">Region: </span>
                  <span>{data[0].region}</span>
                </div>
                <div>
                  <span className="font-semibold">Sub Region: </span>
                  <span>{data[0].subregion || "Not available"}</span>
                </div>
                <div>
                  <span className="font-semibold">Capital: </span>
                  <span>{data[0].capital?.[0] || "Not available"}</span>
                </div>
              </div>
              <div className="text-base leading-8">
                <div>
                  <span className="font-semibold">Top Level Domain: </span>
                  <span>{data[0].tld[0]}</span>
                </div>
                <div>
                  <span className="font-semibold">Languages: </span>
                  <span>{Object.values(data[0].languages).join(",")}</span>
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
