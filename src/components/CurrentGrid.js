import classes from "./CurrentGrid.module.css";
import Item from "./Item";
import { useState, useContext } from "react";
import BingoContext from "./context/bingo-context";

const CurrentGrid = () => {
  const ctx = useContext(BingoContext);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const bingoNumberFn = (number) => {
    if (!selectedNumbers.includes(number)) {
      setSelectedNumbers((prevSelectedNumbers) =>
        prevSelectedNumbers.concat([number])
      );
      ctx.setNumber(number);
    } else {
      setSelectedNumbers((prevSelectedNumbers) =>
        prevSelectedNumbers.filter((num) => num !== number)
      );
      let len = selectedNumbers.length;
      let isLast =
        selectedNumbers.indexOf(number) === selectedNumbers.length - 1;

      let numerofinal;
      if (len === 0 || len === 1) {
        numerofinal = null;
      } else {
        if (isLast) {
          numerofinal = selectedNumbers[len - 2];
        } else {
          numerofinal = selectedNumbers[len - 1];
        }
      }
      console.log("Se elimina el numero: " + number);
      ctx.setNumber(numerofinal);
    }
  };

  const bingoNumbers = [];
  for (let index = 0; index < 100; index++) {
    bingoNumbers.push(index);
  }

  return (
    <div className={classes.container}>
      {bingoNumbers.map((bingoNumber) => (
        <Item
          key={bingoNumber}
          isSelected={bingoNumberFn}
          list={selectedNumbers}
        >
          {bingoNumber}
        </Item>
      ))}
    </div>
  );
};

export default CurrentGrid;
