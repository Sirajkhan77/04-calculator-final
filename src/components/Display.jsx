import styles from "./Display.module.css";
const Display = ({ dispVal }) => {
  return (
    <input className={styles.display} type="text" value={dispVal} readOnly />
  );
};
export default Display;
