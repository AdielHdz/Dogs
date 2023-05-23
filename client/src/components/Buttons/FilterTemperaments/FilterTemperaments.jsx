import styles from "./FilterTemperaments.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getDogsByTemperament } from "../../../redux/actions"

const FilterTemperaments = () => {

    const temperaments = useSelector(state => state.allTemperaments);
    const dispatch = useDispatch();
    const filterHandler = (event) => {
        const temperament = event.target.value;
        dispatch(getDogsByTemperament(temperament))
    };

    return (
        <div className={styles.containerFilters}>

            <p htmlFor="temperaments" className={styles.label} >Temperaments </p>
            <select name="temperaments" id="temperaments" className={styles.select} onChange={filterHandler} >
                <option>All Temperaments</option>
                {
                    temperaments.map(temperament => <option value={temperament.name} className={styles.options} >{temperament.name}</option>)
                }
            </select>
        </div>
    )
};


export default FilterTemperaments;