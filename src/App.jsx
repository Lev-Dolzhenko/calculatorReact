import { useState } from "react";
import { symbols } from "./assets/symbols";

import Button from "./components/button";
import * as math from "mathjs";

function App() {
  const [displayVal, setDisplayVal] = useState("");

  const onClickDisplayVal = (e, symbol) => {
    setDisplayVal(displayVal + e.target.value);

    if (symbol === "С") {
      setDisplayVal("");
    }

    if (symbol === "<") {
      setDisplayVal(displayVal.slice(0, -1));
    }

    if (symbol === "=") {
      setDisplayVal(math.evaluate(displayVal));
    }

    if (symbol === "X^2") {
      setDisplayVal(displayVal * displayVal);
    }

    if (symbol === "1/X") {
      setDisplayVal(1 / displayVal);
    }

    if (symbol === "SQRT_X") {
      setDisplayVal(math.sqrt(displayVal));
    }
  };

  return (
    <>
      <div className="container">
        <div className="calculator">
          <div className="calcultor__display">
            <input
              value={displayVal}
              className="calcultor__input"
              type="text"
              readOnly
            />
          </div>
          <div className="calculator__grid">
            {symbols.map((symbol) => (
              <Button
                onClickDisplayVal={onClickDisplayVal}
                key={symbol}
                symbol={symbol}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
