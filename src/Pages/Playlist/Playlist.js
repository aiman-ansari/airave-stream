import { usePlaylist } from '../../Context/PlaylistContext'
import './Playlist.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'
export const Playlist = () =>{
    const {isLogin} = useAuth()
    const navigate = useNavigate()
    const { playlist, deletePlaylist } = usePlaylist()
    
    return(
        <div className='playlist-container'>
            {isLogin ? 
                playlist.length>0 ? <>
                {
                    playlist.map((item) => 
                        <div className='playlist'>
                                                    <Link to={`/playlist/${item._id}`}>

                            {item.videos.length > 0 ? 
                            <img src={item.videos.map((video) =>video.thumbnail)}
                            className='playlist-image' />
                            :
                            <img src='https://img.freepik.com/free-photo/3d-cartoon-style-red-video-player-icon-with-controler-gray-background-3d-illustration-rendering_37129-2629.jpg?w=2000'
                            className='playlist-image' />
                        }
                            
                            </Link>
                            <div className='playlist-overlay'>
                                <div className='overlay'>
                                    <span>{item.videos.length}</span>
                                    <i className='bi bi-list-ul'></i>
                                </div>
                            </div>
                            <div className='playlist-bottom'>
                            <span>{item.title}</span>
                            <div className='delete'>
                                <i className='bi bi-trash' 
                                    onClick={() => deletePlaylist(item)}>
                                </i>
                            </div>
                            </div>
                        </div>
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