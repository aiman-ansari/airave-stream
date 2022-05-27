import { useParams } from 'react-router-dom'
import { useVideo } from '../../Context/VideoContext'
import './SingleVideo.css'
import { MustWatch, Single } from '../../Components/MustWatch/MustWatch'
export const Singlevideo = () =>{
    const { videos} = useVideo()
    const { _id } = useParams()
    const getSingleVideo = videos.filter((item) => item._id===_id)
    return(
        <div className="video-container">
            <div>
                {getSingleVideo.map((item) => (
                    <>
                     <iframe 
                        className='video'
                        src={item.src}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                    <div className='flex-col'>
                        <div className='container-bottom'>
                            <div className='video-title'>
                                {item.title}
                            </div>
                            <div className='conatiner-actions'>
                                <ul>
                                    <li>
                                        <i className='bi bi-heart'></i>
                                        <span>Like</span>
                                    </li>
                                    <li>
                                        <i className='bi bi-clock'></i>
                                        <span>Watch Later</span>
                                    </li>
                                    <li>
                                        <i className='bi bi-list'></i>
                                        <span>Save</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='views'>
                            <h6>{item.views} views</h6>
                            <h6>{item.date}</h6>
                        </div>
                        <div className='horizontal-line'></div>
                        </div>
                    </>
                ))}
            <div className='container'>
                <div className='bold-text'>
                        <h4>Must Watch</h4>
                        <div className='bottom-border'></div>
                </div>
                <div className='videos-div'>
                    <MustWatch getSingleVideo={getSingleVideo} />
                </div>
            </div>
        </div>
    </div>
    )
}