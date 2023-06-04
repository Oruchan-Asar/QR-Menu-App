import styles from "./page.module.css";
import Link from "next/link";
import Proof from "@/components/Proof/Proof";
import HomeCard from "@/components/HomeCard/HomeCard";
import drinks from "@/mock/drinks.js";
import foods from "@/mock/foods.js";
import localFont from "next/font/local";
import Popular from "@/components/Popular/Popular";
import About from "@/components/About/About";

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
          <Proof number={90} text={"Çeşit içecek"} />
          <Proof number={12} text={"Çeşit tatlı"} />
          <Proof number={12} text={"Çeşit aperatif ve kahvaltı"} />
        </div>
      </div>
      <div className="align-center">
        <div className={styles.section}>
          <h2 className={[`${styles.title} ${branch.className}`]}>Icecekler</h2>
          <div className={styles.homeCard}>
            {drinks.slice(0, 8).map((drink) => (
              <HomeCard label={drink} key={drink.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="align-center">
        <div className={styles.section}>
          <h2 className={[`${styles.title} ${branch.className}`]}>
            Yiyecekler
          </h2>
          <div className={styles.homeCard}>
            {foods.slice(0, 4).map((food) => (
              <HomeCard label={food} key={food.id} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.mid}>
        <h2>Lorem Ipsum</h2>
      </div>
      <div className="align-center">
        <div className={styles.section}>
          <h2 className={[`${styles.title} ${branch.className}`]}>
            En Cok Tercih Edilenler
          </h2>
          <div className={styles.popular}>
            <Popular />
            <Popular />
            <Popular />
            <Popular />
          </div>
        </div>
      </div>
      <div className="align-center">
        <div className={styles.section}>
          <About />
        </div>
      </div>
    </main>
  );
}
