import dailyCardMeanings from "../data/dailyCardMeanings";
import data from "../data/data";
import { useState } from "react";

import "./DailyCard.css";

import TarotCardBack
from "../components/TarotCardBack";

function DailyCard() {

    const [card, setCard] = useState(null);

    function pickCard() {

        // pouze Velké arkány (0–21)
        const majorArcanaCards =
            data.filter(card => card.id <= 21);

        const randomIndex =
            Math.floor(
                Math.random() *
                majorArcanaCards.length
            );

        const randomCard =
            majorArcanaCards[randomIndex];

        const meaning =
            dailyCardMeanings[randomCard.id];

        setCard({
            name: randomCard.name,
            image: randomCard.imageUrl,
            meaning: meaning
        });
    }

    return (

        <div className="daily-card-page">

            <h1>Denní karta</h1>

            <h2 className="daily-card-text">

                Každý den přináší novou energii
                a nové možnosti.

                <br />
                <br />

                Na chvíli se zastav,
                mysli na svůj den
                a vyber si kartu,
                která ti může pomoci
                lépe porozumět své cestě,
                pocitům i rozhodnutím,
                která jsou před tebou.

            </h2>

            <div className="card-wrapper">

                {!card && (

                    <TarotCardBack
                        onClick={pickCard}
                    />

                )}

            </div>

            {card && (

                <div className="daily-card">

                    <h2>{card.name}</h2>

                    <img
                        src={card.image}
                        alt={card.name}
                    />

                    <div className="meaning-box">

                        <h3>Energie dne</h3>
                        <p>{card.meaning.energy}</p>

                        <h3>Poselství</h3>
                        <p>{card.meaning.message}</p>

                        <h3>Rada</h3>
                        <p>{card.meaning.advice}</p>

                        <h3>Afirmace</h3>
                        <p>{card.meaning.affirmation}</p>

                        <button
                                className="daily-card-button"
                                onClick={() => setCard(null)}
                            >
                                Vybrat novou kartu
                            </button>
                    </div>

                </div>

            )}

        </div>
    );
}

export default DailyCard;