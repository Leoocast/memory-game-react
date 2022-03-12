import { Square } from "../square/square.component";
import "./grid.styles.sass";
import { randomCards } from "../../data/images";

import { useState, useEffect } from "react";

export const Grid = () => {
  const [cardList, setCardList] = useState(randomCards);

  const [counterClick, setCounterClick] = useState(0);

  const [currentCard, setCurrentCard] = useState({
    id: "0",
  });

  const [points, setPoints] = useState(0);

  useEffect(() => {
    // console.log(cardList.filter((r) => r.revealed));
  }, [cardList]);

  function revealCardInState(id) {
    const card = cardList.find((card) => card.id === id);

    if (
      (currentCard.id + currentCard.id === card.id ||
        currentCard.id === card.id + card.id) &&
      counterClick == 1
    ) {
      getPoint(currentCard, card);
      controlClickState(id);
      return;
    } else if (counterClick == 1) {
      console.log(counterClick);

      const newList = cardList.map((card) =>
        card.id === id ? { ...card, revealed: true } : card
      );

      setCardList(newList);

      setTimeout(() => {
        hideAllCards();
      }, 500);
      controlClickState(id);
      return;
    }

    setCurrentCard(card);

    const newList = cardList.map((card) =>
      card.id === id ? { ...card, revealed: true } : card
    );

    setCardList(newList);

    controlClickState(id);
  }

  function hideAllCards(idKeepAlive) {
    const newList = cardList.map((card) =>
      card.id === idKeepAlive
        ? { ...card, revealed: true }
        : { ...card, revealed: false }
    );

    setCardList(newList);
  }

  function controlClickState(idKeepAlive) {
    if (counterClick >= 2) {
      hideAllCards(idKeepAlive);
      setCounterClick(1);
      return;
    }

    setCounterClick(counterClick + 1);
  }

  function getPoint(cardOne, cardTwo) {
    const newPairedCards = cardList.map((card) =>
      cardOne.id === card.id || cardTwo.id === card.id
        ? { ...card, revealed: true, paired: true }
        : card
    );

    setCardList(newPairedCards);

    setPoints(points + 1);
  }

  return (
    <div className="grid-container">
      <h1>Points: {points}</h1>
      <div className="grid">
        {cardList.map((card, i) => {
          // console.log("REDRAW");
          return (
            <Square
              key={card.id}
              card={card}
              revealCardInState={revealCardInState}
            />
          );
        })}
      </div>
    </div>
  );
};
