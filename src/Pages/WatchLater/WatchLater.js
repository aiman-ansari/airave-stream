import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth, useWatchLater } from "../../Context";
import "../../Pages/Likes/Likes.css";
import { EmptyContainer, LoginInfo, HorizontalVideo } from "../../Components";
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
              <h4>Watchlater Videos</h4>
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
