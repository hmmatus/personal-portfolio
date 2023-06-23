import Image from 'next/image';
import styles from './index.module.scss';
import { education, experience } from './config';
export default function About() {
  return (
    <div className={styles.container}>
      <section className={styles.profile}>
        <div className={styles['image-container']}>
          <Image
            className={styles.image}
            width={200}
            height={300}
            alt="Profile"
            src="/profile.jpg"
          />
        </div>
        <div className={styles['description-container']}>
          <h1 className={styles.title}>Hector Manrique Matus</h1>
          <h2 className={styles.subtitle}>Frontend Developer</h2>
          <p className={styles.paragraph}>
            Soy desarrollador frontend, me especializo en el desarrollo de
            aplicaciones móviles utilizando react native con más de 3 años de
            experiencia, he trabajado con tecnologías web como React, Next, Vue.
            Cuento con experiencia trabajando con tecnologias agiles como scrum
            y kanban. Siempre dispuesto a adaptarme a las necesidades de cada
            proyecto y sobre aprender nuevas tecnologías.
          </p>
        </div>
      </section>
      <section className={styles.row}>
        <div className={styles['m-r-3']}>
          <h1 className={styles.title}>Experiencia</h1>
          <ul className={styles.timeline}>
            {experience.map((item, index) => (
              <li key={index}>
                <div className={styles.title}>{item.year}</div>
                <div className={styles.details}>
                  <h1 className={styles['details-title']}>{item.data.title}</h1>
                  <h2 className={styles['details-subtitle']}>
                    {item.data.subtitle}
                  </h2>
                  <p className={styles['details-description']}>
                    {item.data.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className={styles.title}>Educación</h1>
          <ul className={styles.timeline}>
            {education.map((item, index) => (
              <li key={index}>
                <div className={styles.title}>{item.year}</div>
                <div className={styles.details}>
                  <h1 className={styles['details-title']}>{item.data.title}</h1>
                  <h2 className={styles['details-subtitle']}>
                    {item.data.subtitle}
                  </h2>
                  <p className={styles['details-description']}>
                    {item.data.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
