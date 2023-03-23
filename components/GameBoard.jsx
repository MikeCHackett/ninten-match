import React, { useState, useEffect } from "react";
import Card from "./Card";
import BirdoImage from "../assets/birdo.png";
import DaisyImage from "../assets/daisy.png";
import LuigiImage from "../assets/luigi.png";
import MarioImage from "../assets/mario.png";
import MegamanImage from "../assets/megaman.png";
import PeachImage from "../assets/peach.png";
import ToadImage from "../assets/toad.png";
import YoshiImage from "../assets/yoshi.png";

const GameBoard = () => {
  const [cards, setCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (cards.length === 0) {
      const newCards = [
        { id: 0, image: BirdoImage },
        { id: 1, image: DaisyImage },
        { id: 2, image: LuigiImage },
        { id: 3, image: MarioImage },
        { id: 4, image: MegamanImage },
        { id: 5, image: PeachImage },
        { id: 6, image: ToadImage },
        { id: 7, image: YoshiImage },
        { id: 8, image: BirdoImage },
        { id: 9, image: DaisyImage },
        { id: 10, image: LuigiImage },
        { id: 11, image: MarioImage },
        { id: 12, image: MegamanImage },
        { id: 13, image: PeachImage },
        { id: 14, image: ToadImage },
        { id: 15, image: YoshiImage },
      ].sort(() => Math.random() - 0.5);

      setCards(newCards);
    }
  }, [cards]);

  const handleCardClick = (clickedCard) => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
  
    if (
      selectedCards.length < 2 &&
      !selectedCards.includes(clickedCard) &&
      !matchedCards.includes(clickedCard)
    ) {
      const updatedCards = cards.map((card) => {
        if (card.id === clickedCard.id) {
          return {
            ...card,
            isFlipped: true,
          };
        }
  
        return card;
      });
  
      setCards(updatedCards);
      setSelectedCards([...selectedCards, clickedCard]);
  
      if (selectedCards.length === 1 && selectedCards[0].image === clickedCard.image) {
        // match found
        setMatchedCards([...matchedCards, selectedCards[0], clickedCard]);
        setSelectedCards([]);
  
        const updatedCards = cards.map((card) => {
          if (card.id === selectedCards[0].id || card.id === clickedCard.id) {
            return {
              ...card,
              isMatched: true,
              bgColor: "bg-green-200",
            };
          }
  
          return card;
        });
  
        setCards(updatedCards);
      } else if (selectedCards.length === 1 && selectedCards[0].image !== clickedCard.image) {
        // match not found
        setTimeout(() => {
          const updatedCards = cards.map((card) => {
            if (card.id === selectedCards[0].id || card.id === clickedCard.id) {
              return {
                ...card,
                isFlipped: false,
                bgColor: "bg-red-200",
              };
            }
  
            return card;
          });
  
          setCards(updatedCards);
          setSelectedCards([]);
        }, 1000);
      }
    }
  };
  

return (
<div className="grid grid-cols-2 sm:grid-cols-4 place-items-center gap-4 sm:gap-8 py-2 sm:py-4 px-4 sm:px-16">
  {cards.map((card) => (
    <Card
      key={card.id}
      card={card}
      handleCardClick={handleCardClick}
    />
  ))}
</div>

);
};

export default GameBoard;