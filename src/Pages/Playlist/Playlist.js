import { usePlaylist } from "../../Context/PlaylistContext";
import "./Playlist.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { LoginInfo } from "../../Components/LoginInfo/LoginInfo";
import { EmptyContainer } from "../../Components/LoginInfo/LoginInfo";
import { CreatePlaylist } from "../../Components/CreatePlaylist/CreatePlaylist";
export const Playlist = () => {
  const {
    state: { isAuthenticated },
  } = useAuth();
  const { playlist, deletePlaylist, createPlaylist, setShowPlaylist } =
    usePlaylist();
  return (
    <div className='mt-2'>
      {isAuthenticated ? (
        playlist.length > 0 ? (
          <>
            <div className='playlist-top'>
              <div className='bold-text flex-align-center'>
                <h4>Playlist</h4>
                <div className='bottom-border'></div>
              </div>
              <button
                className='btn btn-primary'
                onClick={() => setShowPlaylist(true)}
              >
                Create
              </button>
            </div>
            {createPlaylist && <CreatePlaylist />}
            <div className='playlist-container'>
              {playlist.map((item) => (
                <div className='playlist' key={item._id}>
                  <Link to={`/playlist/${item._id}`}>
                    {item.videos.length > 0 ? (
                      <img
                        src={item.videos[0].thumbnail}
                        className='playlist-image'
                      />
                    ) : (
                      <img
                        src='https://img.freepik.com/free-photo/3d-cartoon-style-red-video-player-icon-with-controler-gray-background-3d-illustration-rendering_37129-2629.jpg?w=2000'
                        className='playlist-image'
                      />
                    )}
                  </Link>
                  <div className='playlist-overlay'>
                    <div className='overlay'>
                      <span>{item.videos.length}</span>
                      <i className='bi bi-list-ul'></i>
                    </div>
                  </div>
                  <div className='playlist-bottom'>
                    <span>{item.title}</span>
                    <div className='delete'>
                      <i
                        className='bi bi-trash'
                        onClick={() => deletePlaylist(item)}
                      ></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <EmptyContainer msg={{ type: "created a playlist" }} />
        )
      ) : (
        <LoginInfo msg={{ type: "playlist" }} />
      )}
    </div>
  );
};
