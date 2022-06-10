import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
const HistoryContext = createContext();
const useHistory = () => useContext(HistoryContext);
const HistoryContextProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    getHistory();
  }, []);
  const getHistory = async () => {
    const res = await axios.get("/api/user/history", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    setHistory(res.data.history);
  };

  const addHistory = async (video) => {
    const res = await axios.post(
      "/api/user/history",
      {
        video,
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    setHistory(res.data.history);
  };
  const deleteHistory = async (video) => {
    const res = await axios.delete(`/api/user/history/${video._id}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    setHistory(res.data.history);
    toast.error("Video is deleted from history", {
      theme: "colored",
      autoClose: 2000,
    });
  };
  const deleteAllHistory = async () => {
    const res = await axios.delete("/api/user/history/all", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    setHistory(res.data.history);
    toast.error("All videos are deleted from history", {
      theme: "colored",
      autoClose: 2000,
    });
  };

  return (
    <HistoryContext.Provider
      value={{ history, addHistory, deleteHistory, deleteAllHistory }}
    >
      {children}
    </HistoryContext.Provider>
  );
};
export { HistoryContextProvider, useHistory };
