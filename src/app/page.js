import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <div>
          <h1>
            <span>
              Hello<span className={styles.yellowText}>.</span>
            </span>
            <br />
            <span>
              <span>I am</span>
            </span>
            <br />
            <span>André Flores</span>
          </h1>
        </div>
      </header>
      <section>
        <div>
          <span>André</span>
          <br />
          <span>Flores</span>
        </div>
      </section>
      <section className={styles.infoSection}>
        <img
        src='imagen-para-website.png'
        alt='image'
        className={styles.image}
        />
        <div className={styles.infoContainer}>
          <span className={styles.title+" "+styles.yellowText}>André</span>
          <br />
          <span className={styles.title}>Flores</span>
        </div>
        <div className={styles.list}>
          <ul>
            <li>
              <span className={styles.graytext}>Age: </span> 17
            </li>
            <li>
              <span className={styles.graytext}>Nationality: </span> Guatemalan
            </li>
            <li>
              <span className={styles.graytext}>Skill set: </span> Good chambing
            </li>
            <li>
              <span className={styles.graytext}>Languages: </span> Spanish and English
            </li>
          </ul>
        </div>
      </section>
    </main>

  )
}
