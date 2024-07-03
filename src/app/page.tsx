import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.welcomeMessage}>
         Welcome, I can help you summarize Terms of Service
      </div>
    </main>
  );
}
