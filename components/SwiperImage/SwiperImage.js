"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./swiperImage.module.css";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

export default function SwiperImage({ images, setWindow = false }) {
  const [width, setWidth] = useState();
  const [slidesPer, setslidesPer] = useState(1);

  useEffect(() => {
    if (setWindow) {
      window.onresize = function () {
        setWidth(window.innerWidth);
      };

      screen.width < 1120 && screen.width > 880
        ? setslidesPer(3)
        : screen.width < 880 && screen.width > 600
        ? setslidesPer(2)
        : screen.width < 660
        ? setslidesPer(1)
        : setslidesPer(4);
    }
  }, [setWindow, width]);

  return (
    <div className={styles.swiper_page}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={slidesPer}
        autoplay={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image className={styles.image} src={image} alt="image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
