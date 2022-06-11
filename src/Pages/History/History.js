import "../../Pages/Likes/Likes.css";
import "./History.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { useHistory } from "../../Context/HistoryContext";
import { LoginInfo } from "../../Components/LoginInfo/LoginInfo";
import { EmptyContainer } from "../../Components/LoginInfo/LoginInfo";
export const History = () => {
  const {
    state: { isAuthenticated },
  } = useAuth();
  const { history, deleteHistory, deleteAllHistory } = useHistory();
  return (
    <div className='like-container'>
      {isAuthenticated ? (
        history.length > 0 ? (
          <>
            <div className='top-container'>
              <div className='bold-text'>
                <h4>History Vedios</h4>
                <div className='bottom-border'></div>
              </div>
              <span onClick={() => deleteAllHistory()}>Clear all</span>
            </div>

            {history.map((video) => (
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
