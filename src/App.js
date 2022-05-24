import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header/Header"
import { Routers } from "./Routers";
function App() {
  const [open , setOpen] = useState(false)
  return (
    <div className="app">
      <Header open={open} setOpen={setOpen} />
        <div className="app-container">
          <Routers />
        </div>
      </div>
    );
}

export default App;
