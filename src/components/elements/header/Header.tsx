import Link from 'next/link';
import styles from './Header.module.scss';
export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link className={styles.link} href="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="/about">
            Sobre nosotros
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="#">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
