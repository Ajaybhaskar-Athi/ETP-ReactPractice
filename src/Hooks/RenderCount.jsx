

import React, { useState, useRef } from "react";

const RenderCounter = () => {
  const [state, setState] = useState(0); // State to trigger re-renders
  const renderCount = useRef(0); // Initialize a ref to track renders
  renderCount.current += 1; // Increment render count on each render

  return (
    <div>
        <h1 className="text-xl font-bold">This is Render component</h1>

      <p>The component has rendered {renderCount.current} times.</p>
      <button  onClick={() => setState((prev) => prev + 1)}>  Re-render Component
      </button>
    </div>
  );
};

export default RenderCounter;


/*
We can count by using useMemo also but depends on state  , useRef is the Best way to count the Render 

import React, { useMemo, useState } from "react";

const RenderCounterWithMemo = () => {
  const [state, setState] = useState(0);

  const renderCount = useMemo(() => {
    console.log("Component rendered");
    return state + 1; // Derive render count
  }, [state]);

  return (
    <div>
      <p>The component has rendered {renderCount} times.</p>
      <button onClick={() => setState((prev) => prev + 1)}>Re-render</button>
    </div>
  );
};

export default RenderCounterWithMemo;



*/