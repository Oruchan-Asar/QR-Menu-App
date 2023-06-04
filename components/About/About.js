import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.info}>
        <div>
          <h3>Title</h3>
          <p>description</p>
        </div>
        <div className={styles.section}>
          <h4>Email</h4>
          <span>email@email</span>
        </div>
        <div className={styles.section}>
          <h4>Phone</h4>
          <span>+23432423423</span>
        </div>
        <div className={styles.section}>
          <h4>Adres</h4>
          <span>62 West 55th Street, Suite 302 New York, NY, 10230</span>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.128679654904!2d36.06191477592475!3d40.38384057144494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407dedf530e4b917%3A0xc69ccd37c2562913!2sCoffee%20Dream!5e0!3m2!1sen!2str!4v1685895492173!5m2!1sen!2str"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
