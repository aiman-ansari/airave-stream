import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
const WatchLaterContext = createContext();
const useWatchLater = () => useContext(WatchLaterContext);
const WatchLaterContextProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState([]);

  useEffect(() => {
    getWatchLater();
  }, []);
  const getWatchLater = async () => {
    const res = await axios.get("/api/user/watchlater", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    setWatchLater(res.data.watchlater);
  };

  const addWatchLater = async (video) => {
    const res = await axios.post(
      "/api/user/watchlater",
      {
        video,
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    setWatchLater(res.data.watchlater);
    toast.info("Video is added to watchlater", {
      theme: "colored",
      autoClose: 2000,
    });
  };
  const deleteWatchLater = async (video) => {
    const res = await axios.delete(`/api/user/watchlater/${video._id}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    setWatchLater(res.data.watchlater);
    toast.error("Video is deleted from watchlater", {
      theme: "colored",
      autoClose: 2000,
    });
  };
  return (
    <WatchLaterContext.Provider
      value={{ watchLater, addWatchLater, deleteWatchLater }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

export { useWatchLater, WatchLaterContextProvider };
