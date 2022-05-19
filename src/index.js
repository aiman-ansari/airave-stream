import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom"
import { CategoryProvider } from "./Context/CategoryContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CategoryProvider>
      <App />
    </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
