import dailyCardMeanings from "../data/dailyCardMeanings";
import data from "../data/data";
import { useState } from "react";
import "./DailyCard.css";

function DailyCard() {

    const [card, setCard] = useState(null);

    function pickCard() {

        const randomIndex = Math.floor(Math.random() * data.length);

        const randomCard = data[randomIndex];

        const meaning = dailyCardMeanings[randomCard.name];

        setCard({
            name: randomCard.name,
            image: randomCard.imageUrl,
            meaning: meaning
        });
    }

    return (
        <div>

            <h1>Denní karta</h1>

            <h2>
                Každý den přináší novou energii a nové možnosti.
                Denní karta ti může pomoci lépe porozumět své cestě,
                pocitům i rozhodnutím, která jsou před tebou.
            </h2>

            <button
                className="button-pick-card"
                onClick={pickCard}
            >
                Vybrat kartu
            </button>

            {card && (

                <div className="daily-card">

                    <h2>{card.name}</h2>

                    <img
                        src={card.image}
                        alt={card.name}
                    />

                    <p>{card.meaning}</p>

                </div>

            )}

        </div>
    );
}

export default DailyCard;