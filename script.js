let precioProducto = document.getElementById("precioProducto") 
const calcular = document.getElementById('calcular')
const mostrarCalculo = document.getElementById('calculo')

calcular.addEventListener('click', ()=>
validarInput(precioProducto.value))

function validarInput(precio) {
    if( precio == "" && precio >= 0) {
        console.log("ingrese un precio válido")
    } else {
        calculoSinIva(precioProducto.value)
        calculoSeisCuotas(precioProducto.value)
        calculoDoceCuotas(precioProducto.value)
    }
}

function calculoSinIva(precio){
    console.log(precio)
    const sinIva = precio - (precio * 0.21) 
    mostrarCalculo.innerHTML = sinIva
    console.log(sinIva)
    
}

//Precio sin iva

//Precio en 6 cuotas sin int

function calculoSeisCuotas(precio){
    
    const seisCuotas = (precio / 6 ) 
    mostrarCalculo.innerHTML = seisCuotas
    console.log(seisCuotas)
    
}

function calculoDoceCuotas(precio){
    
    const doceCuotas = precio + (precio * 0.3) 
    mostrarCalculo.innerHTML = doceCuotas
    console.log(doceCuotas)
    
}

//Precio en 12 cuotas con int de 30%