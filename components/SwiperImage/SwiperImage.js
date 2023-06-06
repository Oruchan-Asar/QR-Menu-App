"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay } from "swiper";
import styles from "./swiperImage.module.css";

export default function SwiperImage({ images }) {
  return (
    <div className={styles.swiper_page}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
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
