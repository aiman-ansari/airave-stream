import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
const PlaylistContext = createContext();
const usePlaylist = () => useContext(PlaylistContext);
const PlaylistContextProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  const [playlistModal, setPlaylistModal] = useState(false);
  const [createPlaylist, setShowPlaylist] = useState(false);
  useEffect(() => {
    getPlaylist();
  }, []);
  const getPlaylist = async () => {
    var res = await axios.get("/api/user/playlists", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    setPlaylist(res.data.playlists);
  };
  const addPlaylist = async (title, description) => {
    const playlist = { title, description };
    try {
      const res = await axios.post(
        "/api/user/playlists",
        {
          playlist,
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );

      setPlaylist(res.data.playlists);
      toast.info("Playlist created successfully", {
        theme: "colored",
        autoClose: 2000,
      });
    } catch (error) {
      toast.error(error);
    }
  };
  const deletePlaylist = async (playlist) => {
    const res = await axios.delete(`/api/user/playlists/${playlist._id}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    setPlaylist(res.data.playlists);
    toast.error("Playlist deleted", { theme: "colored", autoClose: 2000 });
  };
  const addToSinglePlaylist = async (playlistItem, video, setPlaylist) => {
    const res = await axios.post(
      `/api/user/playlists/${playlistItem}`,
      {
        video,
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    const updatedPlayList = playlist.map((playlist) => {
      if (playlist._id === res.data.playlist._id) {
        return { ...res.data.playlist };
      }
      return playlist;
    });
    setPlaylist(updatedPlayList);
    toast.success("Video is successfully added", {
      theme: "colored",
      autoClose: 2000,
    });
  };
  const deleteSinglePlaylist = async (playlistId, videoId, setPlaylist) => {
    const res = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    const updatedPlayList = playlist.map((playlist) => {
      if (playlist._id === res.data.playlist._id) {
        return { ...res.data.playlist };
      }
      return playlist;
    });
    setPlaylist(updatedPlayList);
    toast.error("Video is removed from playlist", {
      theme: "colored",
      autoClose: 2000,
    });
  };

  return (
    <PlaylistContext.Provider
      value={{
        addPlaylist,
        playlist,
        playlistModal,
        createPlaylist,
        setShowPlaylist,
        setPlaylistModal,
        setPlaylist,
        deletePlaylist,
        deleteSinglePlaylist,
        addToSinglePlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};
export { usePlaylist, PlaylistContextProvider };
