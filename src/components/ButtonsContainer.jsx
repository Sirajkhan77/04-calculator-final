import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
    ".",
    "del",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttons.map((items) => {
        return (
          <button className={styles.btn} onClick={() => onButtonClick(items)}>
            {items}
          </button>
        );
      })}
    </div>
  );
};
export default ButtonsContainer;
