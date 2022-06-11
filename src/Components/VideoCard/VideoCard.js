import { Link } from "react-router-dom";
import { useIconContainer } from "../../Context/IconContainerContext";
import { IconContainer } from "../Icons/IconContainer";
export const VideoCard = ({ video }) => {
  const { show, setShow, setIconContainer, iconContainer } = useIconContainer();

  return (
    <div class='card' key={video._id}>
      <Link to={`/video/${video._id}`}>
        <img src={video.thumbnail} class='img-lg' />
      </Link>
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
          {iconContainer === video._id && <IconContainer video={video} />}
        </div>
        <div class='card-description'>{video.creator}</div>
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
