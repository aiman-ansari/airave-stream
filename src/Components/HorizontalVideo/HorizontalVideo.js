import { Link } from 'react-router-dom'
import { useLikes } from '../../Context/LikeContext'
import './HorizontalVideo.css'
export const HorizontalVideo = ({video}) =>{
    const {deleteLike} = useLikes()
    return(
        <div className="horizonatl-card">
                    <Link to={`/video/${video._id}`}>
                        <img src={video.thumbnail} className="img-sm"/>
                    </Link>
                        <div className="card-body">
                            <div className="card-title">
                                {video.title}
                            </div>
                            <div className="card-description">
                            {video.creator}
                            </div>
                            <div className='icon-div'>
                                <div>
                                    <i className="bi bi-hand-thumbs-up-fill"
                                        onClick={() => deleteLike(video)}></i>
                                    <span>Like</span>
                                </div>
                                <div>
                                    <i className="bi bi-list-ul"></i>
                                    <span>Save</span>
                                </div>
                                <div>
                                    <i className="bi bi-clock"></i>
                                    <span>Watch Later</span>
                                </div>                             
                            </div>
                        </div>
                </div>
    )
}