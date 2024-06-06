import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain="dev-1m7fdf5yimzufwoe.us.auth0.com"
        clientId="405186469025-bn37hadrfa5lmk1b4n319pkg8ad0dclo.apps.googleusercontent.com"
        authorizationParams={{
          redirect_uri: "https://mule-front.onrender.com/auth/dashboard",
        }}
      >
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);
