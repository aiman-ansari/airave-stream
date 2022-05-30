import '../../Pages/Likes/Likes.css'
import './History.css'
import {ToastContainer} from  'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link} from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext';
import { useHistory } from '../../Context/HistoryContext';
export const History = () =>{
    const {isLogin} = useAuth()
    const {history, deleteHistory, deleteAllHistory} = useHistory()
    const navigate = useNavigate()
    console.log(history)
    return(
        <div className="like-container" >
            
            {isLogin ? 
                (history.length>0 ? 
                    <>
                        <div className='top-container'>
                            <div className='bold-text'>
                                <h4>History Vedios</h4>
                                <div className='bottom-border'></div>
                            </div> 
                            <span onClick={() =>deleteAllHistory()}>Clear all</span>
                        </div>
                        
                        {history.map((video) => 
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
                                </div>
                                <div className='icon-div'>
                                    <i class="bi bi-x" 
                                    onClick={() => deleteHistory(video)}></i>
                                </div>
                                </div>
                        )}
                    </>
                    :
                    <div className="bold-text">No history available</div>
                )
                :
                <>
                    <div className="bold-text">Login to watch videos</div>
                    <button className='btn btn-outline-primary'
                    onClick={() => navigate('/login')}>Login</button>
                </>
                } 
            <ToastContainer /> 
        </div>
    )
}