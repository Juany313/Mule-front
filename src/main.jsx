import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";

/* authentication */
import {Auth0Provider} from '@auth0/auth0-react';

console.log(
  process.env.REACT_APP_AUTH0_DOMAIN
);

//! 12 MINUTOS DEL ARCHIVO DE fAZT CODE

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider>
      <Provider store={store}>
        <App />
      </Provider>
  </Auth0Provider>
);
