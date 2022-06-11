import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { Profile } from "../Profile/Profile";
import "./Header.css";
import { useFilter } from "../../Context/FilterContext";

export const Header = () => {
  const {
    state: { isAuthenticated, user },
  } = useAuth();
  const { state, dispatch } = useFilter();

  return (
    <>
      <nav>
        <ul>
          <Link to='/'>
            <li className='nav-text mr-2 text-accent'>Airave Stream</li>
          </Link>
        </ul>
        <div>
          <Link to='/video'>
            <input
              type='text'
              placeholder='Search here'
              className='search-input'
              value={state.search}
              onChange={(e) => {
                dispatch({
                  type: "SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </Link>
        </div>

        <div>
          <div className='profile'>
            {isAuthenticated ? (
              <div className='avatar avatar-xsm avatar-green flex-align-center'>
                {user.split(" ").map((item) => item.charAt(0))}
              </div>
            ) : (
              <img
                className='avatar avatar-xsm'
                src='https://avatarfiles.alphacoders.com/715/71560.jpg'
                alt='profile pic'
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
