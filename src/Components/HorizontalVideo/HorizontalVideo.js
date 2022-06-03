import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useIconContainer } from '../../Context/IconContainerContext'
import { useLikes } from '../../Context/LikeContext'
import { usePlaylist } from '../../Context/PlaylistContext'
import { useWatchLater } from '../../Context/WatchLaterContext'
import { PlaylistContainer } from '../Playlist/PlaylistContainer'
import './HorizontalVideo.css'
export const HorizontalVideo = ({video, item}) =>{
    const {deleteLike, likes, addLike} = useLikes()
    const {deleteWatchLater, watchLater, addWatchLater} = useWatchLater()
    const {playlist, deleteSinglePlaylist}= usePlaylist()
    const {show1, setShow1} = useIconContainer()
    console.log("item", item)
    const removeFromLike = (item) =>{
        deleteLike(item)
        toast.error("Video is removed from liked videos")
    }
    const addToLike = (item) =>{
        addLike(item)
        toast.success("Video is added to liked videos")
    }
    const removeFromWatchlater = (item) =>{
        deleteWatchLater(item)
        toast.error("Video is removed from watchlist")
    }
    const addToWatchlater = (item) =>{
        addWatchLater(item)
        toast.success("Video is added to watchlist")
    }
    return(
        <div className="horizonatl-card">
            <button onClick={() => {
                deleteSinglePlaylist(item, video)
            }}>delete</button>
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
                        {likes.some((item) => item._id === video._id) ?
                            <i className='bi bi-hand-thumbs-up-fill' 
                                onClick={() => removeFromLike(video)}
                            >
                            </i>
                            :
                            <i className='bi bi-hand-thumbs-up' 
                                onClick={() => addToLike(video)}>
                            </i>
                        }
                        <span>Like</span>
                    </div>
                    <div onClick={() => {
                        setShow1(!show1)
                        }}>
                        <i class="bi bi-list-ul"></i>
                            <span>Save</span>
                            {show1 && <PlaylistContainer video={video}/>}  
                    </div>
                    <div>
                        {watchLater.some((item) => item._id === video._id) ?
                            <>
                                <i className='bi bi-clock-fill' 
                                    onClick={() => removeFromWatchlater(video)}>
                                </i>
                                <span>Remove Watch later</span>
                            </>
                            :
                            <>
                                <i className='bi bi-clock' 
                                    onClick={() => addToWatchlater(video)}>
                                </i>
                                <span>Watch later</span>
                            </>
                        }
                    </div>                             
                </div>
            </div>
        </div>
    )
}