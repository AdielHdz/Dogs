import styles from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = (props) => {

    const { id, name, image, temperament, weight } = props;

    

return (
    <section className={styles.section}>
        <Link to={`/detailDog/${id}`} className={styles.link}>
            <h2 className={styles.name}>{name}</h2>
            <img src={image} alt={name} className={styles.img} />

            <div className={styles.container__texts}>

                <div className={styles.container__elements}>
                    {temperament ? (<h4 className={styles.h4}>Temperaments</h4>) : (<></>)}

                    <p className={styles.paragraphTemperament} >{temperament}</p>

                </div>

                <div className={styles.container__elements}>
                    <h4 className={styles.h4} >Weight</h4>

                    <div className={styles.paragraphs} >
                    <p className={styles.paragraph} >Libras: {weight?.imperial}</p>
                    <p className={styles.paragraph} >Kgs: {weight?.metric}</p>

                    </div>



                </div>

            </div>

        </Link>

    </ section>
    )
};


export default Card;



