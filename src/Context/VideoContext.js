import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const VideoContext = createContext();
const useVideo = () => useContext(VideoContext);

const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const res = await axios.get("/api/videos");
    setVideos(res.data.videos);
  };

  return (
    <VideoContext.Provider value={{ videos }}>{children}</VideoContext.Provider>
  );
};
export { VideoProvider, useVideo };
