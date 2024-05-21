import {
  FETCH_COUNTRY_DATA_REQUEST,
  FETCH_COUNTRY_DATA_SUCCESS,
  FETCH_COUNTRY_DATA_FAILURE,
} from "./types";

export const fetchCountryDataRequest = () => ({
  type: FETCH_COUNTRY_DATA_REQUEST,
});

export const fetchCountryDataSuccess = (data) => ({
  type: FETCH_COUNTRY_DATA_SUCCESS,
  payload: data,
});

export const fetchCountryDataFailure = (error) => ({
  type: FETCH_COUNTRY_DATA_FAILURE,
  payload: error,
});
