import axios from "axios";
import { createContext, useContext, useState, useEffect} from "react";
import { toast } from "react-toastify";


const LikeContext = createContext();
const useLikes = () => useContext(LikeContext)

const LikeContextProvider = ({children}) =>{
    const [likes, setLikes] = useState([])
    useEffect(()=>{
        getLike()
    },[])

    const getLike = async() =>{
        const res = await axios.get('/api/user/likes',{
            headers:{
                authorization:localStorage.getItem("token")
            }
        })
        setLikes(res.data.likes)
    }

    const addLike = async(video) =>{
        try{
            const res = await axios.post('/api/user/likes',
            {
                video,
            },
            {
                headers:{
                    authorization:localStorage.getItem("token")
                },
                
            })
            setLikes(res.data.likes)
        }
        catch(error){
            if(error.response.status===409){
                toast.error("The video is already in your liked videos")
            }
        }
    }

    const deleteLike = async(video) =>{
        try{
            const res = await axios.delete(`/api/user/likes/${video._id}`,
                {
                headers:{
                    authorization:localStorage.getItem("token")
                },
                
            })
            setLikes(res.data.likes)
        }
        catch(error){
            toast.error("something went wrong")
        }
    }
    return(
        <LikeContext.Provider value={{likes, addLike, deleteLike}}>
            {children}
        </LikeContext.Provider>
    )
}
export { useLikes, LikeContextProvider}