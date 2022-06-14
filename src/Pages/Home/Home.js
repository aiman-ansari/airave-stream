import { Category, VideoCard } from "../../Components";
import { useVideo } from "../../Context/VideoContext";
import "./Home.css";
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
                {video.isTrending && (
                  <>
                    <VideoCard video={video} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
