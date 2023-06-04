"use client";

import Image from "next/image";
import styles from "./homeCard.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HomeCard({ label }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.homeCard} data-aos="fade-up">
      <Image src={label.image} alt="home-card" width={275} height={275} />
      <div className={styles.info}>
        <p>{label.categoryName}</p>
      </div>
    </div>
  );
}
