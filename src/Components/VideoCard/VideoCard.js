import { Link } from "react-router-dom";
import { IconContainer } from "../Icons/IconContainer";
import "./VideoCard.css";
export const VideoCard = ({ video }) => {
  return (
    <div className='card' key={video._id}>
      <Link to={`/video/${video._id}`}>
        <img src={video.thumbnail} className='img-lg' alt={video.title} />
      </Link>
      <div className='card-body'>
        <div className='card-content'>
          <span className='card-title'>{video.title}</span>
          <div className='card-actions'>
            <i className='bi bi-three-dots-vertical'></i>

            <div className='icons-container'>
              <IconContainer video={video} />
            </div>
          </div>
        </div>
        <div className='card-description'>{video.creator}</div>
        <div className='card-bottom'>
          <span>{video.views} views</span>
          <span>{video.date}</span>
        </div>
      </div>
      <Link to={`/video/${video._id}`}>
        <button className='btn btn-outline-primary width-100'>Watch Now</button>
      </Link>
    </div>
  );
};
