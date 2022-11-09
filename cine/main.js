'use strict'
// var cine = {
//     categoria: "ciencia ficcion",
//     titulo: "aliens",
//     anio: 1992
// };


// console.log(cine)

// class vehiculo {
//     constructor  (color, marca, año, kilometraje){
//         this.color = color
//         this.marca = marca
//         this.año = año
//         this.kilometraje = kilometraje
//         this.caracteristicas = `este carro que voy a comprar es un ${marca} del año ${año},sera un kia color ${color} de ${kilometraje} kilometros`
//     }
// }


// const carro = new vehiculo ("negro","kia","2016","200")
// console.log(carro.caracteristicas)

if (typeof (Storage) !== 'undefined') {
    console.log("storege disponible")
} else {
    console.log("storege incompatible")
};

// accedemos al local storage y agregamos estos datos
localStorage.setItem("titulo", "curso de java incompleto");

document.querySelector('#boxContent').innerHTML = localStorage.getItem('titulo');




// objeto Json 
var user = {
    Nombre: "luis",
    Apellido: "sepulveda",
    Edad: 24,
    Gmail: "emptydrake@gmail.com"
};

// estamos guardando en el localStorage nuestro objeto pero para eso devemos pasar el valor user a un una cadena de valor de objecto
localStorage.setItem('user', JSON.stringify(user));

var recuperando = JSON.parse(localStorage.getItem('user'));

console.log(recuperando);
document.querySelector('#boxContent').append(" " + recuperando.Gmail + " - " + recuperando.Nombre);

// localStorage.removeItem('user');

// localStorage.clear();