import React, { useState, useEffect } from 'react';
import './App.css';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const endDate = new Date(new Date().getFullYear(), 11, 31); // Use current year
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
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero bg-black-500 dark:bg-black-700 min-h-screen px-6 lg:px-12">
      <div className="hero-content text-center max-w-6xl mx-auto py-12">
        <div className="p-6 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow-lg rounded-lg">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Countdown to the End of {new Date().getFullYear()}
          </h1>
          <p className="py-6 text-gray-700 dark:text-gray-300">
            The end of {new Date().getFullYear()} is approaching!
          </p>
          <div className="flex justify-center space-x-8 text-lg font-medium text-gray-700 dark:text-gray-300">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-semibold">{timeLeft.days}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-semibold">{timeLeft.hours}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-semibold">{timeLeft.minutes}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-semibold">{timeLeft.seconds}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
