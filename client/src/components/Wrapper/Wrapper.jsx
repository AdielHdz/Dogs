import styles from "./Wrapper.module.css"
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
const Wrapper = (props) => {
   
    const { wrapper, wrapperHandler } = props;

    const { buttonPages } = wrapper;
   

    

    
    
    return (
        <section>
             <div className={styles.container}>
            
            <button 
            className={styles.buttons} 
            onClick={wrapperHandler} 
            name="previus" >
             
            <GrFormPreviousLink 
            className={styles.icons} 
            name="previus"  
            style={{ pointerEvents: "none" }}
            /> 
            
            </button>


            {
                buttonPages.map(numberPage => <button onClick={wrapperHandler} name={numberPage} className={styles.buttonWrapper} >{ numberPage }</button>)
            }

            
            <button 
            className={styles.buttons} 
            onClick={wrapperHandler} 
            name="next" > 
           
             <GrFormNextLink className={styles.icons} name="next" style={{ pointerEvents: "none" }}/> 
           
            </button>
            
            
        </div>
        </section>
       
    )
};


export default Wrapper;