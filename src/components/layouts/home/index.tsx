import styles from './index.module.scss';
export default function Home() {
  return (
    <div className={styles['main-container']}>
      <section className={styles.content}>
        <h1 className={styles.title}>
          Hector Manrique Matus <span>Software developer</span>
        </h1>
        <div className={styles.location}></div>
      </section>
    </div>
  );
}
