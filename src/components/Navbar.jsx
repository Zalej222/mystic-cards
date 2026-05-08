import "./CardOne.css";
import data from "../data";
import { useState } from "react";


const CardOne = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [search, setSearch] = useState('');
    
    const filteredCards = data.tarotCards.filter(card => 
        card.name.toLowerCase().includes(search.toLowerCase())
    );
    
    const ButtonHandler = () => {
        const randomIndex = Math.floor(Math.random() * data.tarotCards.length);
        setSelectedCard(data.tarotCards[randomIndex]);
    }
    
    return (
        <div className="card-one">
            <input 
                type="text" 
                placeholder="Hledat kartu..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
            />
            <button onClick={ButtonHandler}>Vybrat náhodnou kartu</button>
            <div className="card-list">
                {filteredCards.map(card => (
                    <div 
                        key={card.id} 
                        className="card-item" 
                        onClick={() => setSelectedCard(card)}
                    >
                        {card.name}
                    </div>
                ))}
            </div>
            {selectedCard && (
                <div className="selected-card">
                    <img src={selectedCard.imageUrl} alt={selectedCard.name} />
                    <h2>{selectedCard.name}</h2>
                    <p>{selectedCard.arcana}</p>
                    <p>{selectedCard.description}</p>
                </div>
            )}
        </div>
    )
}



export default CardOne;