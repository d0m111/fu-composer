import Header from './components/Header';
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer"
import './styles/App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
