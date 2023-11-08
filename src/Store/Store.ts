import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducers from "./Reducers/index";
import { configureStore } from "@reduxjs/toolkit";
import productsApiSlice from "./ProductSlice";
import categoriesApiSlice from "./CategotieSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export default () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat([
        productsApiSlice.middleware,
        categoriesApiSlice.middleware,
      ]),
  });
  const persistor = persistStore(store);
  return { store, persistor };
};
