import {
  FETCH_COUNTRY_DATA_REQUEST,
  FETCH_COUNTRY_DATA_SUCCESS,
  FETCH_COUNTRY_DATA_FAILURE,
} from "../actions/types";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_COUNTRY_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: "" };
    case FETCH_COUNTRY_DATA_FAILURE:
      return { ...state, loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default countryReducer;
