import {
  FETCH_SEARCH_RESULTS_SUCCESS,
  FETCH_SEARCH_RESULTS_FAILURE,
  FETCH_SEARCH_RESULTS_REQUEST,
} from "../actions/types";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_SEARCH_RESULTS_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: "" };
    case FETCH_SEARCH_RESULTS_FAILURE:
      return { ...state, loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default searchResultsReducer;
