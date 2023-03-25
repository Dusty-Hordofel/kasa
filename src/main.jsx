import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./components/layout/Layout";
import "./styles/main.scss";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
);
