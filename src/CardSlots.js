import { useEffect, useState } from "react"
import NewCard from "./NewCard";
import DeckOfCards from "./DeckOfCards";


const CardSlots = () => {
    const [deckId, setDeckId] = useState(undefined);
    const [currentCards, setCurrentCards] = useState([undefined, undefined])
    const [newestCard, setNewestCard] = useState()

    // if (newestCard !== currentCards[0]) {
    //     setCurrentCards([newestCard, currentCards[0]])
    //     console.log("meffww");
    // }

    return (
        <div className="cardSlots">
            {!deckId && <DeckOfCards setDeckId={setDeckId} />}
            {deckId && <NewCard deckId={deckId} setNewestCard={setNewestCard} />}

            {/* {newestCard && <img src={newestCard.image} ></img>} */}
            {currentCards[0] && <img src={currentCards[0].image} />}
            {currentCards[0] && <img src={currentCards[0].image} />}

            <button>Click Here</button>
        </div>
    );
}

export default CardSlots;