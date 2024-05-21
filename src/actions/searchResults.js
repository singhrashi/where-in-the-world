import {
    FETCH_SEARCH_RESULTS_REQUEST,
    FETCH_SEARCH_RESULTS_SUCCESS,
    FETCH_SEARCH_RESULTS_FAILURE,
  } from "./types";
  
  export const fetchSearchResultsRequest = () => ({
    type: FETCH_SEARCH_RESULTS_REQUEST,
  });
  
  export const fetchSearchResultsSuccess = (data) => ({
    type: FETCH_SEARCH_RESULTS_SUCCESS,
    payload: data,
  });
  
  export const fetchSearchResultsFailure = (error) => ({
    type: FETCH_SEARCH_RESULTS_FAILURE,
    payload: error,
  });
  