import "./Home.css";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {

    return (

        <div className="home">

            <div className="hero">

                <h1>
                    Tarotové karty
                </h1>

                <p>
                    Objev tajemství tarotových karet,
                    denní poselství a tarotové výklady.
                </p>

                <div className="home-buttons">

                    <Link to="/cards">
                        <Button>
                            Prohlédnout karty
                        </Button>
                    </Link>

                    <Link to="/daily-card">
                        <Button>
                            Denní karta
                        </Button>
                    </Link>

                    <Link to="/reading">
                        <Button>
                            Výklad
                        </Button>
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default Home;