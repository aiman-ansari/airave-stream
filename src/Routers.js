import { Route, Routes } from "react-router-dom";
import Mockman from 'mockman-js'
import { Explore, Home , Likes, Login, SignUp, History, WatchLater, Singlevideo, Playlist, SinglePlaylist} from "./Pages";
export const Routers = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="likes" element={<Likes />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="signup" element={<SignUp />}></Route>
            <Route path="video" element={<Explore />}></Route>
            <Route path="history" element={<History />}></Route>
            <Route path="watchlater" element={<WatchLater />}></Route>
            <Route path="playlist" element={<Playlist />}></Route>
            <Route path="playlist/:_id" element={<SinglePlaylist />}></Route>
            <Route path="video/:_id" element={<Singlevideo />}></Route>
            <Route path="mock" element={<Mockman />}></Route>
        </Routes>
    )
}