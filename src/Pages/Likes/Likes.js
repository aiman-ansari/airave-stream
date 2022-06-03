import './Likes.css'
import {ToastContainer} from  'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useLikes } from '../../Context/LikeContext'
import { Link} from 'react-router-dom'
import { HorizontalVideo }from '../../Components/HorizontalVideo/HorizontalVideo'
export const Likes = () =>{
    const {likes, deleteLike} = useLikes()
    return(
        <div className="like-container" >
            
            {likes.length>0 ? 
            <>
                <div className='bold-text'>
                    <h4>Liked Vedios</h4>
                    <div className='bottom-border'></div>
                </div> 
                {likes.map((video) => 
                    <HorizontalVideo video={video}/>
                )}
                </>
                :
                <div className="bold-text">No liked videos</div>
            } 
            <ToastContainer /> 
        </div>
    )
}