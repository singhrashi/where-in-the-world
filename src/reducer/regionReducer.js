import {
  FETCH_FILTER_OPTIONS_REQUEST,
  FETCH_FILTER_OPTIONS_SUCCESS,
  FETCH_FILTER_OPTIONS_FAILURE,
} from "../actions/types";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const filterOptionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILTER_OPTIONS_REQUEST:
      return { ...state, loading: true };
    case FETCH_FILTER_OPTIONS_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: "" };
    case FETCH_FILTER_OPTIONS_FAILURE:
      return { ...state, loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default filterOptionsReducer;
