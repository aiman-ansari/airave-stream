import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const PlaylistContext = createContext()
const usePlaylist = () => useContext(PlaylistContext)
const PlaylistContextProvider = ({children}) =>{
    const [playlist, setPlaylist] = useState([])
    useEffect(()=>{
        getPlaylist()
    },[])
    
    
    const getPlaylist = async() =>{
        var res = await axios.get('/api/user/playlists',
        {
            headers:{
                authorization:localStorage.getItem("token")
            }
        })
        setPlaylist(res.data.playlists)
    }
    const addPlaylist = async(title, description) =>{
        const playlist = {title, description}
        const res = await axios.post('/api/user/playlists',
        {
            playlist
        },
        {
            headers:{
                authorization:localStorage.getItem("token")
            }
        })
        
        setPlaylist(res.data.playlists)
    }
    const deletePlaylist = async(playlist) =>{
        const res = await axios.delete(`/api/user/playlists/${playlist._id}`,
        {
            headers:{
                authorization:localStorage.getItem("token")
            }
        })
        console.log("deleted", res.data.playlists)
        setPlaylist(res.data.playlists)
    }
    const addToSinglePlaylist = async(playlistItem, video) =>{
        const res = await axios.post(`/api/user/playlists/${playlistItem._id}`,
        {
            video
        }
     ,
     {
      headers: { 
          authorization: localStorage.getItem("token")
        }
    })
        const updatedPlayList = playlist.map((playlist) => {
            if (playlist._id === res.data.playlist._id) {
                return { ...res.data.playlist };
            }
            return playlist;
        });
        setPlaylist(updatedPlayList);
}
    const deleteSinglePlaylist = async(playlistItem, video) =>{
        const res = await axios.delete(`/api/user/playlists/${playlistItem._id}/${video._id}`,
        {
            headers:{
                authorization:localStorage.getItem("token")
            }
        })
        const updatedPlayList = playlist.map((playlist) => {
            if (playlist._id === res.data.playlist._id) {
                return { ...res.data.playlist };
            }
            return playlist;
          });
        setPlaylist(updatedPlayList)
       
    }

   
    return(
        <PlaylistContext.Provider value={{addPlaylist, playlist, deletePlaylist, deleteSinglePlaylist,addToSinglePlaylist}}>
            {children}
        </PlaylistContext.Provider>
    )
}
export { usePlaylist, PlaylistContextProvider}