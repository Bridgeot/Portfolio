import styles from '@/styles/sections/work.module.css'
import Image from 'next/image'

const Work = () => {
  return (
    <section className={styles.work} id='04'>
      <h2 className={styles.title}>Work</h2>

      <div className={styles.container}>
        <Image src='/P1-image.png' width={133.5} height={60.5} alt='Project 1 image' />
        <div className={styles.item}>
          <a href='/' target='_blank'>
            <h3>Portfolio Site</h3>
          </a>
          <p>
            A minimalistic, personal portfolio website. Coded using VS Code, built with React + Next.js, 
            and deployed on Vercel. Includes a light and dark mode feature.
          </p>
        </div>
      </div>
      
      <div className={styles.button}>
        <a href='https://github.com/Bridgeot' target='_blank'>
          <button className={styles.btn}>View My GitHub</button>
        </a>
        <div className={styles.arrow}>&rarr;</div>
      </div>
    </section>
  )
}

export default Work
