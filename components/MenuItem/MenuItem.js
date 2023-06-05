"use client";

import styles from "./menuItem.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function MenuItem({ name, price }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.menu_item} data-aos="fade-up">
      <span>{name}</span>
      <p>{price}TL</p>
    </div>
  );
}
