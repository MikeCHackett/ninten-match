import React, { useState, useEffect, useRef } from "react";
import Rules from "./Rules";
import Timer from "./Timer";

const Navbar = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const timerIdRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      timerIdRef.current = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    } else {
      clearInterval(timerIdRef.current);
    }

    return () => {
      clearInterval(timerIdRef.current);
    };
  }, [isPlaying]);

  const handleStopClick = () => {
    setIsPlaying(false);
  };

  const handleGoClick = () => {
    setIsPlaying(true);
  };

  const handleResetClick = () => {
    setIsPlaying(false);
    setElapsedTime(0);
  };

  return (
    <div>
  <div className="bg-zinc-400 flex justify-evenly items-center">
    <h1 className="py-2 px-4 flex items-center font-mono text-7xl bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-violet-200 to-amber-300">NintenMatch</h1>
    <div className="hidden lg:flex gap-4">
      <button
        className="bg-green-500 hover:bg-green-800 text-white font-bold text-xl font-mono py-4 px-8 rounded"
        onClick={handleGoClick}
      >
        Go
      </button>
      <button
        className="bg-red-500 hover:bg-red-800 text-white font-bold text-xl font-mono py-4 px-8 rounded"
        onClick={handleStopClick}
      >
        Stop
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-800 text-white font-bold text-xl font-mono py-4 px-8 rounded"
        onClick={handleResetClick}
      >
        Reset
      </button>
    </div>
  </div>
  <div className="lg:hidden flex justify-between items-center px-4">
    <button
      className="bg-green-500 hover:bg-green-800 text-white font-bold text-xl font-mono py-4 px-8 rounded"
      onClick={handleGoClick}
    >
      Go
    </button>
    <button
      className="bg-red-500 hover:bg-red-800 text-white font-bold text-xl font-mono py-4 px-8 rounded"
      onClick={handleStopClick}
    >
      Stop
    </button>
    <button
      className="bg-blue-500 hover:bg-blue-800 text-white font-bold text-xl font-mono py-4 px-8 rounded"
      onClick={handleResetClick}
    >
      Reset
    </button>
  </div>
  <div className="py-2 px-4 lg:px-40">
    <Rules />
  </div>
  <Timer isPlaying={isPlaying} elapsedTime={elapsedTime} />
</div>



  );
};

export default Navbar;