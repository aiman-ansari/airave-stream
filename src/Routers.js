import { Route, Routes } from "react-router-dom";
import { Explore, Home , Likes, Login, SignUp, History, WatchLater, Singlevideo, Playlist} from "./Pages";
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
            <Route path="video/:_id" element={<Singlevideo />}></Route>
        </Routes>
    )
}