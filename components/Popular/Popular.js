"use client";

import Image from "next/image";
import styles from "./popular.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Popular({ name, price, image }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.popular} data-aos="fade-up">
      <Image src={image} alt="popular" width={200} height={250} />
      <div className={styles.info}>
        <p>{name}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
}
