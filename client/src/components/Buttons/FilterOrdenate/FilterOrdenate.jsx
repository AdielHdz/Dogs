import styles from "./FilterOrdenate.module.css" 
import { useDispatch, useSelector } from "react-redux";
import { order } from "../../../redux/actions";
const Ordenate = () => {


    const dispatch = useDispatch();


    const handlerOrder = (event) => {
        const typeOrder = event.target.value;


        if (typeOrder === "filtersDisabled") return dispatch(order(typeOrder))

        if (typeOrder === "ascending" || typeOrder === "descending") return dispatch(order(typeOrder));

        if (typeOrder === "ascendingALPHA" || typeOrder === "descendingALPHA") return dispatch(order(typeOrder))
        
    }
    return (
        <div className={styles.containerFilter}>
        <p htmlFor="order" className={styles.label}>Order</p>
        <select name="order" id="order"  onChange={handlerOrder} className={styles.selectOrder}>
            <option value="filtersDisabled" className={styles.options} >Normal</option>
            <option value="ascending" className={styles.options} >Lower to higher: WEIGHT</option>
            <option value="descending" className={styles.options} >Greater to lesser: WEIGHT</option>
            <option value="ascendingALPHA" className={styles.options} >Ascending: ALPHABETICALLY</option>
            <option value="descendingALPHA" className={styles.options} >Descending: ALPHABETICALLY</option>

        </select>
        </div>
    )

};


export default Ordenate;