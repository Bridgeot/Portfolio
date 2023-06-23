import styles from '@/styles/sections/experience.module.css'

const Experience = () => {
  return (
    <section className={styles.experience} id='02'>
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.container}>
        <p>2023</p>
        <div className={styles.item}>
          <div className={styles.headings}>
            <h3>Software Engineering Immersive</h3>
            <h4>General Assembly</h4>
          </div>
          <p className={styles.text}>
            Developed and styled interactive web applications for a full-time, intensive curriculum 
            program which consisted of 420+ hrs dedicated towards Full-Stack development.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <p>2022—2023</p>
        <div className={styles.item}>
          <div className={styles.headings}>
            <h3>eCornell Casual Enrollment Rep.</h3>
            <h4>Cornell University</h4>
          </div>
          <p className={styles.text}>
            Guided new and returning students through the process for enrolling and getting started 
            in 90+ online certificate programs.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <p>2019—2021</p>
        <div className={styles.item}>
          <div className={styles.headings}>
            <h3>Economic Self-Sufficiency Specialist</h3>
            <h4>The State of Florida</h4>
          </div>
          <p className={styles.text}>
            Determined the eligibility of various applicants for public assistance programs by 
            meticulously processing a total of 400+ applications each month.
          </p>
        </div>
      </div>
      
      <div className={styles.button}>
        <a href='/' target='_blank'>
          <button className={styles.btn}>View Full Resume</button>
        </a>
        <div className={styles.arrow}>&rarr;</div>
      </div>
    </section>
  )
}

export default Experience
