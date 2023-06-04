"use client";

import popular from "@/public/placeholder-popular.png";
import Image from "next/image";
import styles from "./popular.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Popular() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.popular} data-aos="fade-up">
      <Image src={popular} alt="popular" width={275} height={200} />
      <div className={styles.info}>
        <p>Title</p>
        <p>12TL</p>
      </div>
    </div>
  );
}
