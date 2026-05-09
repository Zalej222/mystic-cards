import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {

    return (

        <nav className="navbar">

            <h2 className="logo">
                Mystický tarot
            </h2>

            <div className="nav-links">

                <Link to="/">
                    Karty
                </Link>

                <Link to="/daily-card">
                    Denní karta
                </Link>

                <Link to="/reading">
                    Výklad
                </Link>

            </div>

        </nav>
    );
};

export default Navbar;