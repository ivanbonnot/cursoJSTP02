let precioProducto = document.getElementById("precioProducto") 
const calcular = document.getElementById('calcular')
const mostrarCalculo = document.getElementById('calculo')
let sinIva = 0

calcular.addEventListener('click', validarInput(precioProducto.value))

function validarInput(precio) {
    if( precio == "" && precio <= 0) {
        console.log("ingrese un numero valido")
    }
}

function calculoSinIva(){
    console.log(precioProducto.value)
    sinIva = precioProducto.value - (precioProducto.value * 0.21) 
    mostrarCalculo.innerHTML = sinIva
    console.log(sinIva)
    
}

//Precio sin iva

//Precio en 6 cuotas sin int

//Precio en 12 cuotas con int de 30%