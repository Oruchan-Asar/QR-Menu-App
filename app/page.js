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
import Image from "next/image";
import dis_mekan from "@/public/place/dis-mekan.png";
import SwiperImage from "@/components/SwiperImage/SwiperImage";
import places from "@/mock/places.js";

const raleway = localFont({ src: "./Raleway.ttf" });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <div className={styles.absolute}>
          <h1 className={styles.title}>Aradığınız kahve lezzetinin adresi</h1>
          <Link href="/menu" className={styles.menuLink}>
            Menu
          </Link>
        </div>
        <Image className={styles.image} src={dis_mekan} alt="dis_mekan" />
      </div>
      <div className="align-center">
        <div className={styles.proof}>
          <Proof number={117} text={"Çeşit içecek"} />
          <Proof number={13} text={"Çeşit tatlı"} />
          <Proof number={6} text={"Çeşit aperitif"} />
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
        <SwiperImage images={places} />
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
