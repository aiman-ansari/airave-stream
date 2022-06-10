import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../Context/AuthContext";
import "./Profile.css";
export const Profile = () => {
  const { isLogin, setIsLogin } = useAuth();
  const user = localStorage.getItem("user");
  return (
    <div className='profile-container'>
      <span className='text-gray'>
        Welcome
        {isLogin ? <span>{" " + user}</span> : ""}
      </span>
      <span className='text-small'>To access and manage playlist</span>
      {isLogin ? (
        <button
          className='btn btn-outline-primary width-100 mt-1'
          onClick={() => {
            setIsLogin(false);
            toast.info("Logging out...", {
              theme: "colored",
              autoClose: 2000,
            });
          }}
        >
          Logout
        </button>
      ) : (
        <Link to='/login'>
          <button className='btn btn-outline-primary width-100 mt-1'>
            Login / Signup
          </button>
        </Link>
      )}
    </div>
  );
};
