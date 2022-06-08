import { Category } from "../../Components/Category/Category";
import { IconContainer } from "../../Components/Icons/IconContainer";
import { useIconContainer } from "../../Context/IconContainerContext";
import { useVideo } from "../../Context/VideoContext";
import { Link } from "react-router-dom";
import "./Home.css";
export const Home = () => {
  const { videos } = useVideo();
  const { show, setShow, setIconContainer, iconContainer } = useIconContainer();
  return (
    <>
      <div className='container'>
        <div className='image'>
          <iframe
            className='img'
            src='https://www.youtube.com/embed/CvrSoObs5jo?autoplay=1&mute=1'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
        <div className='bold-text'>
          <h4>Featured Category</h4>
          <div className='bottom-border'></div>
        </div>
        <Category />
        <div>
          <div className='bold-text'>
            <h4>Trending Vedios</h4>
            <div className='bottom-border'></div>
          </div>
          <div className='videos-div'>
            {videos.map((video) => (
              <div className='card' key={video._id}>
                <Link to={`/video/${video._id}`}>
                  {video.isTrending && (
                    <>
                      <img src={video.thumbnail} className='img-lg' />
                      <div className='card-body'>
                        <div className='flex justify-space-between'>
                          <div className='card-content'>
                            <span className='card-title'>{video.title}</span>
                            {show === true ? (
                              <i
                                className='bi bi-three-dots-vertical'
                                onClick={() => {
                                  setIconContainer(null);
                                  setShow(!show);
                                }}
                              ></i>
                            ) : (
                              <i
                                className='bi bi-three-dots-vertical'
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
                        </div>
                        <div className='card-description'>{video.creator}</div>
                        <div className='card-bottom'>
                          <span>{video.views} views</span>
                          <span>{video.date}</span>
                        </div>
                        <button className='btn btn-outline-primary width-100 mt-1'>
                          Watch Now
                        </button>
                      </div>
                    </>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
