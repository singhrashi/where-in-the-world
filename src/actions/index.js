import { urlConst } from "../constants";
import {
  fetchCountryDataFailure,
  fetchCountryDataRequest,
  fetchCountryDataSuccess,
} from "./countries";
import {
  detailsPageFailure,
  detailsPageRequest,
  detailsPageSuccess,
} from "./detailsPage";
import {
  fetchFilterOptionsFailure,
  fetchFilterOptionsRequest,
  fetchFilterOptionsSuccess,
} from "./filterOptions";
import {
  fetchSearchResultsFailure,
  fetchSearchResultsRequest,
  fetchSearchResultsSuccess,
} from "./searchResults";

export const fetchCountries = () => {
  return (dispatch) => {
    dispatch(fetchCountryDataRequest());
    fetch(`${urlConst.globalUrl}${urlConst.getAllCountries}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchCountryDataSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchCountryDataFailure(error));
      });
  };
};

export const fetchFilterOptions = () => {
  return (dispatch) => {
    dispatch(fetchFilterOptionsRequest());
    fetch(`${urlConst.globalUrl}${urlConst.filterOptions}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchFilterOptionsSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchFilterOptionsFailure(error));
      });
  };
};

export const fetchCountryDetailsPage = (countryCode) => {
  return (dispatch) => {
    dispatch(detailsPageRequest());
    fetch(
      `${urlConst.globalUrl}${urlConst.getCountryByCountryCode}/${countryCode}`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(detailsPageSuccess(data));
      })
      .catch((error) => {
        dispatch(detailsPageFailure(error));
      });
  };
};

export const fetchSearchResults = (searchInput) => {
  return (dispatch) => {
    dispatch(fetchSearchResultsRequest());
    fetch(`${urlConst.globalUrl}${urlConst.searchByCountryName}/${searchInput}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchSearchResultsSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchSearchResultsFailure(error));
      });
  };
};
