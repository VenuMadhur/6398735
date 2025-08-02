import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // multiple actions for increment button
  const increment = () => {
    setCount(count + 1);
    sayHello(); // also say hello on increment
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert("Hello! Count increased!");
  };

  const sayWelcome = (msg) => {
    alert(`Say ${msg}`);
  };

  const handleSyntheticEvent = (e) => {
    alert("I was clicked");
    console.log("Synthetic Event Object:", e);
  };

  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", marginBottom: "20px" }}>
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br /><br />
      <button onClick={() =>sayWelcome("Welcome Bro!!")}>Say Welcome</button>
      <br /><br />
      <button onClick={handleSyntheticEvent}>Synthetic Event Button</button>
    </div>
  );
}

export default Counter;
