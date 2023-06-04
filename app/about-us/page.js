import About from "@/components/About/About";
import styles from "./page.module.css";
import instagram from "@/public/socialMedias/instagram.svg";
import facebook from "@/public/socialMedias/facebook.svg";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div>
      <div className={styles.mid}>
        <h2>Hakkımızda</h2>
      </div>
      <div className={styles.social_medias}>
        <Link href="https://www.instagram.com/_coffeedreamm/">
          <div className={styles.social_media}>
            <Image src={instagram} alt="instagram" /> Instagram
          </div>
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100093386436224">
          <div className={styles.social_media}>
            <Image src={facebook} alt="facebook" />
            Facebook
          </div>
        </Link>
      </div>
      <div className="align-center">
        <div className={styles.section}>
          <About />
        </div>
      </div>
    </div>
  );
}
