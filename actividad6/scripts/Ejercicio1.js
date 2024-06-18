console.log('Estoy conectado a java');

let edad = parseInt(prompt("Por favor ingrese su edad"));
let ciudadania = parseInt(prompt("Escriba si o no en caso de ser o no ciudadano colombiano"));
let esCiudadano = confirm("¿Eres ciudadano colombiano?");

console.log(edad, ciudadania, esCiudadano);

if(edad >= 18 && esCiudadano == true){
    alert('Eres elegible para votar en las proximas elecciones')

}else{}