import React from "react";

const GameOver = ({ restartGame }) => {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75">
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-4xl font-bold mb-4">Game Over</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={restartGame}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameOver;
