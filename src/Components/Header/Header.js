import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { Profile } from "../Profile/Profile";
import "./Header.css";

export const Header = () => {
  const { isLogin } = useAuth();
  const user = localStorage.getItem("user");
  const getFirstChar = user.split(" ");
  const firstChar = getFirstChar.map((item) => item.charAt(0));
  return (
    <>
      <nav>
        <ul>
          <Link to='/'>
            <li className='nav-text mr-2 text-accent'>Airave Stream</li>
          </Link>
        </ul>
        <div>
          <input
            type='text'
            placeholder='Search here '
            className='search-input'
          />
        </div>

        <div>
          <div className='profile'>
            {isLogin ? (
              <div className='avatar avatar-xsm avatar-green flex-align-center'>
                {firstChar}
              </div>
            ) : (
              <img
                className='avatar avatar-xsm'
                src='https://avatarfiles.alphacoders.com/715/71560.jpg'
              />
            )}
            <div className='profile-content'>
              <Profile />
            </div>
          </div>
        </div>
      </nav>
      <div className='sidebar'>
        <ul>
          <Link to='/'>
            <li>
              <i className='bi bi-house-fill'></i>
              <span>Home</span>
            </li>
          </Link>
          <Link to='video'>
            <li>
              <i className='bi bi-globe'></i>

              <span>Explore</span>
            </li>
          </Link>
          <Link to='playlist'>
            <li>
              <i className='bi bi-list-ul'></i>

              <span>PlayList</span>
            </li>
          </Link>
          <Link to='likes'>
            <li>
              <i className='bi bi-heart'></i>

              <span>Likes</span>
            </li>
          </Link>
          <Link to='watchlater'>
            <li>
              <i className='bi bi-clock'></i>

              <span>Watch later</span>
            </li>
          </Link>
          <Link to='history'>
            <li>
              <i className='bi bi-arrow-counterclockwise'></i>
              <span>History</span>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};
