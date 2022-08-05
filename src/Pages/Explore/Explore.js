import { Filter } from "../../Reducer/Filter";
import { useCategory, useFilter, useVideo } from "../../Context/index";
import { ToastContainer } from "react-toastify";
import { VideoCard } from "../../Components/VideoCard/VideoCard";
import "./Explore.css";

export const Explore = () => {
  const { categories } = useCategory();
  const { videos } = useVideo();
  const { state, dispatch } = useFilter();
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
      <div className='videos-div'>
        {sortedVideos.length > 0 ? (
          sortedVideos.map((video) => <VideoCard video={video} />)
        ) : (
          <h5 className='text-secondary'>OOPS!! No Video found</h5>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};
