import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  let [calVal, setCalval] = useState("");
  const onButtonClick = (btnText) => {
    console.log(btnText);
    if (btnText === "C") {
      setCalval("");
    } else if (btnText === "=") {
      const result = eval(calVal);
      setCalval(result);
    } else if (btnText === "del") {
      const decrementedVal = calVal.slice(0, -1);
      setCalval(decrementedVal);
    } else {
      const newDisplayValue = calVal + btnText;
      setCalval(newDisplayValue);
    }
  };

  return (
    <div className={styles.cont}>
      <div className={styles.calculator}>
        <Display dispVal={calVal}></Display>
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}

export default App;

// 6:41
