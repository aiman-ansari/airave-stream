import { ToastContainer } from "react-toastify";
import { HorizontalVideo, LoginInfo, EmptyContainer } from "../../Components";
import { useAuth, useLikes } from "../../Context";
import "react-toastify/dist/ReactToastify.css";
import "./Likes.css";

export const Likes = () => {
  const {
    state: { isAuthenticated },
  } = useAuth();
  const { likes } = useLikes();
  return (
    <div className='like-container'>
      {isAuthenticated ? (
        likes.length > 0 ? (
          <>
            <div className='bold-text flex-align-center'>
              <h4>Liked Videos</h4>
              <div className='bottom-border'></div>
            </div>
            {likes.map((video) => (
              <HorizontalVideo video={video} isLiked={true} />
            ))}
          </>
        ) : (
          <EmptyContainer msg={{ type: "liked any video yet" }} />
        )
      ) : (
        <LoginInfo msg={{ type: "like" }} />
      )}
      <ToastContainer />
    </div>
  );
};
