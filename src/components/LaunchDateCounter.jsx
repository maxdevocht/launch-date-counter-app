import React, { useState, useEffect } from 'react';

function LaunchDateCounter({ targetDate }) {
  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const timeDifference = targetDate.getTime() - now.getTime();

      if (timeDifference <= 0) {
        setRemainingTime(0);
        return;
      }

      setRemainingTime(timeDifference);
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]); 

  const formatTime = (ms) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    return `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {remainingTime !== null ? (
        <>
          <h1 className="text-3xl font-bold text-center mb-4">Launch Countdown</h1>
          <p className="text-7xl font-bold text-center text-sky-500">
            {formatTime(remainingTime)}
          </p>
        </>
      ) : (
        <p className="text-center text-red-500">Invalid Launch Date</p>
      )}
    </div>
  );
}

export default LaunchDateCounter;
