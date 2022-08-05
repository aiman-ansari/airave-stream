import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { CategoryProvider } from "./Context/CategoryContext";
import { VideoProvider } from "./Context/VideoContext";
import { FilterProvider } from "./Context/FilterContext";
import { AuthProvider } from "./Context/AuthContext";
import { IconContainerProvider } from "./Context/IconContainerContext";
import { LikeContextProvider } from "./Context/LikeContext";
import { WatchLaterContextProvider } from "./Context/WatchLaterContext";
import { HistoryContextProvider } from "./Context/HistoryContext";
import { PlaylistContextProvider } from "./Context/PlaylistContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <VideoProvider>
          <FilterProvider>
            <AuthProvider>
              <IconContainerProvider>
                <LikeContextProvider>
                  <WatchLaterContextProvider>
                    <HistoryContextProvider>
                      <PlaylistContextProvider>
                        <App />
                      </PlaylistContextProvider>
                    </HistoryContextProvider>
                  </WatchLaterContextProvider>
                </LikeContextProvider>
              </IconContainerProvider>
            </AuthProvider>
          </FilterProvider>
        </VideoProvider>
      </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
