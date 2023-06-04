import styles from "./page.module.css";
import Link from "next/link";
import Proof from "@/components/Proof/Proof";
import HomeCard from "@/components/HomeCard/HomeCard";
import categories from "@/mock/categories.js";
import localFont from "next/font/local";

const branch = localFont({ src: "./Branch.ttf" });

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
          <h2 className={[`${styles.title} ${branch.className}`]}>
            Kategoriler
          </h2>
          <div className={styles.homeCard}>
            {categories.slice(0, 6).map((category) => (
              <HomeCard category={category} key={category.id} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
