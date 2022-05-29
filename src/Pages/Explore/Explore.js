import { useCategory } from "../../Context/CategoryContext"
import { useFilter } from "../../Context/FilterContext"
import { useVideo } from "../../Context/VideoContext"
import {Filter} from '../../Reducer/Filter'
import './Explore.css'
import { useState } from "react"
import { Link } from "react-router-dom"
import { ToastContainer } from "react-toastify"
export const Explore = () =>{
    const [isActive, setIsActive] = useState('All')
    const { categories} = useCategory()
    const { videos} = useVideo()
    const { state, dispatch} = useFilter()
   
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
                    <div class="card" key={video._id}>
                        <>
                            <img src={video.thumbnail} class="img-lg"/>
                                <div class="card-body">
                                    <div class="flex justify-space-between">
                                        <div class="card-title ">{video.title}</div>
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