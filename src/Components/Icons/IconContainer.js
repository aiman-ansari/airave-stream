import './IconContainer.css'
import { useWatchLater } from '../../Context/WatchLaterContext'
import { useAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { usePlaylist } from '../../Context/PlaylistContext'
import { useIconContainer } from '../../Context/IconContainerContext'
import { PlaylistContainer } from '../Playlist/PlaylistContainer'

export const IconContainer = ({video}) =>{
    const { watchLater , addWatchLater, deleteWatchLater} = useWatchLater()
    const {show1, setShow1, setIconContainer1, iconContainer1} = useIconContainer()
    const {playlistModal, setPlaylistModal} = usePlaylist()
    const {isLogin} = useAuth()
    const navigate = useNavigate()
    const removeFromWatchlater = (item) =>{
        deleteWatchLater(item)
        toast.error("Video is removed from watchlist")
    }
    const addToWatchLater = (item) =>{
        addWatchLater(item)
        toast.success("Video is added to watchlist")
    }
    return(
        <>
            <div className='icon-container'>
                <ul>
                    <li>
                    {
                        // isLogin ?
                        <>
                        <i class="bi bi-list-ul"
                            onClick={() => {
                                setPlaylistModal(true)
                        }}>
                        </i>

                    {playlistModal && <PlaylistContainer video={video}/>}  
                        <span>Save</span>
                        </>
                        // :
                        // <>
                        // <i class="bi bi-list-ul"
                        //     onClick={() => {
                        //         navigate('/login')
                        // }}>
                        // </i>
                        // <span>Save</span>
                        // </>
}
                    </li>
                    {
                        isLogin ?
                        (watchLater.length>0 && watchLater.some((item) => item._id === video._id) ? 
                            <li onClick={() => removeFromWatchlater(video)}>
                                <i className='bi bi-clock-fill'></i>
                                <span>Remove Watch later</span>
                            </li>
                            :
                            <li onClick={() => addToWatchLater(video)}>
                                <i className='bi bi-clock'></i>
                                <span>Watch later</span>
                            </li>
                        )
                        :
                        <li onClick={() => navigate('/login')}>
                            <i className='bi bi-clock'></i>
                            <span>Watch later</span>
                        </li>
                        }                    
                </ul>
            </div> 
        </>
    )
}