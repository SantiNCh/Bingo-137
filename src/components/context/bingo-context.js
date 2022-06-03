import React from "react";

const BingoContext = React.createContext({
  lastNumber: null,
  setNumber: null,
});

export default BingoContext;
