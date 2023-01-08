import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import './language/i18next'
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/loader/Loader";
import { } from "number-brm"

import rootReducer from "./context/reducer";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
  whitelist: ["addToCart", "addToHeart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persister = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
          <BrowserRouter>
          <Suspense fallback={<Loader/>}>
            <App />
          </Suspense>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
