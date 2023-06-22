import styles from '@/styles/sections/about.module.css'

const About = () => {
  return (
    <section className={styles.about} id='01'>
      <p className={styles.text}>
        Hi, I am a Front-End/Full-Stack Developer with experience in building responsive and user-friendly 
        websites. Previously, I was employed in both the customer service and public education industries, 
        however, I decided to fully transition into tech as a developer because it is a field that I find 
        myself to be geniunely much more passionate about.
      </p>
      <p className={styles.text}>
        I am currently looking to become apart of an organization that can provide me with better 
        opportunities to work with new, cutting edge tools/technologies, learn more about how to 
        build with accessibility in mind, as well as collaborate on projects with other developers.
      </p>
      <p className={styles.text}>
        Outside of tech, I can typically be found watching anime and tennis, walking my dog around 
        the neighborhood, reading articles online, or trying out new bath salts.
      </p>
    </section>
  )
}

export default About
