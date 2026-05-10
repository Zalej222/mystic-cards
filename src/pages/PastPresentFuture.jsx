import "./PastPresentFuture.css";
import Button from "../components/Button";      

const PastPresentFuture = () => {

    return (
        <div className="ppf">

            <h1>
    Minulost • Přítomnost • Budoucnost
</h1>

<p>
    Tento výklad ti pomůže lépe porozumět své životní cestě
    a souvislostem mezi tím, co bylo, co právě prožíváš
    a co se může objevit v blízké budoucnosti.
</p>

<ul>
    <li>
        <strong>Minulost</strong> ukazuje události,
        zkušenosti nebo energie,
        které ovlivnily současnou situaci.
    </li>

    <li>
        <strong>Přítomnost</strong> odhaluje,
        co je pro tebe důležité právě teď.
    </li>

    <li>
        <strong>Budoucnost</strong> naznačuje možný směr vývoje
        a energii, která k tobě přichází.
    </li>
</ul>

<p>
    Zhluboka se nadechni, soustřeď se na svou otázku
    nebo aktuální situaci a poté vyber karty.
</p>

<div className="button-wrapper">
    <Button>
        Vyber kartu pro minulost
    </Button>
    <Button>
        Vyber kartu pro přítomnost
    </Button>
    <Button>
        Vyber kartu pro budoucnost
    </Button>           
</div>
                    </div> 
            )};

export default PastPresentFuture;   