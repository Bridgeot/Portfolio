import styles from '@/styles/sections/skills.module.css'
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { DiMongodb, DiNodejsSmall } from 'react-icons/di'
import { SiExpress, SiNextdotjs } from 'react-icons/si'

const Skills = () => {
  return (
    <section className={styles.skills} id='03'>
      <h2 className={styles.title}>Skills</h2>

      <h3 className={styles.heading}>
        Below I&apos;ve listed a few of the technologies that I&apos;ve had the 
        opportunity to work with the most:
      </h3>

      <ul className={styles.items}>
        <li className={styles.item}>
          <FaHtml5 />
          <p>HTML</p>
        </li>
        <li className={styles.item}>
          <FaCss3Alt />
          <p>CSS</p>
        </li>
        <li className={styles.item}>
          <FaJs />
          <p>JavaScript</p>
        </li>
        <li className={styles.item}>
          <SiNextdotjs />
          <p>Next.js</p>
        </li>
        <li className={styles.item}>
          <DiMongodb />
          <p>MongoDB</p>
        </li>
        <li className={styles.item}>
          <SiExpress />
          <p>Express</p>
        </li>
        <li className={styles.item}>
          <FaReact />
          <p>React</p>
        </li>
        <li className={styles.item}>
          <DiNodejsSmall />
          <p>Node.js</p>
        </li>
      </ul>
    </section>
  )
}

export default Skills
