import styles from "./Home.module.css"
import SearchBar from "../SearchBar/SearchBar";
import Cards from "../Cards/Cards";
import Wrapper from "../Wrapper/Wrapper";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, getTemperaments, copyDogs } from "../../redux/actions";
import FilterTemperaments from "../Buttons/FilterTemperaments/FilterTemperaments";
import Ordenate from "../Buttons/FilterOrdenate/FilterOrdenate";
const Home = () => {
    
    const dispatch = useDispatch();



    const { allDogs, changes } = useSelector(state =>  state)
    


    const cards_in_page = 8;
    const dogs = changes.length ? changes : allDogs
    const [wrapper, setWrapper] = useState({
            pages: 0,
            buttonPages: [],
            actualPage: 1,
            previus: 0,
            next: 8,
            dogs: [],
            dogsInPage: [],
        })




    
    const wrapperHandler = (event) => {
        const name = event.target.name;

        


        if (!isNaN(name)) { 
            setWrapper({
                ...wrapper,
                previus: name * cards_in_page - cards_in_page,
                next: name * cards_in_page,
                dogsInPage: wrapper.dogs.slice(name * cards_in_page - cards_in_page, name * cards_in_page ),
                actualPage: name,
             })
        }

        switch (name) {
            case "next":
                if (wrapper.actualPage == wrapper.pages) return
                return setWrapper({
                    ...wrapper,
                    previus: wrapper.previus + cards_in_page,
                    next: wrapper.next + cards_in_page,
                    dogsInPage: wrapper.dogs.slice(wrapper.previus + cards_in_page, wrapper.next + cards_in_page),
                    actualPage: wrapper.actualPage + 1
                })
            

            case "previus":
                if (wrapper.actualPage == 1) return 
                return setWrapper({ ...wrapper, 
                    previus: wrapper.previus - cards_in_page,
                    next: wrapper.next - cards_in_page,
                    dogsInPage: wrapper.dogs.slice(wrapper.previus - cards_in_page , wrapper.next - cards_in_page),
                    actualPage: wrapper.actualPage - 1
                    })

            
            default: 
            return 
        }
    
          
        }
      
    
   
    


    useEffect(() => {

    

        dispatch(getAllDogs())
        dispatch(getTemperaments())
        setWrapper({ ...wrapper, 
            dogs: dogs, 
            pages: Math.ceil(dogs.length / cards_in_page),
            dogsInPage: dogs.slice(wrapper.previus, wrapper.next),
            buttonPages: Array.from(Array(Math.ceil(dogs.length / cards_in_page)).keys()).map(page => page + 1)
        
        })

    
    
        
    },[dogs.length])

    

    




    

        
    

    return (
        <article className={styles.article} >
            <SearchBar />
            <div className={styles.container__filters}>
            <FilterTemperaments />
            <Ordenate />
            </div>
            <header className={styles.footer}>
                
                 <Wrapper wrapper={wrapper} wrapperHandler={wrapperHandler} />
            </header>
            <Cards dogs={wrapper.dogsInPage} />
            
            
            
        </article>
    )
};


export default Home;