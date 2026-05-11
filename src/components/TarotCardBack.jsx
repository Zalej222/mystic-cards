import "./TarotCardback.css";

const TarotCardBack = ({ onClick }) => {

    return (

        <div className="tarot-card-back">

            <img
                src="/images_orthers/zadni_strana_karty.png"
                alt="Tarot card back"
                onClick={onClick}
            />

        </div>
    );
};

export default TarotCardBack;