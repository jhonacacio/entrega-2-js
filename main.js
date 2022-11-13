let cantidadDeCuotas = 0;
let valorDeCuota = 0;

let nombreAuto = prompt(`Que tipo de auto buscas? \nElige entre Camioneta, Sedan o Suv`).toUpperCase();
console.log(nombreAuto)
while(nombreAuto !== 'SUV' && nombreAuto !== 'SEDAN' && nombreAuto !== 'CAMIONETA'){
    alert('Tipo de auto incorrecto, escribe una de las opciones disponibles');
    nombreAuto = prompt(`Que tipo de auto buscas? \nElige entre Camioneta, Sedan o Suv`).toUpperCase();
}
const modeloAutoDisponibles = modelosAutos.filter(auto => auto.tipoAuto === nombreAuto);
modeloAutoDisponibles.forEach((modelo)=> {
    console.log(`disponible ${modelo.modeloAuto}`)
})
let seleccion = prompt(`elige entre las opciones:
    ${modeloAutoDisponibles[0].modeloAuto}
    ${modeloAutoDisponibles[1].modeloAuto}
    ${modeloAutoDisponibles[2].modeloAuto}
    ${modeloAutoDisponibles[3].modeloAuto}
    ${modeloAutoDisponibles[5].modeloAuto}
    ${modeloAutoDisponibles[4].modeloAuto} `
).toUpperCase();
while(seleccion !== modeloAutoDisponibles[0].modeloAuto && seleccion !== modeloAutoDisponibles[1].modeloAuto && seleccion !== modeloAutoDisponibles[2].modeloAuto&& seleccion !== modeloAutoDisponibles[3].modeloAuto&& seleccion !== modeloAutoDisponibles[4].modeloAuto && seleccion !== modeloAutoDisponibles[5].modeloAuto){
    alert('Modelo de auto incorrecto, escribe una de las opciones disponibles')
    seleccion = prompt(`elige entre las opciones:
    ${modeloAutoDisponibles[0].modeloAuto}
    ${modeloAutoDisponibles[1].modeloAuto}
    ${modeloAutoDisponibles[2].modeloAuto}
    ${modeloAutoDisponibles[3].modeloAuto}
    ${modeloAutoDisponibles[5].modeloAuto}
    ${modeloAutoDisponibles[4].modeloAuto} `
).toUpperCase();
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
