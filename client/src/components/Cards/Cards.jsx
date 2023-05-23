import styles from "./Cards.module.css";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const Cards = (props) => {

    
    
    const { dogs } = props;


    


    return (
        <div className={styles.Cards} >
            {
            dogs.map(dog => (<Card id={dog.id} name={dog.name} key={dog.id} image={dog.image} temperament={dog.temperament} weight={dog.weight} />))
               
            }
        </div>
    )
};


export default Cards;