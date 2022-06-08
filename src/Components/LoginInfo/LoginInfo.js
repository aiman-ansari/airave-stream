import { useNavigate } from "react-router-dom";
import "./LoginInfo.css";
export const LoginInfo = ({ msg }) => {
  const navigate = useNavigate();
  const type = msg.type;
  return (
    <div className='info-container'>
      <div className='bold-text'>Login to see {type} videos</div>
      <button
        className='btn btn-outline-primary'
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
};
export const EmptyContainer = ({ msg }) => {
  const navigate = useNavigate();
  const message = msg.type;

  return (
    <div className='info-container'>
      <div className='bold-text'>You haven't {message}</div>
      <button className='btn ' onClick={() => navigate("/video")}>
        Start Adding Now
      </button>
    </div>
  );
};
