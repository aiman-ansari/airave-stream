import "./IconContainer.css";
import { useWatchLater } from "../../Context/WatchLaterContext";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { usePlaylist } from "../../Context/PlaylistContext";
import { PlaylistContainer } from "../Playlist/PlaylistContainer";

export const IconContainer = ({ video }) => {
  const { watchLater, addWatchLater, deleteWatchLater } = useWatchLater();
  const { playlistModal, setPlaylistModal } = usePlaylist();
  const {
    state: { isAuthenticated },
  } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <div className='icon-container'>
        <ul>
          <li>
            {isAuthenticated ? (
              <i
                class='bi bi-list-ul'
                onClick={() => setPlaylistModal(true)}
              ></i>
            ) : (
              <i class='bi bi-list-ul' onClick={() => navigate("/login")}></i>
            )}
            <span>Save</span>
            {playlistModal && <PlaylistContainer video={video} />}
          </li>
          {isAuthenticated ? (
            watchLater.length > 0 &&
            watchLater.some((item) => item._id === video._id) ? (
              <li onClick={() => deleteWatchLater(video)}>
                <i className='bi bi-clock-fill'></i>
                <span>Remove Watch later</span>
              </li>
            ) : (
              <li onClick={() => addWatchLater(video)}>
                <i className='bi bi-clock'></i>
                <span>Watch later</span>
              </li>
            )
          ) : (
            <li onClick={() => navigate("/login")}>
              <i className='bi bi-clock'></i>
              <span>Watch later</span>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};
