import styles from '@/styles/components/header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <h1 className={styles.heading}>
          Bridget Gordon
        </h1>
      </Link>
      <p className={styles.text}>
        Front-End Developer / Full-Stack Developer / 
        Adobe Digital Academy Scholar 2023
      </p>
    </header>
  )
}

export default Header
