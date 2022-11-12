let nombreAuto = prompt(`Que tipo de auto buscas? \nElige entre Camioneta, Sedan o Suv`)
const modeloAuto = modelosAutos.filter(auto => auto.tipoAuto === nombreAuto);

modeloAuto.forEach((modelo)=> {
    console.log(`disponible ${modelo.modeloAuto}`)
})
let seleccion = prompt('elige entre las opciones');
const autoSeleccionado = modeloAuto.find(autos => autos.modeloAuto === seleccion);
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
alert(calculoPrecioCuotas(autoSeleccionado.precioAuto, cuotas()))
