import { combineReducers } from "@reduxjs/toolkit";

import productsApiSlice from "../ProductSlice";
import categotieApiSlice from "../CategotieSlice";

const rootReducers = combineReducers({
  [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  [categotieApiSlice.reducerPath]: categotieApiSlice.reducer,
});
export default rootReducers;
