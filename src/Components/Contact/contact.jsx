import styles from './contact.module.css'

const Contact = () => {
  return (
    <>
      <div id='contact' className={styles.contactMain}>
        <h1 className={styles.contactHead}>Contact Us</h1>
        <div className={styles.contactContainer}>
          <div className={styles.contactDetail}>
              Ministry of Conumser Affairs<br />
              Food and Public Distribution<br />
              Delhi - 110001
          </div>

          <div className={styles.contact}>
            <span className={styles.details}>
              Ph: +919874561239<br />
              For any Support or Complaints: <a href='#' className={styles.link}>Chat with Us</a><br />
              For enquires: consumeraffairs@gmail.com
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
