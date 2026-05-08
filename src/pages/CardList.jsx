import "./CardList.css";
import { useState } from "react";
import tarotCards, { sections } from "../data/data.js";

const CardList = () => {

    const [selectedCard, setSelectedCard] = useState(null);

    return (

        <div className="card-list">

            <h1>Přehled tarotových karet</h1>

            {selectedCard ? (

                /* DETAIL KARTY */

                <div className="card-detail">

                    <button
                        className="back-button"
                        onClick={() => setSelectedCard(null)}
                    >
                        ← Zpět
                    </button>

                    <h2>{selectedCard.name}</h2>

                    <img
                        className="detail-image"
                        src={selectedCard.imageUrl}
                        alt={selectedCard.name}
                    />

                    <p>{selectedCard.description}</p>

                </div>

            ) : (

                /* SEZNAM KARET */

                <>

                    {/* VELKÉ ARKÁNY */}
                    <h2>Velké arkány</h2>

                    <div className="cards-description">
                        {sections.find((section) => section.id === 1)?.description}
                    </div>

                    <div className="cards-row">
                        {tarotCards
                            .filter((card) => card.arcana === "Velké")
                            .map((card) => (
                                <div
                                    className="card"
                                    key={card.id}
                                    onClick={() => setSelectedCard(card)}
                                >
                                    <div className="card-content">
                                        <h3>{card.name}</h3>
                                        <p>{card.description}</p>
                                    </div>

                                    <img
                                        src={card.imageUrl}
                                        alt={card.name}
                                    />
                                </div>
                            ))}
                    </div>

                    {/* HOLE */}
                    <h2>Hole</h2>

                    <div className="cards-description">
                        {sections.find((section) => section.id === 2)?.description}
                    </div>

                    <div className="cards-row">
                        {tarotCards
                            .filter((card) => card.suit === "Hole")
                            .map((card) => (
                                <div
                                    className="card"
                                    key={card.id}
                                    onClick={() => setSelectedCard(card)}
                                >
                                    <div className="card-content">
                                        <h3>{card.name}</h3>
                                        <p>{card.description}</p>
                                    </div>

                                    <img
                                        src={card.imageUrl}
                                        alt={card.name}
                                    />
                                </div>
                            ))}
                    </div>

                    {/* POHÁRY */}
                    <h2>Poháry</h2>

                    <div className="cards-description">
                        {sections.find((section) => section.id === 3)?.description}
                    </div>

                    <div className="cards-row">
                        {tarotCards
                            .filter((card) => card.suit === "Poháry")
                            .map((card) => (
                                <div
                                    className="card"
                                    key={card.id}
                                    onClick={() => setSelectedCard(card)}
                                >
                                    <div className="card-content">
                                        <h3>{card.name}</h3>
                                        <p>{card.description}</p>
                                    </div>

                                    <img
                                        src={card.imageUrl}
                                        alt={card.name}
                                    />
                                </div>
                            ))}
                    </div>

                    {/* MEČE */}
                    <h2>Meče</h2>

                    <div className="cards-description">
                        {sections.find((section) => section.id === 4)?.description}
                    </div>

                    <div className="cards-row">
                        {tarotCards
                            .filter((card) => card.suit === "Meče")
                            .map((card) => (
                                <div
                                    className="card"
                                    key={card.id}
                                    onClick={() => setSelectedCard(card)}
                                >
                                    <div className="card-content">
                                        <h3>{card.name}</h3>
                                        <p>{card.description}</p>
                                    </div>

                                    <img
                                        src={card.imageUrl}
                                        alt={card.name}
                                    />
                                </div>
                            ))}
                    </div>

                    {/* PENTAKLY */}
                    <h2>Pentakly</h2>

                    <div className="cards-description">
                        {sections.find((section) => section.id === 5)?.description}
                    </div>

                    <div className="cards-row">
                        {tarotCards
                            .filter((card) => card.suit === "Pentakle")
                            .map((card) => (
                                <div
                                    className="card"
                                    key={card.id}
                                    onClick={() => setSelectedCard(card)}
                                >
                                    <div className="card-content">
                                        <h3>{card.name}</h3>
                                        <p>{card.description}</p>
                                    </div>

                                    <img
                                        src={card.imageUrl}
                                        alt={card.name}
                                    />
                                </div>
                            ))}
                    </div>

                </>
            )}
        </div>
    );
};

export default CardList;
