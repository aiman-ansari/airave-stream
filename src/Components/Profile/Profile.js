import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../../Context/AuthContext";
import "./Profile.css";
export const Profile = () => {
  const {
    state: { isAuthenticated, user },
    dispatch,
  } = useAuth();
  const logout = () => {
    localStorage.clear();
    dispatch({
      type: "logout",
    });

    toast.info("logout...", { theme: "colored", autoClose: 2000 });
  };

  return (
    <div className='profile-container'>
      <span className='text-gray'>
        Welcome
        {user ? <span>{" " + user}</span> : ""}
      </span>
      {isAuthenticated ? (
        <button
          className='btn btn-outline-primary width-100 mt-1'
          onClick={() => logout()}
        >
          Logout
        </button>
      ) : (
        <>
          <span className='text-small'>Login to like and create playlist</span>

          <Link to='/login'>
            <button className='btn btn-outline-primary width-100 mt-1'>
              Login / Signup
            </button>
          </Link>
        </>
      )}
      <ToastContainer />
    </div>
  );
};
