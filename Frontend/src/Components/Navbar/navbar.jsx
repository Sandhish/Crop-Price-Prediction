import styles from './navbar.module.css';
import logo from '/src/assets/logo.jpg';

function Navbar() {
    return (
        <>
            <div id='navbar' className={styles.navContainer}>
                <div className={styles.logo}>
                    <img src={logo} className={styles.logo} alt="Logo" />
                </div>
                <div className={styles.enclose}>
                    <a href="#navbar">
                        <p className={styles.contents}>
                            <h3>Home</h3>
                        </p>
                    </a>
                    <a href="#prediction">
                        <p className={styles.contents}>
                            <h3>Prediction</h3>
                        </p>
                    </a>
                    <a href="#about">
                        <p className={styles.contents}>
                            <h3>About</h3>
                        </p>
                    </a>
                    <a href="#contact">
                        <p className={styles.contents}>
                            <h3>Contact</h3>
                        </p>
                    </a>
                    
                </div>
            </div>
        </>
    );
}

export default Navbar;
