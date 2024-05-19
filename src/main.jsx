import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain="dev-h0iezuyqkhhjz3e7.us.auth0.com"
        clientId="Yx41UTDIBR1mBOyoClCO8DFR8h0pMWKD"
        authorizationParams={{ redirect_uri: "http://localhost:4000/auth" }}
      >
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);
