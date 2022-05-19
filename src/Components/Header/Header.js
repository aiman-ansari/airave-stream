import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'
import { Sidebar } from '../Sidebar/Sidebar'
export const Header = () =>{
    const [navbar, setNavbar] = useState(false)
    const [open , setOpen] = useState(false)
    const handleNavbar = () =>{
        if(window.scrollY >= 3.5){
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }
    }
    // window.addEventListener("scroll", handleNavbar)
    return(
        <>
            {/* <div className='image'>
                <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/09/sunrise-wakatobi.jpg" />
            </div>
         */}
        {/* <nav className={navbar ? 'active' : ''}> */}
            <nav>
            <ul>
            
                {/* <li onClick={() => setOpen(!open)}>
                    <i className='bi bi-list'></i>
                </li> */}
                <Link to="/">
                    <li className='nav-text mr-2 text-accent'>Airave Stream</li>
                </Link>
                {/* <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="explore">
                    <li>Videos</li>
                </Link>
                <Link to="playlist">
                    <li>MyPlaylist</li>
                </Link> */}
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
        <div>
            {/* {open ? <Sidebar /> : ''} */}
        </div>
        </>
    )
}