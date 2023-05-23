import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogDetail, cleanPage } from "../../redux/actions";
import styles from "./DogDetail.module.css"
const DogDetail = () => {

    const dispatch = useDispatch()
    const data = useParams();
    const { id, image, name, height, weight, temperament, age } = useSelector(state => state.dogDetail)

    useEffect(() => {
        dispatch(getDogDetail(data.id))


        return dispatch(cleanPage()) 
    }, [])

    return (
        <section className={styles.section}>
            {
                !name 
                    ? (<div className={styles.ring}>Loading
                        <span className={styles.span}></span>
                    </div>)
                :  ( 
                    <div className={styles.section__container}>

            <div className={styles.container__img}>
                <img src={image} alt={name + id} className={styles.img} />
            </div>
            <div className={styles.container__Data}>

                <div className={styles.container__title}>
                    <h1 className={styles.title}>{name}</h1>
                </div>

                <div className={styles.container__height}>
                    <h2 className={styles.container__subtitle} >Height</h2>
                    <p className={styles.container__paragraph}>Inches: {height?.imperial}</p>
                    <p className={styles.container__paragraph}>Centimeters: {height?.metric}</p>
                </div>

                <div className={styles.container__weight}>
                    <h2 className={styles.container__subtitle}>Weight</h2>
                    <p className={styles.container__paragraph} >Pounds: {weight?.imperial}</p>
                    <p className={styles.container__paragraph} >Kilograms: {weight?.metric}</p>
                </div>

                <div className={styles.container__temperament} >
                    <h2 className={styles.container__subtitle}>Temperaments</h2>
                    <p className={styles.container__paragraph}>{temperament}</p>
                </div>

                <div className={styles.container__age}>
                    {age ? (
                        <h2 className={styles.container__subtitle}>Average life</h2>
                    ) : (
                        <></>
                    )}
                    <p className={styles.container__paragraph}>{age}</p>

                </div>
            </div>
            


            </div>
                 )
            }

        </section>
    )
};


export default DogDetail;