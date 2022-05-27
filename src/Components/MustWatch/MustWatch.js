import {  useParams , useNavigate} from "react-router-dom"
import { useVideo } from "../../Context/VideoContext"

export const MustWatch = ({getSingleVideo}) =>{
    const { _id} = useParams()
    const { videos} = useVideo()
    const  navigate = useNavigate()
    const getVideos = videos.filter((item) => item.categoryName === getSingleVideo[0].categoryName)
    const getSimilarCategoryVideos = getVideos.filter((item) => item._id !==_id)
    return(
        <>
            { 
                getSimilarCategoryVideos.map((video)=> 
                    <div class="card">
                        <>
                            <img src={video.thumbnail} class="img-lg"/>
                                <div class="card-body">
                                    <div class="flex justify-space-between">
                                        <div class="card-title ">{video.title}</div>
                                    </div>
                                    <div class="card-description">{video.creator}</div>
                                        <div className='card-bottom'>
                                            <span>{video.views} views</span>
                                            <span>{video.date}</span>
                                        </div>
                                    </div>
                                <button 
                                    className='btn btn-outline-primary width-100'
                                    onClick={() => navigate(`/video/${video._id}`)
                                }>
                                    Watch Now
                                </button>
                        </>
                    </div>  
                    )
            }
        </> 
    )
}