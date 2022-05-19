import { Link } from 'react-router-dom'
import './Sidebar.css'
export const Sidebar = () =>{
    return(
        <div className="sidebar">
            <ul>
                <Link to="/" className={({ isActive }) => (isActive ? 'li active' : '')}>
                <li>
                   <div><i className='bi bi-house-fill'></i></div>
                   <div>Home</div>
                </li>
                </Link>
                <Link to="explore">
                <li>
                   <span><i className='bi bi-house-fill'></i></span>
                   <span>Explore</span>
                </li>
                </Link>
                <Link to="/">
                <li>
                   <span><i className='bi bi-house-fill'></i></span>
                   <span>PlayList</span>
                </li>
                </Link>
                <Link to="/">
                <li>
                   <span><i className='bi bi-house-fill'></i></span>
                   <span>Likes</span>
                </li>
                </Link>
                <Link to="/">
                <li>
                   <span><i className='bi bi-house-fill'></i></span>
                   <span>Watch later</span>
                </li>
                </Link>
                <Link to="/">
                <li>
                   <span><i className='bi bi-house-fill'></i></span>
                   <span>History</span>
                </li>
                </Link>
            </ul>
        </div>

    )
}