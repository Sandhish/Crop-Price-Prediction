import styles from './home.module.css'

const Home = () => {
  return (
    <div id='home' className={styles.heroContainer}>
        <img className={styles.heroImg} src="src/assets/mainPic.jpg" alt="heroPic" />
        <span className={styles.heroSub}>Sowing Data,<br/>Reaping Insights!</span>
    </div>
  )
}

export default Home