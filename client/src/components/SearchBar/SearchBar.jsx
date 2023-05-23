import styles from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByName, copyDogs, getAllDogs } from "../../redux/actions";
const SearchBar = () => {

    const [ searchDog, setSearchName ] = useState("")

    const dispatch = useDispatch()





    const clickSearch = () => {
        return dispatch(getDogsByName(searchDog))
    }

    const searchHandler = (event) => {
        const evento = event.target;
        setSearchName(evento.value);
    }
    return (
        <div className={styles.divInput}>
            <label className={styles.label} htmlFor="search" onClick={clickSearch}  ><BsSearch style={{ pointerEvents: "none"  }} /></label>
            <input type="text" className={styles.input} name="search" value={searchDog} onChange={searchHandler} placeholder="Find dogs races..."/>
        </ div>
    )
}

export default SearchBar;