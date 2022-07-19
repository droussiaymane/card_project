import { useEffect, useState } from "react"

const deckOfCardss = (setDeckId) => {

    const numberOfDecks = 1
    const deckURL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=" + numberOfDecks

    fetch(deckURL)
        .then(res => res.json())
        .then(deck => { setDeckId(deck.deck_id) })
        .catch(err => console.log(err))

}

export default deckOfCardss;