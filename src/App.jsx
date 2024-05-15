import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const endDate = new Date(2024, 11, 31);
    const currentDate = new Date();
    const difference = endDate - currentDate;
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const days = Math.ceil(difference / (1000 * 60 * 60 * 24)); // Using Math.ceil to round up
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <h1>Countdown to the End of 2024</h1>
      <h2>
        {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds
      </h2>
    </div>
  );
};

export default CountdownTimer;

