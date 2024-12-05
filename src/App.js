import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [active, setActive] = useState(function () {
    return JSON.parse(localStorage.getItem("activeIdx"));
  });
  const [locked, setLocked] = useState(true);

  function handleClick(index) {
    if (locked) {
      return;
    }
    localStorage.setItem("activeIdx", index?.toString());
    setActive(index);
    setLocked(true);
  }

  return (
    <div className="above">
      <div className="main grid grid-cols-5 px-1 items-center text-center">
        {Array.from({ length: 160 }, (_, index) => {
          // Customize the element based on the index
          return (
            <div
              key={index}
              onClick={() => {
                handleClick(index);
              }}
              className={`p-3 border border-black cursor-pointer flex justify-center items-center ${
                index <= active && "bg-red-700 text-white"
              } ${index === active && "bg-blue-600"}`}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          setLocked((val) => !val);
        }}
        className="p-5 bg-blue-600 text-white w-full text-xl text-center font-bold"
      >
        {locked ? "Locked 🔒" : "Unlocked 🔓"}
      </button>
    </div>
  );
};

export default App;
