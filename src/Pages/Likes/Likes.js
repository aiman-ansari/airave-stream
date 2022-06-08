import "./Likes.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLikes } from "../../Context/LikeContext";
import { HorizontalVideo } from "../../Components/HorizontalVideo/HorizontalVideo";
import { useAuth } from "../../Context/AuthContext";
import { LoginInfo } from "../../Components/LoginInfo/LoginInfo";
import { EmptyContainer } from "../../Components/LoginInfo/LoginInfo";
export const Likes = () => {
  const { isLogin } = useAuth();
  const { likes } = useLikes();
  return (
    <div className='like-container'>
      {isLogin ? (
        likes.length > 0 ? (
          <>
            <div className='bold-text flex-align-center'>
              <h4>Liked Vedios</h4>
              <div className='bottom-border'></div>
            </div>
            {likes.map((video) => (
              <HorizontalVideo video={video} />
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
