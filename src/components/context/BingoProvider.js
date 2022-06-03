import { useState } from "react";
import BingoContext from "./bingo-context";

const BingoProvider = (props) =>{
    const [actualNumber, setActualNumber] = useState(null);

    const values = {
        lastNumber: actualNumber,
        setNumber: setActualNumber,
    }

    return <BingoContext.Provider value={values}>
        {props.children}
    </BingoContext.Provider>
}

export default BingoProvider;