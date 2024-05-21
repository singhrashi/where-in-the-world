import { combineReducers } from "redux";
import countryReducer from "./countryReducer";
import filterOptionsReducer from "./regionReducer";
import detailsPageReducer from "./detailsPageReducer";
import searchResultsReducer from "./searchResultsReducer";

const rootReducer = combineReducers({
  country: countryReducer,
  filterOptions: filterOptionsReducer,
  detailsPage: detailsPageReducer,
  searchResults: searchResultsReducer,
});

export default rootReducer;
