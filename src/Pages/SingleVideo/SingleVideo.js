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
                      <li>
                        {isAuthenticated ? (
                          likes.some((video) => item._id === video._id) ? (
                            <i
                              className='bi bi-hand-thumbs-up-fill'
                              onClick={() => deleteLike(item)}
                            ></i>
                          ) : (
                            <i
                              className='bi bi-hand-thumbs-up'
                              onClick={() => addLike(item)}
                            ></i>
                          )
                        ) : (
                          <i
                            className='bi bi-hand-thumbs-up'
                            onClick={() => navigate("/login")}
                          ></i>
                        )}
                        <span>Like</span>
                      </li>
                      <li>
                        {isAuthenticated ? (
                          watchLater.some((video) => item._id === video._id) ? (
                            <>
                              <i
                                className='bi bi-clock-fill'
                                onClick={() => deleteWatchLater(item)}
                              ></i>
                              <span>Remove Watch later</span>
                            </>
                          ) : (
                            <>
                              <i
                                className='bi bi-clock'
                                onClick={() => addWatchLater(item)}
                              ></i>
                              <span>Watch later</span>
                            </>
                          )
                        ) : (
                          <>
                            <i
                              className='bi bi-clock'
                              onClick={() => navigate("/login")}
                            ></i>
                            <span>Watch later</span>
                          </>
                        )}
                      </li>
                      <li>
                        <i
                          className='bi bi-list-ul'
                          onClick={() => {
                            setPlaylistModal(true);
                          }}
                        ></i>
                        <span>Save</span>
                        {playlistModal && <PlaylistContainer video={item} />}
                      </li>
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
