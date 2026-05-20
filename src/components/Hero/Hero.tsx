import styles from "./Hero.module.css";

interface HeroProps {
  children: React.ReactNode;
}

export default function Hero({ children }: HeroProps) {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                {children}
            </div>
        </section>
    );
}