import { useState } from "react"
import { usePlaylist } from "../../Context/PlaylistContext"
import './PlaylistContainer.css'
export const PlaylistContainer = ({video}) =>{
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const { playlist, addPlaylist, addToSinglePlaylist,setPlaylist, playlistModal,deleteSinglePlaylist, setPlaylistModal,} = usePlaylist()
    const [ error, setError] = useState('')
    const addToPlaylist = () =>{
        if(title===''){
            setError('This field cannot be empty')
        }
        else{
            addPlaylist(title, description)
            setError('')
            setDescription('')
            setTitle('')
        }
        
    }
    console.log(playlistModal)
    return(
        <div class="playlist-modal">
            <div class="modal-body">
                <div className="modal-header">
                    {playlist.length>0 ?  
                        <span className="mb-1">save to Playlist</span>
                    :
                    <span className="mb-1">Create new Playlist</span>
                    }
                    <span>
                        <i className="bi bi-x" onClick={() => setPlaylistModal(false)}></i>
                    </span>
                </div>
                <div className="playlist-title">
                    {playlist&&
                        playlist.map((item) => 
                            <div className="playlist-content" key={item._id}>
                                {item.videos.some((item) => item.id===video.id) 
                                ? 
                                <input 
                                    className="checkbox-input"
                                    type="checkbox"
                                    checked={item.videos.some((item) => item.id===video.id) ? true : false}
                                    onChange={() => {
                                        deleteSinglePlaylist(item._id, video._id, setPlaylist)
                                    }}/>
                                :
                                <input 
                                    className="checkbox-input"
                                    type="checkbox"    
                                    checked={item.videos.some((item) => item.id===video.id) ? true : false}
                                    onChange={() =>{
                                        addToSinglePlaylist( item._id, video, setPlaylist)
                                    }}/>
                                }
                                <span>{item.title}</span>
                            </div>
                        )
                    }
                </div>
            <input 
                type="text"
                className="title"
                placeholder="Enter title"
                value={title}
                onChange={(e) =>setTitle(e.target.value)}>
            </input>
            <input 
                placeholder="Enter description"
                className="description"
                value={description}
                onChange={(e) =>setDescription(e.target.value)}>
            </input>
            <div>
            <div className="text-danger">{error}</div>
            </div>
            <div class="modal-action">
                <button className="btn btn-outline-primary" 
                    onClick={() =>
                    addToPlaylist()}>
                    Create
                </button>
            </div>
            
        </div>
    </div>
    )
}