import { combineReducers } from "@reduxjs/toolkit";

import productsApiSlice from "../ProductSlice";
import categotieApiSlice from "../CategotieSlice";
/* import AuthReducers from "../AuthSlice";
 */
const rootReducers = combineReducers({
  [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  [categotieApiSlice.reducerPath]: categotieApiSlice.reducer,
  /*   auth: AuthReducers,
   */
});
export default rootReducers;
