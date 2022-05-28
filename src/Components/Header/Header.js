import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'
export const Header = ({open, setOpen}) =>{
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
                    <Link to="login">
                    <button className='btn-small btn-primary '>Login</button>
                    </Link>
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