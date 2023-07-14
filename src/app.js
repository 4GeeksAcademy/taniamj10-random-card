/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // declaro los datos
  //esto es un array, que es una lista de datos, puede ser en cualquier orden
  let numero = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  //esto es un array de objetos, porque los datos tienen propiedad y valor
  let simbolo = [
    { S: "♦", C: "red" },
    { S: "♥", C: "red" },
    { S: "♠", C: "black" },
    { S: "♣", C: "black" }
  ];
  //hago la logica
  let numero1 = numero[Math.floor(Math.random() * numero.length)];
  let simbolo1 = simbolo[Math.floor(Math.random() * simbolo.length)];
  //llamo a la logica para que lo pinte en el Html
  document.querySelector(".letra").innerHTML = numero1;
  //llamo a la logica para que lo pinte el simbolo y el estilo
  document.querySelectorAll(".icono").forEach((elem, index) => {
    elem.innerHTML = simbolo1.S;
    elem.style.color = simbolo1.C;
  });
};
