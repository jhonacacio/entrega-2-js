let cantidadDeCuotas = 0;
let valorDeCuota = 0;
//Seleccion de clase de auto
let nombreAuto = prompt(`Que tipo de auto buscas? \nElige entre Camioneta, Sedan o Suv`).toUpperCase();
while(nombreAuto !== 'SUV' && nombreAuto !== 'SEDAN' && nombreAuto !== 'CAMIONETA'){
    alert('Tipo de auto incorrecto, escribe una de las opciones disponibles');
    nombreAuto = prompt(`Que tipo de auto buscas? \nElige entre Camioneta, Sedan o Suv`).toUpperCase();
}
// filtrado de autos por categorias
const modeloAutoDisponibles = modelosAutos.filter(auto => auto.tipoAuto === nombreAuto);
// creacion de un nuevo array con los nombres de los modelos de autos de la categoria seleccionada
const nombreModeloAuto = modeloAutoDisponibles.map((auto) => auto.modeloAuto);
// seleccion del modelo de auto
let nombres = nombreModeloAuto.join('\n');
let seleccion = prompt(`elige entre las opciones:
${nombres} `).toUpperCase();
while(seleccion !== nombreModeloAuto[0] && seleccion !== nombreModeloAuto[1] && seleccion !== nombreModeloAuto[2] && seleccion !== nombreModeloAuto[3] && seleccion !== nombreModeloAuto[4] && seleccion !== nombreModeloAuto[5]){
    alert('Modelo de auto incorrecto, escribe una de las opciones disponibles');
    seleccion = prompt(`elige entre las opciones:
${nombres}`).toUpperCase();
}
const autoSeleccionado = modeloAutoDisponibles.find(autos => autos.modeloAuto === seleccion);
alert(`Has seleccionado el modelo ${autoSeleccionado.modeloAuto} \nPrecio lista: ${autoSeleccionado.precioLista} $\nDesde: ${autoSeleccionado.precioAuto} $`)

// Cantidad de cuotas y validacion
function validarCantidadDeCuotas(cantidadDeCuotas) {
    while(cantidadDeCuotas < 1||cantidadDeCuotas > 12 || Number.isNaN(cantidadDeCuotas) ){
        alert('Cantidad de cuotas no valida, ingrese un numero correcto de cuotas');
        cantidadDeCuotas = Number(prompt('En cuantas cuotas deseas pagar?', 'elije entre 1 a 12 cuotas'));
    }
    return cantidadDeCuotas
}
function cuotas() {
    let cantidadDeCuotas = Number(prompt('En cuantas cuotas deseas pagar?', 'elije entre 1 a 12 cuotas'));
    cantidadDeCuotas = validarCantidadDeCuotas(cantidadDeCuotas);
return cantidadDeCuotas
}
cantidadDeCuotas = cuotas();
// // Calcular el valor de la cuota
const calculoPrecioCuotas = (precio,cantidadDeCuotas)=> {
    if(cantidadDeCuotas <= 1){
        precio = precio;
    }else if(cantidadDeCuotas <= 5){
        precio += precio * 0.02;
    }else if(cantidadDeCuotas <= 9){
        precio += precio * 0.04;
    }else{ precio += precio * 0.08;}
    const valorDeCuota = Math.round(precio / cantidadDeCuotas) ;
    return valorDeCuota
}
valorDeCuota = calculoPrecioCuotas(autoSeleccionado.precioAuto, cantidadDeCuotas);
let valorTotal = cantidadDeCuotas * valorDeCuota;
confirm(`Seleccionaste el auto: ${autoSeleccionado.modeloAuto}\nEl valor total de tu compra es: ${autoSeleccionado.precioAuto} $\nElegiste pagar ${cantidadDeCuotas} cuotas\nEl valor de cada cuota es de:${valorDeCuota} $\nEl total a pagar es: ${valorTotal} $`)

