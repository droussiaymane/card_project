import { useEffect, useState } from "react"

const DeckOfCards = ({ setDeckId }) => {

    const numberOfDecks = 1
    const deckURL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=" + numberOfDecks


    useEffect(() => {
        fetch(deckURL)
            .then(res => res.json())
            .then(deck => { setDeckId(deck.deck_id) })
            .catch(err => console.log(err))
    }, [])

    return (
        <></>
    );
}

export default DeckOfCards;