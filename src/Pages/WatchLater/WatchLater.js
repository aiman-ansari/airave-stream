import '../../Pages/Likes/Likes.css'
import {ToastContainer} from  'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { HorizontalVideo }from '../../Components/HorizontalVideo/HorizontalVideo'
import { useWatchLater } from '../../Context/WatchLaterContext';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
export const WatchLater = () =>{
    const {watchLater} = useWatchLater()
    const { isLogin} = useAuth()
    const navigate = useNavigate()
    return(
        <div className="like-container" >
            {isLogin ? 
                (watchLater.length>0 ? 
                    <>
                        <div className='bold-text flex-align-center'>
                            <h4>Watchlater Vedios</h4>
                            <div className='bottom-border'></div>
                        </div> 
                        {watchLater.map((video) => 
                            <HorizontalVideo video={video}/>
                        )}
                    </>
                    :
                    <div className="bold-text">No watch later videos</div>
                )
                :
                <>
                    <div className="bold-text">Login to see watch later videos</div>
                    <button className='btn btn-outline-primary'
                    onClick={() => navigate('/login')}>Login</button>
                </>
                } 
            <ToastContainer /> 
        </div>
    )
}