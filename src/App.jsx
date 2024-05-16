import './App.css'
import { Header } from './components/Header';
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';



function App() {

  return (
    <div>
        <Header />
        <li>
          <Outlet />
            <Link to="shop">Shop Now</Link>
        </li>
    </div>
)
}

export default App
