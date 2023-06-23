import Link from 'next/link';
import styles from './Header.module.scss';
import { useState } from 'react';
export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={styles.navbar}>
      <label
        htmlFor="menu-toggle"
        className={styles['menu-icon']}
        onClick={toggleMenu}
      >
        &#9776;
      </label>
      <ul className={`${styles.menu} ${menuOpen ? styles['show-menu'] : ''}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
