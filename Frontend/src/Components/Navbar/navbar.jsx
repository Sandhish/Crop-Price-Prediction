import styles from './navbar.module.css';
import logo from '/src/assets/logo.jpg';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div id='navbar' className={styles.navContainer}>
            <div className={styles.logo}>
                <img src={logo} className={styles.logo} alt="Logo" />
            </div>

            <div className={styles.navGroup}>
                <a href="#navbar" className={styles.navId}>
                    <p className={styles.navTitle}>Home</p>
                </a>
                <a href="#prediction" className={styles.navId}>
                    <p className={styles.navTitle}>Prediction</p>
                </a>
                <a href="#cart" className={styles.navId}>
                    <p className={styles.navTitle}>Cart</p>
                </a>
                <a href="#about" className={styles.navId}>
                    <p className={styles.navTitle}>About</p>
                </a>
                <a href="#contact" className={styles.navId}>
                    <p className={styles.navTitle}>Contact</p>
                </a>
            </div>

            <div className={styles.navLoginButton}>
                <Link to="/login" className={styles.navId}>
                    <p className={styles.loginButton}>Login</p>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
