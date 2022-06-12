import { Category } from "../../Components/Category/Category";
import { useVideo } from "../../Context/VideoContext";
import { Link } from "react-router-dom";
import "./Home.css";
import { VideoCard } from "../../Components/VideoCard/VideoCard";
export const Home = () => {
  const { videos } = useVideo();
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
                {/* <Link to={`/video/${video._id}`}> */}
                {video.isTrending && (
                  <>
                    <VideoCard video={video} />
                  </>
                )}
                {/* </Link> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
