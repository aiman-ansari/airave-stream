import axios from "axios";
import { createContext, useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const WatchLaterContext = createContext();
const useWatchLater = () => useContext(WatchLaterContext);
const WatchLaterContextProvider = ({children}) =>{
    const [watchLater, setWatchLater] = useState([])

    useEffect(()=>{
        getWatchLater()
    },[])
    const getWatchLater = async()=>{
        const res = await axios.get('/api/user/watchlater',
        {
            headers:{
                authorization:localStorage.getItem("token")
            }
        }
        )
        setWatchLater(res.data.watchlater)
    }

    const addWatchLater = async(video)=>{
        const res = await axios.post('/api/user/watchlater',
            {
                video
            },
            {
            headers:{
                authorization:localStorage.getItem("token")
            }
        }
        )
        setWatchLater(res.data.watchlater)
    }
    const deleteWatchLater = async(video)=>{
        const res = await axios.delete(`/api/user/watchlater/${video._id}`,
            {
            headers:{
                authorization:localStorage.getItem("token")
            }
        }
        )
        setWatchLater(res.data.watchlater)
    }
    return(
        <WatchLaterContext.Provider value={{watchLater, addWatchLater, deleteWatchLater}}>
            {children}
        </WatchLaterContext.Provider>
    )
}

export { useWatchLater, WatchLaterContextProvider}