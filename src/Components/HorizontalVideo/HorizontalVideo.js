import { Link } from "react-router-dom";
import { useLikes } from "../../Context/LikeContext";
import { usePlaylist } from "../../Context/PlaylistContext";
import { useWatchLater } from "../../Context/WatchLaterContext";
import { PlaylistContainer } from "../Playlist/PlaylistContainer";
import "./HorizontalVideo.css";
export const HorizontalVideo = ({ video, item }) => {
  const { deleteLike, likes, addLike } = useLikes();
  const { deleteWatchLater, watchLater, addWatchLater } = useWatchLater();
  const { playlistModal, setPlaylistModal } = usePlaylist();
  return (
    <div className='horizonatl-card'>
      <Link to={`/video/${video._id}`}>
        <img src={video.thumbnail} className='img-sm' />
      </Link>
      <div className='card-body'>
        <div className='card-title'>{video.title}</div>
        <div className='card-description'>{video.creator}</div>
        <div className='icon-div'>
          <div>
            {likes.some((item) => item._id === video._id) ? (
              <i
                className='bi bi-hand-thumbs-up-fill'
                onClick={() => deleteLike(video)}
              ></i>
            ) : (
              <i
                className='bi bi-hand-thumbs-up'
                onClick={() => addLike(video)}
              ></i>
            )}
            <span>Like</span>
          </div>
          <div>
            <i
              className='bi bi-list-ul'
              onClick={() => {
                setPlaylistModal(true);
              }}
            ></i>

            {playlistModal && <PlaylistContainer video={video} />}
            <span>Save</span>
          </div>
          <div>
            {watchLater.some((item) => item._id === video._id) ? (
              <>
                <i
                  className='bi bi-clock-fill'
                  onClick={() => deleteWatchLater(video)}
                ></i>
                <span>Remove Watch later</span>
              </>
            ) : (
              <>
                <i
                  className='bi bi-clock'
                  onClick={() => addWatchLater(video)}
                ></i>
                <span>Watch later</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
