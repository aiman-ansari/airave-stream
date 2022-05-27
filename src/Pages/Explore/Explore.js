import { useCategory } from "../../Context/CategoryContext"
import { useFilter } from "../../Context/FilterContext"
import { useVideo } from "../../Context/VideoContext"
import {Filter} from '../../Reducer/Filter'
import './Explore.css'
import { useState } from "react"
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
            <div className="video-container">
                {sorted.map((video)=> 
                    <div class="card">
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
                                <button className='btn btn-outline-primary width-100'>
                                    Watch Now
                                </button>
                        </>
                    </div>  
                )}
            </div>
        </div>
    )
}