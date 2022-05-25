import { Category } from '../../Components/Category/Category'
import { useVideo } from '../../Context/VideoContext'
import './Home.css'
export const Home = () =>{
    const { videos} = useVideo()
    return(
        <>
            <div className='image'>
                <iframe 
                className='img'
                src="https://www.youtube.com/embed/CvrSoObs5jo?autoplay=1&mute=1"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='container'>
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
                        {videos.map((video)=> 
                            <div class="card">
                                {video.isTrending &&
                                    <>
                                        <img src={video.thumbnail} class="img-lg"/>
                                        <div class="card-body">
                                            <div class="flex justify-space-between">
                                                <div class="card-title ">{video.title}</div>
                                            </div>
                                            <div class="card-description">{video.creator}</div>
                                            <div className='card-bottom'>
                                            <span class="">{video.views} views</span>
                                                <span>{video.date}</span>
                                            </div>
                                        </div>
                                        <button className='btn btn-outline-primary width-100'>
                                            Watch Now
                                        </button>
                                    </>
                                }
                            </div>  
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}