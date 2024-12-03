import React, { useState, useEffect } from 'react';

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Setting up an interval when the component is mounted
    const interval = setInterval(() => {
        console.log(count);
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Return a cleanup function that will be called when the component unmounts
    return () => {
      clearInterval(interval); // Cleanup the interval
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      <h1>Timer: {count}</h1>
    </div>
  );
};

export default UseEffect;
