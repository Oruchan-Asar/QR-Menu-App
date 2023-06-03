import Image from "next/image";
import logo from "@/public/logo.png";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
      <div className={styles.navLinks}>
        <Link href="/">Anasayfa</Link>
        <Link href="/menu">Menü</Link>
        <Link href="/about-us">Hakkımızda</Link>
      </div>
    </header>
  );
}
