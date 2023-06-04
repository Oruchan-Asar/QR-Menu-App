import MenuItem from "@/components/MenuItem/MenuItem";
import styles from "./page.module.css";
import localFont from "next/font/local";

const branch = localFont({ src: "../Branch.ttf" });

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.mid}>
        <h2>Menu</h2>
      </div>
      <div className={styles.filter}></div>
      <div className="align-center">
        <div className={styles.container}>
          <h2 className={[`${styles.title} ${branch.className}`]}>
            Category Title
          </h2>
          <div className={styles.menus}>
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
        </div>
      </div>
    </div>
  );
}
