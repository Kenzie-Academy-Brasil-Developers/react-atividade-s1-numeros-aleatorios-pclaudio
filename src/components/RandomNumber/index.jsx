import { useState } from "react";
import "./style.css";

const RandomNumber = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const handleRandomNumber = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <>
      <div>
        <p>{number}</p>
      </div>
      <div>
        <button onClick={handleRandomNumber}>Criar novo número</button>
      </div>
    </>
  );
};
export default RandomNumber;
