import { 
    GET_ALL_DOGS, 
    GET_TEMPERAMENTS,
    ORDER,
    GET_DOGS_BY_NAME,
    GET_DOG_DETAIL,
    GET_DOGS_BY_TEMPERAMENT,
    CLEAN_PAGE
} from "./actions";



const initialState = {
    allDogs: [],
    allTemperaments: [],
    changes: [],
    dogDetail: {},
}

const rootReducer = (state = initialState, action) => {

  
    switch (action.type) {

        case GET_ALL_DOGS: 

        return { ...state, allDogs: action.payload }


        case GET_TEMPERAMENTS:
            return { ...state, allTemperaments: action.payload }

        case ORDER:
            if (action.payload === "ascending") {
                let orderedArray = state.allDogs.filter(dog => !isNaN(dog.weight.metric.split("-")[0])).sort((a, b) => {
                    const num1 = Number(a.weight.metric.split("-")[0])
                    const num2 = Number(b.weight.metric.split("-")[0])

                    
                    return num1 - num2
                })

                return { ...state, changes: orderedArray }
            } else if (action.payload === "descending") {
                let orderedArray = state.allDogs.filter(dog => !isNaN(dog.weight.metric.split("-")[0])).sort((a, b) => {
                    const num1 = Number(a.weight.metric.split("-")[0])
                    const num2 = Number(b.weight.metric.split("-")[0])

                    return num2 - num1
                })
                
                return { ...state, changes: orderedArray }
            } else if (action.payload === "ascendingALPHA") {
                const orderedArray = state.allDogs.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                      } else if (a.name > b.name) {
                        return 1;
                      } else {
                        return 0;
                      }
                });
                return { ...state, changes: orderedArray }
            } else if (action.payload === "descendingALPHA") {
                const orderedArray = state.allDogs.sort((a, b) => {
                    if (a.name < b.name) {
                        return 1;
                      } else if (a.name > b.name) {
                        return -1;
                      } else {
                        return 0;
                      }
                });
                return { ...state, changes: orderedArray }
            } else {
                return { ...state, changes: state.allDogs }
            }

        case GET_DOGS_BY_NAME:
            if (!action.payload.length) {
                return { ...state }
            } else {
                return { ...state, changes: action.payload }
            }

        case GET_DOG_DETAIL: 
            return { ...state, dogDetail: action.payload }

        
        case GET_DOGS_BY_TEMPERAMENT: 
        const dogsFiltered = state.allDogs.filter(dog => dog.temperament?.includes(action.payload))
        return { ...state, changes: dogsFiltered }

        case CLEAN_PAGE: 
            return { ...state, dogDetail: {} }


        default:
            return { ...state } 
    }
};

export default rootReducer;