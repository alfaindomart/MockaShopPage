import { Header } from "../components/header/Header";
import { Link } from "react-router-dom";

export const Home = () => {
    const testImage = 'https://images.squarespace-cdn.com/content/v1/524c7a69e4b076c200185e4d/1578413835092-9AJ2I3W4W4AYNR3QNTCE/Cfinal64.jpg'
    console.log(testImage)
    return (
        <div>
            <Header />
            <div className="home hero-image">
                <img src="https://images.squarespace-cdn.com/content/v1/524c7a69e4b076c200185e4d/1578413835092-9AJ2I3W4W4AYNR3QNTCE/Cfinal64.jpg" alt="a man with trouser, brown jacket, and duffel bag running " />
            </div>
            <li>
            <Link to={`shop/`}>Shop Now</Link>
            </li>
        </div>
    )
}