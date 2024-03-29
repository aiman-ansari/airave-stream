import "./IconContainer.css";
import { useWatchLater, useAuth, usePlaylist, useLikes } from "../../Context";
import { useNavigate } from "react-router-dom";
import { PlaylistContainer } from "../Playlist/PlaylistContainer";

export const IconContainer = ({ video, isLiked }) => {
  const { watchLater, addWatchLater, deleteWatchLater } = useWatchLater();
  const { playlistModal, setPlaylistModal } = usePlaylist();
  const { deleteLike, likes, addLike } = useLikes();
  const {
    state: { isAuthenticated },
  } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <div className='icon-container'>
        <ul>
          <li>
            {isLiked ? (
              isAuthenticated ? (
                likes.length > 0 &&
                likes.some((item) => item._id === video._id) ? (
                  <li onClick={() => deleteLike(video)}>
                    <i className='bi bi-heart-fill'></i>
                    <span>Remove liked video</span>
                  </li>
                ) : (
                  <li onClick={() => addLike(video)}>
                    <i className='bi bi-heart'></i>
                    <span>Like</span>
                  </li>
                )
              ) : (
                <li onClick={() => navigate("/login")}>
                  <i className='bi bi-heart'></i>
                  <span>Like</span>
                </li>
              )
            ) : (
              <></>
            )}
          </li>
          {isAuthenticated ? (
            <li onClick={() => setPlaylistModal(true)}>
              <i class='bi bi-list-ul'></i>
              <span>Save</span>
            </li>
          ) : (
            <li onClick={() => navigate("/login")}>
              <i class='bi bi-list-ul'></i>
              <span>Save</span>
            </li>
          )}
          {playlistModal && <PlaylistContainer video={video} />}
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
