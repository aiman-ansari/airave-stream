import { useCategory } from "../../Context/CategoryContext"
import { useFilter } from "../../Context/FilterContext"
import { useVideo } from "../../Context/VideoContext"
import {Filter} from '../../Reducer/Filter'
import './Explore.css'
import { useState } from "react"
import { Link } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { useIconContainer } from "../../Context/IconContainerContext"
import { IconContainer } from "../../Components/Icons/IconContainer"

export const Explore = () =>{
    const [isActive, setIsActive] = useState('All')
    const { categories} = useCategory()
    const { videos} = useVideo()
    const { state, dispatch} = useFilter()
    const {show, setShow, setIconContainer, iconContainer} = useIconContainer()
   
    const handleButton = () =>{
        setIsActive('All')
        dispatch({
            type:"ALL"
        })
    }
   const sorted = Filter(videos, state)
  
    return(
        <div className="m-2">
            <div className="category-container">
                <button 
                    className={isActive==="All" ? "btn-explore active" : " btn-explore"} 
                    onClick={() => handleButton()}>
                    All
                </button>
                {categories.map((item) => 
                    <button 
                        className={item.categoryName===isActive ? "btn-explore active" : "btn-explore"}
                        onClick={()=>    {
                            dispatch({
                                type:"FILTER_BY_CATEGORY",
                                payload:item.categoryName
                            })
                            setIsActive(item.categoryName)
                    }}>
                    {item.categoryName}
                    </button>
                )}
            </div>
            <div className="videos-container">
                {sorted.map((video)=> 
                    <div class="card">
                        <>
                            <img src={video.thumbnail} class="img-lg"/>
                                <div class="card-body">
                                    <div className='card-content'>
                                        <span className="card-title">{video.title}</span>
                                        {show=== true ? 
                                            <i class="bi bi-three-dots-vertical"
                                                onClick={() => {
                                                     setIconContainer(null)
                                                     setShow(!show)
                                                }}>
                                            </i>
                                            :
                                            <i class="bi bi-three-dots-vertical"
                                                onClick={(_id) => {
                                                    setIconContainer(video._id)
                                                    setShow(!show)
                                                }}>
                                            </i>
                                        }
                                        {iconContainer===video._id && <IconContainer video={video}/>   }  
                                    </div>
                                    <div class="card-description">
                                        {video.creator}
                                    </div>
                                    <div className='card-bottom'>
                                        <span>{video.views} views</span>
                                        <span>{video.date}</span>
                                    </div>
                                </div>
                                <Link to={`/video/${video._id}`}>
                                <button className="btn btn-outline-primary width-100">
                                    Watch Now
                                </button>
                                </Link>
                        </>
                    </div>  
                )}
            </div>
            <ToastContainer />
        </div>
    )
}