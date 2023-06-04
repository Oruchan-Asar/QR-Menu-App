import styles from "./proof.module.css";

export default function Proof({ number, text }) {
  return (
    <div className={styles.proof}>
      <h1>{number}</h1>
      <p>{text}</p>
    </div>
  );
}
