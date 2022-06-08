import { useCategory } from "../../Context/CategoryContext";
import { useFilter } from "../../Context/FilterContext";
import { useVideo } from "../../Context/VideoContext";
import { Filter } from "../../Reducer/Filter";
import "./Explore.css";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useIconContainer } from "../../Context/IconContainerContext";
import { IconContainer } from "../../Components/Icons/IconContainer";

export const Explore = () => {
  const { categories } = useCategory();
  const { videos } = useVideo();
  const { state, dispatch } = useFilter();
  const { show, setShow, setIconContainer, iconContainer } = useIconContainer();
  const sortedVideos = Filter(videos, state);
  return (
    <div className='explore-container'>
      <div className='category-container'>
        <button
          className={
            state.active === "all" ? "btn-explore active" : " btn-explore"
          }
          onClick={() =>
            dispatch({
              type: "ALL",
            })
          }
        >
          All
        </button>
        {categories.map((item) => (
          <button
            className={
              item.categoryName === state.active
                ? "btn-explore active"
                : "btn-explore"
            }
            onClick={() => {
              dispatch({
                type: "FILTER_BY_CATEGORY",
                payload: item.categoryName,
              });
            }}
          >
            {item.categoryName}
          </button>
        ))}
      </div>
      <div className='videos-container'>
        {sortedVideos.map((video) => (
          <div class='card' key={video._id}>
            <>
              <img src={video.thumbnail} class='img-lg' />
              <div class='card-body'>
                <div className='card-content'>
                  <span className='card-title'>{video.title}</span>
                  {show === true ? (
                    <i
                      class='bi bi-three-dots-vertical'
                      onClick={() => {
                        setIconContainer(null);
                        setShow(!show);
                      }}
                    ></i>
                  ) : (
                    <i
                      class='bi bi-three-dots-vertical'
                      onClick={(_id) => {
                        setIconContainer(video._id);
                        setShow(!show);
                      }}
                    ></i>
                  )}
                  {iconContainer === video._id && (
                    <IconContainer video={video} />
                  )}
                </div>
                <div class='card-description'>{video.creator}</div>
                <div className='card-bottom'>
                  <span>{video.views} views</span>
                  <span>{video.date}</span>
                </div>
              </div>
              <Link to={`/video/${video._id}`}>
                <button className='btn btn-outline-primary width-100'>
                  Watch Now
                </button>
              </Link>
            </>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};
