"use client";

import MenuItem from "@/components/MenuItem/MenuItem";
import styles from "./page.module.css";
import localFont from "next/font/local";
import menu from "@/mock/menu.js";
import { useEffect, useState } from "react";
import Image from "next/image";
import dis_mekan from "@/public/place/dis-mekan.png";

const raleway = localFont({ src: "../Raleway.ttf" });

export default function Menu() {
  const [filter, setFilter] = useState(null);
  const [filteredMenu, setFilteredMenu] = useState(menu);

  useEffect(() => {
    if (filter) {
      const foundMenu = menu.find((item) => item.id === filter);
      setFilteredMenu(foundMenu ? [foundMenu] : menu);
    } else {
      setFilteredMenu(menu);
    }
  }, [filter]);

  return (
    <div className={styles.menu}>
      <div className={styles.banner}>
        <div className={styles.absolute}>
          <h1 className={styles.menuTitle}>Menü</h1>
        </div>
        <Image className={styles.image} src={dis_mekan} alt="dis_mekan" />
      </div>
      <div className={styles.filter}>
        {menu.map((item, index) => (
          <button
            className={[
              `${styles.button} ${filter === item.id ? styles.active : ""}`,
            ]}
            onClick={() => setFilter(item.id)}
            key={index}
          >
            {item.categoryName}
          </button>
        ))}
      </div>
      {filter && (
        <button className={styles.cancel} onClick={() => setFilter(null)}>
          Filtreyi temizle
        </button>
      )}
      <div className="align-center">
        <div className={styles.container}>
          {filteredMenu.map((item, index) => (
            <div key={index}>
              <h2 className={[`${styles.title} ${raleway.className}`]}>
                {item.categoryName}
              </h2>
              <ul className={styles.menus}>
                {item.products.map((product, index) => (
                  <li key={index}>
                    <MenuItem name={product.name} price={product.price} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
