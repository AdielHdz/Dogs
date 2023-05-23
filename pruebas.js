/* fetch("http://localhost:3001/dogs")
.then(response => response.json())
.then(data => {


  console.log(data.sort((a, b) => {
    if (a.name < b.name) {
      return 1;
    } else if (a.name > b.name) {
      return -1;
    } else {
      return 0;
    }
  })) */

  
  /* const newArr = data.filter(dog => !isNaN(dog.weight.metric.split("-")[0])).sort((a, b) => {
    const num1 = Number(a.weight.metric.split("-")[0]) 
    const num2 = Number(b.weight.metric.split("-")[0])

    return num2 - num1
});

console.log(newArr) */

/* }) 
 */

/* const anArray = ["Hola", "Adiel", "comida", "serpiente", "ventilador", "catrina", "hasbro", "carlota"];

anArray.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
})


console.log(anArray)
 */

/* 
const temperament = "Stubborn";

fetch("http://localhost:3001/dogs")
.then(response => response.json())
.then(data => {
  const dogFiltered = data.filter(dog => dog.temperament?.includes(temperament))

  console.log(dogFiltered)
}) 
 */
/* console.log("Hola stubborn".includes(temperament)) */



/* const pageNumber = Array.from(Array(10).keys()).map(
  pageNumber => pageNumber + 1
)

console.log(pageNumber) */


