import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(`${import.meta.env.VITE_REDIRECT_URI}/auth/dashboard`);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain={import.meta.env.VITE_DOMAIN}
        clientId={import.meta.env.VITE_CLIENT_ID}
        authorizationParams={{
          redirect_uri: `${import.meta.env.VITE_REDIRECT_URI}/auth/dashboard`,
        }}
      >
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);
