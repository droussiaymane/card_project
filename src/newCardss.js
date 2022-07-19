import { useEffect, useState } from "react"

const newCardss = (deckId, setNewestCard) => {
    console.log(deckId);

    const cardURL = "https://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=1"
    //  "image": "https://deckofcardsapi.com/static/img/KH.png",
    //  "value": "KING",
    //  "suit": "HEARTS",
    //  "code": "KH"
    console.log(cardURL);
    console.log(deckId);


    fetch(cardURL)
        .then(res => res.json())
        .then(card => {
            setNewestCard(card.cards[0]);
            console.log();
        })
        .catch(err => console.log(err))

    console.log(888);

}

export default newCardss;