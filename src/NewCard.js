import { useEffect, useState } from "react"

const NewCard = ({ deckId, setNewestCard }) => {

    const cardURL = "https://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=1"
    //  "image": "https://deckofcardsapi.com/static/img/KH.png",
    //  "value": "KING",
    //  "suit": "HEARTS",
    //  "code": "KH"

    useEffect(() => {
        fetch(cardURL)
            .then(res => res.json())
            .then(card => {
                setNewestCard(card.cards[0]);
                console.log();
            })
            .catch(err => console.log(err))

    }, [])
    console.log(132414);
    return (
        <></>
    );
}

export default NewCard;