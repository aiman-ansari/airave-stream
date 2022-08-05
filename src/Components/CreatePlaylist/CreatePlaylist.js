import { useState } from "react";
import { usePlaylist } from "../../Context/PlaylistContext";
export const CreatePlaylist = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addPlaylist, setShowPlaylist } = usePlaylist();
  const [error, setError] = useState("");
  const addToPlaylist = () => {
    if (title === "") {
      setError("This field cannot be empty");
    } else {
      addPlaylist(title, description);
      setError("");
      setDescription("");
      setTitle("");
    }
  };
  return (
    <div class='playlist-modal'>
      <div class='modal-body'>
        <div className='modal-header'>
          <span className=''>Create new Playlist</span>
          <span>
            <i className='bi bi-x' onClick={() => setShowPlaylist(false)}></i>
          </span>
        </div>

        <input
          type='text'
          className='title'
          placeholder='Enter title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          placeholder='Enter description'
          className='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <div>
          <div className='text-danger'>{error}</div>
        </div>
        <div class='modal-action'>
          <button
            className='btn btn-outline-primary'
            onClick={() => addToPlaylist()}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
