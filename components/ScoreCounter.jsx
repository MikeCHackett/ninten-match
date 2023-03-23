import React from "react";

function ScoreCounter(props) {
  return (
    <div className="flex items-center justify-center">
      <p className="text-lg font-medium text-gray-700">Score: {props.score}</p>
    </div>
  );
}

export default ScoreCounter;
