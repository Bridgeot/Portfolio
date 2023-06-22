import styles from '@/styles/components/navbar.module.css'
import Toggle from '@/components/Toggle'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href='#01'>01.</a>
        </li>
        <li className={styles.link}>
          <a href='#02'>02.</a>
        </li>
        <li className={styles.link}>
          <a href='#03'>03.</a>
        </li>
        <li className={styles.link}>
          <a href='#04'>04.</a>
        </li>
        <li className={styles.link}>
          <Toggle />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
