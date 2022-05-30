import './Likes.css'
import {ToastContainer} from  'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useLikes } from '../../Context/LikeContext'
import { useNavigate} from 'react-router-dom'
import { HorizontalVideo }from '../../Components/HorizontalVideo/HorizontalVideo'
import { useAuth } from '../../Context/AuthContext';
export const Likes = () =>{
    const {isLogin} = useAuth()
    const {likes} = useLikes()
    const navigate = useNavigate()
    return(
        <div className="like-container" >
            
            {isLogin ? 
                (likes.length>0 ? 
                    <>
                        <div className='bold-text flex-align-center'>
                            <h4>Liked Vedios</h4>
                            <div className='bottom-border'></div>
                        </div> 
                        {likes.map((video) => 
                            <HorizontalVideo video={video}/>
                        )}
                    </>
                    :
                    <div className="bold-text">No liked videos</div>
                )
                :
                <>
                    <div className="bold-text">Login to see liked videos</div>
                    <button className='btn btn-outline-primary'
                    onClick={() => navigate('/login')}>Login</button>
                </>
                } 
            <ToastContainer /> 
        </div>
    )
}