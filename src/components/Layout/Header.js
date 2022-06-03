import { Fragment, useContext } from "react";
import Button from "../UI/Button/Button";
import classes from "./Header.module.css";
import BingoContext from "../context/bingo-context";

const Header = (props) => {
  const ctx = useContext(BingoContext);
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Bingo 137</h1>
        {(ctx.lastNumber != null) && <h1 className={classes.current}>Último numero: {ctx.lastNumber}</h1>}
        <Button onClick={props.onClick}>Restart Game</Button>
      </header>

    </Fragment>
  );
};

export default Header;
