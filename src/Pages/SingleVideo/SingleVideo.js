import { useParams, useNavigate } from "react-router-dom";
import {
  useVideo,
  useAuth,
  useLikes,
  useWatchLater,
  useHistory,
  usePlaylist,
} from "../../Context";
import "./SingleVideo.css";
import { MustWatch, PlaylistContainer } from "../../Components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Singlevideo = () => {
  const { videos } = useVideo();
  const { _id } = useParams();
  const { addLike, likes, deleteLike } = useLikes();
  const { addWatchLater, watchLater, deleteWatchLater } = useWatchLater();
  const { addHistory } = useHistory();
  const { playlistModal, setPlaylistModal } = usePlaylist();
  const {
    state: { isAuthenticated },
  } = useAuth();
  const navigate = useNavigate();
  const getSingleVideo = videos.filter((item) => item._id === _id);

  return (
    <div className='video-container'>
      <div>
        {videos
          .filter((item) => item._id === _id)
          .map((item) => (
            <>
              {isAuthenticated ? (
                <iframe
                  className='video'
                  src={item.src}
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                  onLoad={() => addHistory(item)}
                ></iframe>
              ) : (
                <iframe
                  className='video'
                  src={item.src}
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                ></iframe>
              )}
              <div className='flex-col'>
                <div className='container-bottom'>
                  <div className='video-title'>{item.title}</div>
                  <div className='conatiner-actions'>
                    <ul>
                      {isAuthenticated ? (
                        likes.some((video) => item._id === video._id) ? (
                          <li onClick={() => deleteLike(item)}>
                            <i className='bi bi-hand-thumbs-up-fill'></i>
                            <span>Like</span>
                          </li>
                        ) : (
                          <li onClick={() => addLike(item)}>
                            <i className='bi bi-hand-thumbs-up'></i>
                            <span>Like</span>
                          </li>
                        )
                      ) : (
                        <li onClick={() => navigate("/login")}>
                          <i className='bi bi-hand-thumbs-up'></i>
                          <span>Like</span>
                        </li>
                      )}
                      {isAuthenticated ? (
                        watchLater.some((video) => item._id === video._id) ? (
                          <li onClick={() => deleteWatchLater(item)}>
                            <i className='bi bi-clock-fill'></i>
                            <span>Remove Watch later</span>
                          </li>
                        ) : (
                          <li onClick={() => addWatchLater(item)}>
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
                      {playlistModal && <PlaylistContainer video={item} />}
                    </ul>
                  </div>
                </div>
                <div className='views'>
                  <h6>{item.views} views</h6>
                  <h6>{item.date}</h6>
                </div>
                <div className='horizontal-line'></div>
              </div>
            </>
          ))}
        <div className='container'>
          <div className='bold-text'>
            <h4>Must Watch</h4>
            <div className='bottom-border'></div>
          </div>
          <div className='videos-div'>
            <MustWatch getSingleVideo={getSingleVideo} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
