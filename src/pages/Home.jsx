import { Header } from "../components/Header";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <Header />
            <li>
                <Link to={`shop/`}>Shop Now</Link>
            </li>
        </div>
    )
}