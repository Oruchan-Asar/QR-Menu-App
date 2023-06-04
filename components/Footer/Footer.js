import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.navLinks}>
        <Link href="/">Anasayfa</Link>
        <Link href="/menu">Menü</Link>
        <Link href="/about-us">Hakkımızda</Link>
      </div>
      <p className={styles.copyright}>
        Bu site{" "}
        <Link href="https://www.instagram.com/oruc.asar/">Oruçhan Asar</Link>{" "}
        tarafından geliştirilmiştir.
      </p>
    </footer>
  );
}
