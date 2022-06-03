import { useState } from "react"
import { useIconContainer } from "../../Context/IconContainerContext"
import { usePlaylist } from "../../Context/PlaylistContext"
import './PlaylistContainer.css'
export const PlaylistContainer = (video) =>{
    const { setShow1} = useIconContainer()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const { playlist, addPlaylist, addToSinglePlaylist, deleteSinglePlaylist} = usePlaylist()
    const addToPlaylist = () =>{
        if(title){
            addPlaylist(title, description)
        }
        setDescription('')
        setTitle('')
    }
    return(
        <div class="playlist-modal">
            <div class="modal-body">
                <div className="modal-header">
                    {playlist!==undefined && playlist.length>0 ?  
                        <span className="mb-1">save to Playlist</span>
                    :
                    <span className="mb-1">Create new Playlist</span>
                    }
                    <span><i className="bi bi-x" onClick={() => setShow1(false)}></i></span>
                </div>
                <div className="playlist-title">
                    {playlist.length>0 
                    ?
                        playlist.map((item) => 
                            <div className="playlist-content">
                                {item.videos.some((v) => v.video.id===video.video.id) 
                                ? 
                                <input 
                                    className="checkbox-input"
                                    type="checkbox"
                                    checked={item.videos.some((v) => v.video.id===video.video.id)===true ? true : false}
                                    onChange={() => {
                                        deleteSinglePlaylist(item, video)
                                    }}/>
                                :
                                <input 
                                    className="checkbox-input"
                                    type="checkbox"    
                                    checked={item.videos.some((v) => v.video.id===video.video.id)===true ? true : false}
                                    onChange={() =>{
                                        addToSinglePlaylist(item, video)
                                    }}/>
                                }
                                <span>{item.title}</span>
                            </div>
                        )
                    :
                    ''
                    }
                </div>
            <input 
                type="text"
                className="title"
                placeholder="Enter title"
                onChange={(e) =>setTitle(e.target.value)}>
            </input>
            <input 
                placeholder="Enter description"
                className="description"
                onChange={(e) =>setDescription(e.target.value)}>
            </input>
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