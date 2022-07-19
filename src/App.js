import { useEffect, useState } from "react"
import Card from "./components/Card";

function App() {

  const [deckId, setDeckId] = useState("")
  const [rightCard, setRightCard] = useState(null)
  const [leftCard, setLeftCard] = useState(null)
  const [suitCount, setSuitCount] = useState(0)
  const [valueCount, setValueCount] = useState(0)
  const [finish, setFinish] = useState(false)

  useEffect(() => {
    getDeckIdApi()
  }, [])

  const getDeckIdApi = async () => {
    await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(res => res.json()).then(res => setDeckId(res.deck_id)).catch(err => console.log(err))
  }

  const shuffle = async () => {

    await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`).then(res => res.json()).then(res => {
      setLeftCard(rightCard);
      if (res.remaining === 0) {
        setFinish(true); setRightCard(null)
      } else {
        setRightCard(res.cards[0])
      }
    }).catch(err => console.log(err))

    if (leftCard !== null && rightCard !== null && leftCard.value === rightCard.value) {
      setValueCount((valueCount) => valueCount + 1)
    }
    if (leftCard !== null && rightCard !== null && leftCard.suit === rightCard.suit) {
      setSuitCount((suitCount) => suitCount + 1)
      console.log(12341423);
    }

  }

  return (
    <div>
      {leftCard && rightCard && (leftCard.suit === rightCard.suit && (<div>Suit perfect</div>))}
      {leftCard && rightCard && (leftCard.value === rightCard.value && (<div>Value perfect</div>))}
      <Card object={leftCard} name="left" />
      <Card object={rightCard} name="right" />

      {!finish && <button onClick={() => shuffle()}>Draw Card</button>}
      {finish &&
        <div>
          <p>Value Matches: {valueCount}</p>
          <p>Suit Matches: {suitCount}</p>
        </div>
      }

    </div>
  );
}

export default App;
