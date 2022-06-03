import "./App.css";
import {useContext, useState } from "react";
import Header from "./components/Layout/Header";
import MainGrid from "./components/MainGrid";
import BingoProvider from "./components/context/BingoProvider";
import BingoContext from "./components/context/bingo-context";
function App() {
  const [currentNumber, setCurrentNumber] = useState(null);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [restart, setRestart] = useState(false);

  const genereteRandom = () => {
    let rand = Math.random() * 100;
    rand = Math.floor(rand);

    let endBingo = selectedNumbers.length === 100;
    console.log(endBingo);

    if (!endBingo) {
      while (selectedNumbers.includes(rand)) {
        rand = Math.random() * 100;
        rand = Math.floor(rand);
      }
      setSelectedNumbers((prevSelectedNumbers) =>
        prevSelectedNumbers.concat([rand])
      );
      setCurrentNumber(rand);
    } else {
      window.alert("Ya estan los 100 numeros");
    }
  };
 

  return (
    <BingoProvider>
      <Header currentNumber={currentNumber} />
      <main className="App">
        <MainGrid restart={restart} selectedNumbers={selectedNumbers} />
      </main>
    </BingoProvider>
  );
}

export default App;
