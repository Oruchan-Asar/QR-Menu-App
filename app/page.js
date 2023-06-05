import styles from "./page.module.css";
import Link from "next/link";
import Proof from "@/components/Proof/Proof";
import HomeCard from "@/components/HomeCard/HomeCard";
import drinks from "@/mock/drinks.js";
import foods from "@/mock/foods.js";
import localFont from "next/font/local";
import Popular from "@/components/Popular/Popular";
import About from "@/components/About/About";
import popular from "@/mock/popular.js";

const branch = localFont({ src: "./Branch.ttf" });
const raleway = localFont({ src: "./Raleway.ttf" });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <h1>Aradığınız kahve lezzetinin adresi</h1>
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
          <h2 className={[`${styles.title} ${raleway.className}`]}>
            İçecekler
          </h2>
          <div className={styles.homeCard}>
            {drinks.slice(0, 8).map((drink) => (
              <HomeCard label={drink} key={drink.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="align-center">
        <div className={styles.section}>
          <h2 className={[`${styles.title} ${raleway.className}`]}>
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
          <h2 className={[`${styles.title} ${raleway.className}`]}>
            Dream Specials
          </h2>
          <div className={styles.popular}>
            {popular.map((product) => (
              <Popular
                name={product.name}
                price={product.price}
                image={product.image}
                key={product.id}
              />
            ))}
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
