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
                    Tarotové karty nejsou jen náhodné obrázky.
                    Jsou zrcadlem naší intuice, emocí a energie,
                    kterou právě prožíváme.

                    <br /><br />

                    Každá karta přichází ve správný okamžik
                    a může ti pomoci lépe porozumět své cestě,
                    pocitům i rozhodnutím.

                    <br /><br />

                    Nezáleží na tom, jestli držíš skutečné karty v ruce
                    nebo vybíráš digitálně.
                    Důležitý je tvůj záměr, soustředění a energie,
                    kterou do výkladu vkládáš.

                    <br /><br />

                    I náhodně vybraná karta může nést přesně to poselství,
                    které právě potřebuješ slyšet.
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