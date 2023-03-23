import React, { useEffect } from "react";

const Timer = ({ isPlaying, elapsedTime, reset }) => {
  useEffect(() => {
    let intervalId;

    if (isPlaying) {
      intervalId = setInterval(() => {
        // Increment elapsed time
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying]);

  useEffect(() => {
    // Reset elapsed time when reset prop is set to true
  }, [reset]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="text-4xl font-mono flex flex-col items-center justify-center mb-8 sm:flex-row sm:justify-between sm:items-center">
      <span className="mb-4 sm:mb-0 mx-auto">
        Elapsed time: {formatTime(elapsedTime)}
      </span>
    </div>
  );
};

export default Timer;
