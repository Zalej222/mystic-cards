import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {

    return (

        <div className="home">

            <div className="hero">

                <h1>
                    Mystic Cards
                </h1>

                <p>
                    Objev tajemství tarotových karet,
                    denní poselství a tarotové výklady.
                </p>

                <div className="home-buttons">

                    <Link to="/cards">
                        <button>
                            Prohlédnout karty
                        </button>
                    </Link>

                    <Link to="/daily-card">
                        <button>
                            Denní karta
                        </button>
                    </Link>

                    <Link to="/reading">
                        <button>
                            Výklad
                        </button>
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default Home;