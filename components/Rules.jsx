import React, { useState } from "react";

const Rules = () => {
  const [showRules, setShowRules] = useState(false);

  const toggleRules = () => {
    setShowRules(!showRules);
  };

  return (
    <div className="z-20">
      <button
        className="bg-orange-500 hover:bg-orange-800 text-white font-bold text-xl font-mono py-4 px-8 rounded"
        onClick={toggleRules}
      >
        Rules
      </button>
      {showRules && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 font-mono flex items-center justify-center">
          <div className="bg-white rounded-lg p-20">
            <h2 className="text-6xl font-bold mb-4">NintenMatch Game Rules</h2>
            <p className="mb-4 text-xl">
              The game consists of flipping over cards that will show various Nintendo characters and then attempting to find the matching pairs.
            </p>
            <p className="mb-4 text-xl">
              When the game starts, all cards are face down. Clicking on a card
              will flip it over to reveal which Nintendo character it is. When a second card is
              flipped over, the characters on both cards will be compared. If they
              match, both cards will remain face up. If they do not match, both
              cards will be flipped face down again.
            </p>
            <p className=" text-xl">
              The game is won when all pairs have been found. The game can be played with a timer that can be started when a user clicks go, and it can also be stopped and reset at any point.
            </p>
            <button
              className="bg-red-500 hover:bg-red-800 text-white font-bold text-2xl py-4 px-8 rounded mt-4"
              onClick={toggleRules}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rules;
