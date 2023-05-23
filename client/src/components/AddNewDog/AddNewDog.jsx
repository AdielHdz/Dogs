import { useEffect } from "react";
import styles from "./AddNewDog.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../redux/actions";
const AddNewDog = () => {

    const temperaments = useSelector(state => state.allTemperaments)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTemperaments());
    }, []) 
    return (
        <form className={styles.form}>
            <div className={styles.container}>
                <h2 className={styles.title__newDog}>Add new Dog</h2>
                <section className={styles.container__inputs}>

                    <div className={styles.inputs}>
                        <label htmlFor="name" className={styles.labels} >Race</label>
                        <input type="text" name="name" className={styles.input} />
                    </div>
                    <div className={styles.inputs}>

                        <label htmlFor="height" className={styles.labels}>Height</label>

                        <div className={styles.container__wh__inputs}>
                            <input type="text" name="height" className={styles.input} />

                            <label htmlFor="none" className={styles.guion}>-</label>
                            <input type="text" name="height" className={styles.input} />
                        </div>

                    </div>

                    <div className={styles.inputs}>
                        <label htmlFor="weight" className={styles.labels}>Weight</label>
                        
                        <div className={styles.container__wh__inputs}>
                            <input type="text" name="height" className={styles.input} />

                            <label htmlFor="none" className={styles.guion}>-</label>
                            <input type="text" name="height" className={styles.input} />
                        </div>
                    </div>

                    <div className={styles.inputs}>
                        <label htmlFor="averagelife" className={styles.labels}>Average Life</label>
                        <input type="text" name="averagelife" className={styles.input}  />
                    </div>
                    <div className={styles.inputs}>
                        <label htmlFor="temperament" className={styles.labels}>Temperament</label>
                        <select name="temperaments" id="temperaments">
                            {
                                temperaments.map(temperament => <option value={temperament.id}>{temperament.name}</option>)
                            }
                        </select>
                    </div>
                    <button className={styles.btn__createNewDog}>Create new dog</button>


                </section>

                


            </div>
        </form>
       
    )
};


export default AddNewDog;