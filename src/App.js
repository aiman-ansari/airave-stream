import "./App.css";
import { Header } from "./Components/Header/Header";
import { Routers } from "./Routers";
function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app-container'>
        <Routers />
      </div>
    </div>
  );
}

export default App;
