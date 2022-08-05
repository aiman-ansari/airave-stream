import { useParams } from "react-router-dom";
import { useVideo } from "../../Context/VideoContext";
import { VideoCard } from "../VideoCard/VideoCard";
export const MustWatch = ({ getSingleVideo }) => {
  const { _id } = useParams();
  const { videos } = useVideo();

  return (
    <>
      {getSingleVideo.length > 0 &&
        videos
          .filter(
            (item) => item.categoryName === getSingleVideo[0].categoryName
          )
          .filter((item) => item._id !== _id)
          .map((video) => <VideoCard video={video} key={video._id} />)}
    </>
  );
};
