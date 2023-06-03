import placeholder from "../../public/placeholder-card-img.png";
import Image from "next/image";
import styles from "./homeCard.module.css";

export default function HomeCard() {
  return (
    <div className={styles.homeCard}>
      <Image src={placeholder} alt="home-card" width={350} />
      <div className={styles.info}>
        <p>Lorem Ipsum</p>
        <p className={styles.price}>12TL</p>
      </div>
    </div>
  );
}
