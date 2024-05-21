import {
  FETCH_FILTER_OPTIONS_REQUEST,
  FETCH_FILTER_OPTIONS_SUCCESS,
  FETCH_FILTER_OPTIONS_FAILURE,
} from "./types";

export const fetchFilterOptionsRequest = () => ({
  type: FETCH_FILTER_OPTIONS_REQUEST,
});

export const fetchFilterOptionsSuccess = (data) => ({
  type: FETCH_FILTER_OPTIONS_SUCCESS,
  payload: data,
});

export const fetchFilterOptionsFailure = (error) => ({
  type: FETCH_FILTER_OPTIONS_FAILURE,
  payload: error,
});
