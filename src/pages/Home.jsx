import { Link } from "react-router-dom";

export const Home = () => {

    return (
    <div>
        <div id='home-hero' >
            <div className='hero-text'>
                <h2>Bold in Red</h2>
                <p>Creating a quality experience and little compromise. Mockad, now with 100% Lencet. Lighter, still durable.</p>
                <Link to="shop">Shop Now</Link>
            </div>
            <img className='hero-image' src="https://images.squarespace-cdn.com/content/v1/524c7a69e4b076c200185e4d/1578413835092-9AJ2I3W4W4AYNR3QNTCE/Cfinal64.jpg" alt="a man with trouser, brown jacket, and duffel bag running " />
            </div>
            <div id='home-categories'>
            <div className='subhero-menu'>
                <button>Men</button>
                <button>Women</button>
                <button>Children</button>
            </div>
        </div>
    </div>
    )
}