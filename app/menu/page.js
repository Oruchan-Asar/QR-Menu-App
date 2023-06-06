"use client";

import MenuItem from "@/components/MenuItem/MenuItem";
import styles from "./page.module.css";
import localFont from "next/font/local";
import menu from "@/mock/menu.js";
import { useState } from "react";
import Image from "next/image";
import dis_mekan from "@/public/place/dis-mekan.png";

const raleway = localFont({ src: "../Raleway.ttf" });

export default function Menu() {
  const [filter, setFilter] = useState(null);

  return (
    <div className={styles.menu}>
      <div className={styles.banner}>
        <div className={styles.absolute}>
          <h1 className={styles.menuTitle}>Menu</h1>
        </div>
        <Image className={styles.image} src={dis_mekan} alt="dis_mekan" />
      </div>
      <div className={styles.filter}>
        {menu.map((item) => (
          <ul key={item.id}>
            <li>
              <button
                className={[
                  `${styles.button} ${filter === item.id ? styles.active : ""}`,
                ]}
                onClick={() => setFilter(item.id)}
              >
                {item.categoryName}
              </button>
            </li>
          </ul>
        ))}
      </div>
      {filter && (
        <button className={styles.cancel} onClick={() => setFilter()}>
          Filtreyi temizle
        </button>
      )}
      <div className="align-center">
        <div className={styles.container}>
          {filter
            ? menu
                .filter((item) => item.id === filter)
                .map((item) => (
                  <>
                    <h2 className={[`${styles.title} ${raleway.className}`]}>
                      {item.categoryName}
                    </h2>
                    <ul className={styles.menus}>
                      {item.products.map((product) => (
                        <li key={product.id}>
                          <MenuItem name={product.name} price={product.price} />
                        </li>
                      ))}
                    </ul>
                  </>
                ))
            : menu.map((item) => (
                <>
                  <h2 className={[`${styles.title} ${raleway.className}`]}>
                    {item.categoryName}
                  </h2>
                  <ul className={styles.menus}>
                    {item.products.map((product) => (
                      <li key={product.id}>
                        <MenuItem name={product.name} price={product.price} />
                      </li>
                    ))}
                  </ul>
                </>
              ))}
        </div>
      </div>
    </div>
  );
}
