import { Link } from "react-router-dom";
import { IconContainer } from "../Icons/IconContainer";
import "./HorizontalVideo.css";
export const HorizontalVideo = ({ video, isLiked }) => {
  return (
    <div className='horizonatl-card'>
      <Link to={`/video/${video._id}`}>
        <img src={video.thumbnail} className='img-sm' />
      </Link>
      <div className='card-body'>
        <div className='card-content'>
          <span className='card-title'>{video.title}</span>
          <div className='card-actions'>
            <i className='bi bi-three-dots-vertical'></i>

            <div className='icons-container'>
              <IconContainer video={video} isLiked={isLiked} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
