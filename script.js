const precioProductoString = document.getElementById("precioProducto") 
const calcular = document.getElementById('calcular')
const mostrarCalculo = document.getElementById('calculo')

let sinIva = 0
let seisCuotas = 0
let doceCuotas = 0

calcular.addEventListener('click', ()=> validarInput(precioProducto))

function validarInput(precio) {
    const precioProducto = parseInt(precioProductoString.value)
    console.log(precioProducto, typeof(precioProducto))

    if( precio === '' && precio <= 0) {
        console.log("ingrese un precio válido")
    } else {
        calculoSinIva(precioProducto)
        calculoSeisCuotas(precioProducto)
        calculoDoceCuotas(precioProducto)
    }
}


//Precio sin iva
function calculoSinIva(precio){
    sinIva = precio - (precio * 0.21) 
    

}

//Precio en 6 cuotas sin int
function calculoSeisCuotas(precio){
    seisCuotas = (precio / 6 ) 
   
}

//Precio en 12 cuotas con int de 30%
function calculoDoceCuotas(precio){
    
    doceCuotas = (precio + (precio * 0.3)) / 12 
    
    agregarAlHTML()
}

//Agregar al html
function agregarAlHTML() {
    const parrafo = document.createElement('p');
    parrafo.textContent = `El precio sin IVA es: ${sinIva}
                           El precio en 6 cuotas es: ${seisCuotas}
                           El precio en 12 cuotas con recargo es: ${doceCuotas}`
    mostrarCalculo.appendChild(parrafo);
}