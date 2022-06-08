import { Link } from 'react-router-dom'
import './Header.css'
import { useAuth } from '../../Context/AuthContext'
import { Profile } from '../Profile/Profile'
export const Header = ({open, setOpen}) =>{
    const {isLogin, setIsLogin} = useAuth()
    const user = localStorage.getItem("user")
    const getFirstChar = user.split(' ')
    const firstChar= getFirstChar.map((item) => item.charAt(0))
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <i className=' bi bi-list menu' onClick={()=>setOpen(!open)}></i>
                    </li>
                    <Link to="/">
                        <li className='nav-text mr-2 text-accent'>Airave Stream</li>
                    </Link>
                </ul>
                <div>
                    <input 
                        type="text" 
                        placeholder='Search here ' 
                        className='search-input'/>
                </div>
                <div>
                        <div className='profile'>
                            {isLogin ? 
                                <div class="avatar avatar-xsm avatar-green flex-align-center">{firstChar}</div>   
                                :
                                <img class="avatar avatar-xsm" src="https://avatarfiles.alphacoders.com/715/71560.jpg"/>

                        }
                            <div className='profile-content'>
                                <Profile/>
                            </div>
                        </div>
                        
                    
                </div>
            </nav>
            <div className={open === true ? "sidebar sidebar-mobile" : "sidebar"}>
                <ul>
                    <Link to="/" >
                    <li>
                    <span><i className='bi bi-house-fill'></i></span>
                    <span>Home</span>
                    </li>
                    </Link>
                    <Link to="video">
                    <li>
                    <span><i className='bi bi-globe'></i></span>
                    <span>Explore</span>
                    </li>
                    </Link>
                    <Link to="playlist">
                    <li>
                    <span><i class="bi bi-list-ul"></i></span>
                    <span>PlayList</span>
                    </li>
                    </Link>
                    <Link to="likes">
                    <li>
                    <span><i className='bi bi-heart'></i></span>
                    <span>Likes</span>
                    </li>
                    </Link>
                    <Link to="watchlater">
                    <li>
                    <span><i className='bi bi-clock'></i></span>
                    <span>Watch later</span>
                    </li>
                    </Link>
                    <Link to="history">
                    <li>
                    <span><i class="bi bi-arrow-counterclockwise"></i></span>
                    <span>History</span>
                    </li>
                    </Link>
                </ul>
            </div> 
        </>
    )
}