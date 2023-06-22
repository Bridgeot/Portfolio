import styles from '@/styles/page.module.css'
import Header from '@/components/Header'
import About from '@/sections/About'
import Experience from '@/sections/Experience'
import Skills from '@/sections/Skills'
import Work from '@/sections/Work'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <Header />
      </div>
      <div className={styles.container}>
        <About />
        <Experience />
        <Skills />
        <Work />
        <Footer />
      </div>
    </section>
  )
}

export default Home
