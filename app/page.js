import styles from "./page.module.css";
import Link from "next/link";
import Proof from "@/components/Proof/Proof";
import HomeCard from "@/components/HomeCard/HomeCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <h1>Lorem Ipsum is simply dummy</h1>
        <Link href="/menu" className={styles.menuLink}>
          Menu
        </Link>
      </div>
      <div className="align-center">
        <div className={styles.proof}>
          <Proof />
          <Proof />
          <Proof />
        </div>
      </div>
      <div className="align-center">
        <div>
          <h2>Lorem Ipsum</h2>
          <div className={styles.homeCard}>
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
          </div>
        </div>
      </div>
    </main>
  );
}
