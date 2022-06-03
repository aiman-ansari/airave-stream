import { useParams } from "react-router-dom"
import { HorizontalVideo } from "../../Components/HorizontalVideo/HorizontalVideo"
import { usePlaylist } from "../../Context/PlaylistContext"
import { useAuth } from "../../Context/AuthContext"
import './SinglePlaylist.css'

import { ToastContainer } from "react-toastify"
export const SinglePlaylist = () =>{
    const { _id } = useParams()
    const {playlist,deleteSinglePlaylist} =usePlaylist()
    const a = playlist.map((item) => {return item})
    console.log(a)
    const getSingleVideo = playlist.filter((item) => item._id===_id)
    console.log("get", getSingleVideo)
    const b = getSingleVideo.map((item) => item.videos.map((v) => console.log("videos", v.video)))
    console.log("b", b)
    const deletes = (item, video)=>{
        console.log(item._id,"item")
        console.log(video.video._id, "video")
    }

    return(
        <div className="like-container" >
            {getSingleVideo.map((item) =>item.videos.length >1 ) &&
            <>
                {getSingleVideo.map((item)=>
                <>
                    <div className='bold-text flex-align-center'>
                        <h4>{item.title}</h4>
                        <div className='bottom-border'></div>
                    </div>
                    {item.videos.length>0 ? 
                    <>
                        {item.videos.map((video) => 
                        <div className="new">
<>
                            <div className="hovering">
                                <i className="bi bi-plus" onClick={() =>{
                                    deletes(item, video)
                                    deleteSinglePlaylist(item,video.video)
                                }}></i>
                                
                                
                            </div>
                            <HorizontalVideo video={video.video} item={item}/>
                            </>
                        </div>
                        )}
                    </> :
                    <span>
                        There is no videos in this playlist
                    </span>}
                </>
                )}
            </>
        }
        <ToastContainer /> 
        </div>
    )
}