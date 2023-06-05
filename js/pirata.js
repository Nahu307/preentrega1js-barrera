// Algoritmo con un condicional en Js

let esLunes = true;

if (esLunes) {
  console.log("Hoy es lunes. Ánimo, es el primer día de la semana.");
} else {
  console.log("Hoy no es lunes. Disfruta del día.");
}



// Algoritmo utilizando un ciclo en Js

let nombre = prompt("Ingresa tu nombre:");

// Verificar si el nombre está vacío
if (nombre === "") {
  console.log("No ingresaste un nombre.");
} else {
  console.log("Hola, " + nombre + "!");
}

// var searchInput = document.getElementById('search-input');
// var searchButton = document.getElementById('search-button');
// var searchResults = document.getElementById('search-results');


// searchButton.addEventListener('click', function() {
// var searchTerm = searchInput.value;


// var results = performSearch(searchTerm);
// displayResults(results);
// });


// function performSearch(searchTerm) {
  
// var exampleResults = [
//     { title: 'Resultado 1', url: 'http://ejemplo.com/resultado1' },
//     { title: 'Resultado 2', url: 'http://ejemplo.com/resultado2' },
//     { title: 'Resultado 3', url: 'http://ejemplo.com/resultado3' }
// ];

// return exampleResults;
// }


// function displayResults(results) {
  
// searchResults.innerHTML = '';

  
// results.forEach(function(result) {
//     var resultItem = document.createElement('a');
//     resultItem.href = result.url;
//     resultItem.textContent = result.title;
//     searchResults.appendChild(resultItem);
// });
// }

// console.log("Estamos conectado")

// let edad = 18;
// let licenciaConducir = true;
// if (edad >= 18 && licenciaConducir) {
// console.log("Excelente");
// console.log("Toma, puedes manejar el auto");
// } else if (edad >= 18 && !licenciaConducir) {
// console.log("Excelente");
// console.log("Vamos a sacar el carnet");
// } else {
// console.log("Vuelve más tarde");
// }

//la estructura consta de 3 partes
//desde ---> Inicializacion
//hasta ---> Condicion
//

//for(let i=0; i< 10; i++){
//alert(i)

    //VARIABLES GLOBALES
//     let billetera
//     let auto

     //FIZZ BUZZ!!!
// for(let i = 1; i<= 100; i++){
    //VARIABLES LOCALES
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz");
//     }else if (i % 3 === 0){
//         console.log("FIZZ");
//     }else if(i % 5 === 0){
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     }
// }