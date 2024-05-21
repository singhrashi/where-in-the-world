import {
    DETAILS_PAGE_REQUEST,
    DETAILS_PAGE_SUCCESS,
    DETAILS_PAGE_FAILURE,
  } from "./types";
  
  export const detailsPageRequest = () => ({
    type: DETAILS_PAGE_REQUEST,
  });
  
  export const detailsPageSuccess = (data) => ({
    type: DETAILS_PAGE_SUCCESS,
    payload: data,
  });
  
  export const detailsPageFailure = (error) => ({
    type: DETAILS_PAGE_FAILURE,
    payload: error,
  });
  