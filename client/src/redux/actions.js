import axios from "axios"
const URL_ALL_DOGS = process.env.REACT_APP_ALLDOGS;
const URL_TEMPERAMENTS = process.env.REACT_APP_TEMPERAMENTS;

export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const ORDER = "ORDER";
export const GET_DOGS_BY_NAME = "GET_DOGS_BY_NAME";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
export const GET_DOGS_BY_TEMPERAMENT = "GET_DOGS_BY_TEMPERAMENT";
export const CLEAN_PAGE = "CLEAN_PAGE"; 



export const getAllDogs = () => {

    return async function (dispatch) {
        return await axios.get(URL_ALL_DOGS)
        .then(response => dispatch({ type: GET_ALL_DOGS, payload: response.data }))
    } 
};

export const getTemperaments = () => {
    return async function (dispatch) {
        return await axios.get(URL_TEMPERAMENTS)
        .then(response => dispatch({ type: GET_TEMPERAMENTS, payload: response.data }))
    }
};




export const order = (typeOrder) => {
    return { type: ORDER, payload: typeOrder }
};


export const getDogsByName = (searchDog) => {

    return async function (dispatch) {
        return await axios.get(`http://localhost:3001/dogs?name=${searchDog}`)
        .then(response => dispatch( { type: GET_DOGS_BY_NAME, payload: response.data } ))
    }
};


export const getDogDetail = (id) => {
    return async function (dispatch) {
        return axios.get(`http://localhost:3001/dogs/${id}`)
        .then(response => dispatch({ type: GET_DOG_DETAIL, payload: response.data }))
    }
};


export const getDogsByTemperament = (temperament) => {
    return { type: GET_DOGS_BY_TEMPERAMENT, payload: temperament }
};


export const cleanPage = () => {
    return { type: CLEAN_PAGE }
}

