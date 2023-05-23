import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {

    return (
        <body className={styles.body}>
            <div className={styles.div}>
                <Link className={styles.link} to="/home">Use Now</Link>
                
                
            </div>
        </body>
    )
};


export default LandingPage;