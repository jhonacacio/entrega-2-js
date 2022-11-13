let cantidadDeCuotas = 0;
let valorDeCuota = 0;
let nombreAuto = prompt(`Que tipo de auto buscas? \nElige entre Camioneta, Sedan o Suv`)
const modeloAutoDisponibles = modelosAutos.filter(auto => auto.tipoAuto === nombreAuto);

modeloAutoDisponibles.forEach((modelo)=> {
    console.log(`disponible ${modelo.modeloAuto}`)
})
let seleccion = prompt(`elige entre las opciones: \n${modeloAutoDisponibles[0].modeloAuto}\n${modeloAutoDisponibles[1].modeloAuto}\n${modeloAutoDisponibles[2].modeloAuto}\n${modeloAutoDisponibles[3].modeloAuto} `);
const autoSeleccionado = modeloAutoDisponibles.find(autos => autos.modeloAuto === seleccion);
alert(`Has seleccionado el modelo ${autoSeleccionado.modeloAuto} \nPrecio lista: ${autoSeleccionado.precioLista} \nDesde: ${autoSeleccionado.precioAuto}`)

// Cantidad de cuotas y validacion
function validarCantidadDeCuotas(cantidadDeCuotas) {
    while(cantidadDeCuotas < 1||cantidadDeCuotas > 12 || Number.isNaN(cantidadDeCuotas) ){
        alert('cantidadDeCuotas no valida, ingrese un numero correcto de cuotas');
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
valorDeCuota = calculoPrecioCuotas(autoSeleccionado.precioAuto, cantidadDeCuotas)
confirm(`El valor total de tu compra es: ${autoSeleccionado.precioAuto} \nElegiste pagar ${cantidadDeCuotas} cuotas\nEl valor de cada cuota es de:${valorDeCuota}`)
