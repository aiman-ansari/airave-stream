import { useNavigate, useParams } from "react-router-dom";
import { HorizontalVideo } from "../../Components/HorizontalVideo/HorizontalVideo";
import { usePlaylist } from "../../Context/PlaylistContext";
import { ToastContainer } from "react-toastify";
import "./SinglePlaylist.css";

export const SinglePlaylist = () => {
  const { _id } = useParams();
  const { playlist, deleteSinglePlaylist, setPlaylist } = usePlaylist();
  const navigate = useNavigate();
  const getSingleVideo = playlist.filter((item) => item._id === _id);

  return (
    <div className='like-container'>
      {getSingleVideo.map((item) => item.videos.length > 1) && (
        <>
          {getSingleVideo.map((item) => (
            <>
              <div className='bold-text flex-align-center' key={item._id}>
                <h4>{item.title}</h4>
              </div>
              {item.videos.length > 0 ? (
                <>
                  <div className='text-gray'>
                    Total Videos: {item.videos.length}
                  </div>
                  {item.videos.map((video) => (
                    <div className='new' key={video._id}>
                      <>
                        <div className='hovering'>
                          <i
                            className='bi bi-trash'
                            onClick={() =>
                              deleteSinglePlaylist(
                                item._id,
                                video._id,
                                setPlaylist
                              )
                            }
                          ></i>
                        </div>
                        <HorizontalVideo
                          video={video}
                          item={item}
                          isLiked={true}
                        />
                      </>
                    </div>
                  ))}
                </>
              ) : (
                <div className='empty-container'>
                  <div>There is no videos in this playlist</div>
                  <button
                    className='btn btn-outline-primary'
                    onClick={() => navigate("/video")}
                  >
                    Add To playlist
                  </button>
                </div>
              )}
            </>
          ))}
        </>
      )}
      <ToastContainer />
    </div>
  );
};
