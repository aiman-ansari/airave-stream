import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom"
import { CategoryProvider } from "./Context/CategoryContext";
import { VideoProvider } from "./Context/VideoContext";
import { FilterProvider } from "./Context/FilterContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CategoryProvider>
      {/* <FilterProvider> */}
      <VideoProvider>
        <FilterProvider>
        <App />

        </FilterProvider>
      </VideoProvider>
      {/* </FilterProvider> */}
    </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
