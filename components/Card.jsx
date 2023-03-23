import React from "react";

const Card = ({ card, handleCardClick }) => {
  const handleClick = () => {
    if (!card.isMatched) {
      handleCardClick(card);
    }
  };

  return (
    <div
      className={`${
        card.isFlipped || card.isMatched ? "bg-green-500" : "bg-gray-100"
      } ${card.isMatched ? "bg-green-500" : card.isFlipped ? "bg-red-500" : ""} p-2 md:p-4 rounded-md cursor-pointer`}
      onClick={handleClick}
    >
      {card.isFlipped || card.isMatched ? (
        <img src={card.image} alt="" className="h-28 md:h-36 w-28 md:w-36 object-contain rounded-md" />
      ) : (
        <div className="h-36 md:h-48 w-36 md:w-48 flex justify-center items-center">
          <svg
            className="h-28 md:h-48 w-28 md:w-48 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Card;
