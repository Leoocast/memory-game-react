import "./square.styles.sass";
import "./flip.styles.sass";
import { useRef } from "react";
import { backImageURL, assetsUrl } from "../../data/images";

import { CARD_STATUS_STYLE } from "../../data/game_constants";
import { useEffect, useState } from "react";

export const Square = ({ card, revealCardInState }) => {
  const flipCardRef = useRef(null);
  const flipCardInnerRef = useRef(null);

  // console.log(card);

  useEffect(() => {
    if (card.revealed || card.paired) {
      changeCardStatus(CARD_STATUS_STYLE.REVEAL);
    } else {
      changeCardStatus(CARD_STATUS_STYLE.HIDE);
    }
  }, [card]);

  function onClickSquare() {
    if (card.paired) return;
    revealCardInState(card.id);
  }

  const changeCardStatus = (status) =>
    (flipCardInnerRef.current.style.transform = status);

  return (
    <div onClick={onClickSquare} className="square-container">
      <div className="flip-card" ref={flipCardRef}>
        <div className="flip-card-inner" ref={flipCardInnerRef}>
          <div className="flip-card-front">
            <img className="flip-image" src={backImageURL} alt="Avatar" />
          </div>
          <div className="flip-card-back">
            <img
              className="flip-image"
              src={assetsUrl + card.image}
              alt="Avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
