import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { useAuth, useHistory } from "../../Context";
import { LoginInfo, EmptyContainer } from "../../Components";
import "../../Pages/Likes/Likes.css";
import "./History.css";
import "react-toastify/dist/ReactToastify.css";

export const History = () => {
  const {
    state: { isAuthenticated },
  } = useAuth();
  const { history, deleteHistory, deleteAllHistory } = useHistory();
  const getHistory = [...history].reverse();
  return (
    <div className='like-container'>
      {isAuthenticated ? (
        history.length > 0 ? (
          <>
            <div className='top-container'>
              <div className='bold-text'>
                <h4>History Videos</h4>
                <div className='bottom-border'></div>
              </div>
              <span onClick={() => deleteAllHistory()}>Clear all</span>
            </div>

            {getHistory.map((video) => (
              <div className='horizonatl-card'>
                <Link to={`/video/${video._id}`}>
                  <img
                    src={video.thumbnail}
                    className='img-sm'
                    alt={video.title}
                  />
                </Link>
                <div className='card-body'>
                  <div className='card-title'>{video.title}</div>
                  <div className='card-description'>{video.creator}</div>
                </div>
                <div className='icon-div'>
                  <i class='bi bi-x' onClick={() => deleteHistory(video)}></i>
                </div>
              </div>
            ))}
          </>
        ) : (
          <EmptyContainer msg={{ type: "watched any video yet" }} />
        )
      ) : (
        <LoginInfo msg={{ type: "history" }} />
      )}
      <ToastContainer />
    </div>
  );
};
