import "./Reading.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Reading = () => {

    return (

        <div className="reading">

            <h1>Výklad karet</h1>

            <div className="button-group">

                <Link
                    to="/past-present-future"
                    className="reading-link"
                >
                    <Button>
                        Minulost, přítomnost, budoucnost
                    </Button>
                </Link>

                <Link
                    to="/yes-no"
                    className="reading-link"
                >
                    <Button>
                        Ano/ne
                    </Button>
                </Link>

                <Link
                    to="/relationships"
                    className="reading-link"
                >
                    <Button>
                        Vztahy
                    </Button>
                </Link>

                <Link
                    to="/cross-reading"
                    className="reading-link"
                >
                    <Button>
                        Křížový výklad
                    </Button>
                </Link>

            </div>

        </div>

    );
};

export default Reading;