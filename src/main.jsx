import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.scss";
import { DataAvailabilityProvider } from "./components/DataAvailabilityContext";
import { aboutData, apartment } from "./data/data";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataAvailabilityProvider apartment={apartment} aboutData={aboutData}>
      <App />
    </DataAvailabilityProvider>
  </React.StrictMode>
);
