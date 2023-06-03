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
        Be sure to take a look at our Terms of Use and Privacy Policy
      </p>
    </footer>
  );
}
