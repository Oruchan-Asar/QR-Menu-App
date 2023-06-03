import styles from "./page.module.css";
import Link from "next/link";
import Proof from "@/components/Proof/Proof";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <h1>Lorem Ipsum is simply dummy</h1>
        <Link href="/menu" className={styles.menuLink}>
          Menu
        </Link>
      </div>
      <div className={styles.proof}>
        <Proof />
        <Proof />
        <Proof />
      </div>
    </main>
  );
}
