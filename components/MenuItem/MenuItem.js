import styles from "./menuItem.module.css";

export default function MenuItem() {
  return (
    <div className={styles.menu_item}>
      <span>menu item</span>
      <p>32TL</p>
    </div>
  );
}
