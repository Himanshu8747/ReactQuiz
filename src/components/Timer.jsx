import { useEffect } from "react";

const Timer = ({ secondsRemaining, dispatch }) => {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  // Start the timer when the game starts
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer-container flex items-center justify-center bg-gray-800 text-white p-4 rounded-full shadow-lg">
      <div className="timer-clock text-4xl font-bold">
        {mins < 10 ? "0" + mins : mins} : {seconds < 10 ? "0" + seconds : seconds}
      </div>
    </div>
  );
};

export default Timer;
