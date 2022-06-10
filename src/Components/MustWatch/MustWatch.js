import { useParams, useNavigate, Link } from "react-router-dom";
import { useVideo } from "../../Context/VideoContext";

export const MustWatch = ({ getSingleVideo }) => {
  const { _id } = useParams();
  const { videos } = useVideo();
  const navigate = useNavigate();
  return (
    <>
      {getSingleVideo.length > 0 &&
        videos
          .filter(
            (item) => item.categoryName === getSingleVideo[0].categoryName
          )
          .filter((item) => item._id !== _id)
          .map((video) => (
            <div class='card' key={video._id}>
              <img
                src={video.thumbnail}
                class='img-lg'
                alt={video.title}
                onClick={() => {
                  navigate(`/video/${video._id}`);
                }}
              />
              <div class='card-body'>
                <div className='card-content'>
                  <span className='card-title'>{video.title}</span>
                </div>
                <div class='card-description'>{video.creator}</div>
                <div className='card-bottom'>
                  <span>{video.views} views</span>
                  <span>{video.date}</span>
                </div>
              </div>
              <button
                className='btn btn-outline-primary width-100'
                onClick={() => navigate(`/video/${video._id}`)}
              >
                Watch Now
              </button>
            </div>
          ))}
    </>
  );
};
