import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";

/* authentication */
import {Auth0Provider} from '@auth0/auth0-react';


//! 12 MINUTOS DEL ARCHIVO DE fAZT CODE

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <Auth0Provider
    domain="dev-h0iezuyqkhhjz3e7.us.auth0.com"
    clientId="Yx41UTDIBR1mBOyoClCO8DFR8h0pMWKD"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    
  >
      
        <App />
      
  </Auth0Provider>
  </Provider>
);
