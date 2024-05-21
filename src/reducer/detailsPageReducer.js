import {
  DETAILS_PAGE_REQUEST,
  DETAILS_PAGE_SUCCESS,
  DETAILS_PAGE_FAILURE,
} from "../actions/types";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const detailsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAILS_PAGE_REQUEST:
      return { ...state, loading: true };
    case DETAILS_PAGE_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: "" };
    case DETAILS_PAGE_FAILURE:
      return { ...state, loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default detailsPageReducer;
