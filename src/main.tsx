import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { Provider } from "react-redux";
import pers from "./Store/Store.ts";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

const { persistor, store } = pers();
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
