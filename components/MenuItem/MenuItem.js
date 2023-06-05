import styles from "./menuItem.module.css";

export default function MenuItem({ name, price }) {
  return (
    <div className={styles.menu_item}>
      <span>{name}</span>
      <p>{price}TL</p>
    </div>
  );
}
