import styles from './about.module.css'

const about = () => {
  return (
    <>
      <div id='about' className={styles.aboutMain}>
        <div className={styles.aboutContainer}>
          <h1 className={styles.aboutHead}>About</h1>
          <span className={styles.aboutPara}>
            Price is monitored for twenty two essential commodities(Rice, Wheat, Atta, Gram Dal, Tur (Arhar) Dal, Urad Dal , Moong Dal, Masur Dal, Sugar, Gur, Groundnut Oil, Mustard Oil, Vanaspati, Sunflower Oil, Soya Oil, Palm Oil, Tea, Milk, Potato, Onion, Tomato and Salt) based on data collected from 550 market centres spread across the country representing North, West, East, South and North-eastern regions of the country.
            Price Monitoring  analyses the price situation and gives advance feedback for taking appropriate policy measures to prevent undesired shortfall in the availability of essential commodities.
          </span>
        </div>
        <hr />
      </div>
    </>
  )
}

export default about
