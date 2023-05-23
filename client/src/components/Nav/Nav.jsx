import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
const Nav = () => {
    return (
        <nav className={styles.nav}>
            <Link className={styles.link} to="/home">Home</Link>
            <h1 className={styles.title}> Your favorites Dogs</h1>
            <Link className={styles.link}  to="/newDog">Add new dog</Link>
        </ nav>
    )
};


export default Nav;