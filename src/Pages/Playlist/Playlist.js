import { usePlaylist } from '../../Context/PlaylistContext'
import './Playlist.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'
export const Playlist = () =>{
    const {isLogin} = useAuth()
    const navigate = useNavigate()
    const { playlist, deletePlaylist} = usePlaylist()
    const deleteFromPlaylist = (item) =>{
        deletePlaylist(item)
    }
    return(
        <div className='playlist-container'>
            {isLogin ? 
                playlist.length>0 ? <>
                {
                    playlist.map((item) => 
                        <Link to={`/playlist/${item._id}`}>
                        <div className='playlist'>
                            <div className='delete'>
                                <i className='bi bi-plus' 
                                    onClick={() => deleteFromPlaylist(item)}>
                                </i>
                            </div>
                            <span>{item.title}</span>
                        </div>
                        </Link>
                    )}
               </>
               :
               <> you don't have any playlist</>
           :
           <div className='flex-col'>
                <div className="bold-text flex-align-center">Login to see playlist</div>
                <button className='btn btn-outline-primary'
                    onClick={() => navigate('/login')}>
                    Login
                </button>
            </div>
        }
    </div>
    )
}