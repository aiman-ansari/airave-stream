import "./App.css";
import { Header } from "./Components/Header/Header"
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Routers } from "./Routers";
function App() {
  return (
    <div className="app">
      <Header />
     <div className="app-container">
       <div>
         <Sidebar />
       </div>
       <div className="container">
         <Routers />
       </div>
       
     </div>
     
    </div>
    );
}

export default App;
