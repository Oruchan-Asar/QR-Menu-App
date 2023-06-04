"use client";

import Image from "next/image";
import styles from "./homeCard.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HomeCard({ category }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.homeCard} data-aos="fade-up">
      <Image src={category.image} alt="home-card" width={300} height={300} />
      <div className={styles.info}>
        <p>{category.categoryName}</p>
      </div>
    </div>
  );
}
