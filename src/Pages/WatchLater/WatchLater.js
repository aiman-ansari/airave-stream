import "../../Pages/Likes/Likes.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HorizontalVideo } from "../../Components/HorizontalVideo/HorizontalVideo";
import { useWatchLater } from "../../Context/WatchLaterContext";
import { useAuth } from "../../Context/AuthContext";
import {
  EmptyContainer,
  LoginInfo,
} from "../../Components/LoginInfo/LoginInfo";
export const WatchLater = () => {
  const { watchLater } = useWatchLater();
  const {
    state: { isAuthenticated },
  } = useAuth();
  return (
    <div className='like-container'>
      {isAuthenticated ? (
        watchLater.length > 0 ? (
          <>
            <div className='bold-text flex-align-center'>
              <h4>Watchlater Vedios</h4>
              <div className='bottom-border'></div>
            </div>
            {watchLater.map((video) => (
              <HorizontalVideo video={video} key={video._id} isLiked={true} />
            ))}
          </>
        ) : (
          <EmptyContainer msg={{ type: "added any videos to Watch Later" }} />
        )
      ) : (
        <LoginInfo msg={{ type: "watch later" }} />
      )}
      <ToastContainer />
    </div>
  );
};
