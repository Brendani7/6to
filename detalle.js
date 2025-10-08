let productoseleccionado = JSON.parse(localStorage.getItem("Detalle"))
let contador =0;

function cargarproductos() {
    let parrafo = document.createElement("div")
    parrafo.id = "boxproducto"
    parrafo.innerHTML= `
                       <h2 id="nombreproducto">${productoseleccionado.nombre}</h2>
                       <h3 id="precioproducto">${productoseleccionado.precio}</h3>
                       <img src="${productoseleccionado.imagen}" alt="" id="imagenproducto">
                       <p id="descripcionproducto">${productoseleccionado.descripcion}</p>
                       <p id="stockproducto">${productoseleccionado.stock}</p>
                       <div id="boxcontador">
                            <button id="sumarproducto" onclick="sumarproductos()">+</button>
                            <p id="pcontador">0</p>
                            <button id="restarproducto" onclick="restarproductos()">-</button>
                       </div>
                       <button id="agregarproducto" onclick="agregaralcarrito()">Agregar al carrito</button>
    `
    document.getElementById("boxproductos").appendChild(parrafo)
}

cargarproductos()

function sumarproductos(){
    if (contador < productoseleccionado.stock) {
        contador=contador+1
    document.getElementById("pcontador").innerHTML = contador
    }else{
        alert("Stock maximo alcanzado")
    }
}

function restarproductos() {
    if (contador > 0) {
    contador=contador-1
    document.getElementById("pcontador").innerHTML = contador
    }
}

function agregaralcarrito() {
    if (contador > 0) {
        let carrito = JSON.parse(localStorage.getItem("carrito"))
        if (carrito === null) {
            carrito = []
        }
        let productonuevo = {
            id: productoseleccionado.id,
            nombre: productoseleccionado.nombre,
            imagen: productoseleccionado.imagen,
            cantidad: contador,
            precio: productoseleccionado.precio
        }
        carrito.push(productonuevo)
       
       let productojson = JSON.stringify(carrito)
       localStorage.setItem("carrito",productojson)
       window.location.href = "carrito.html"
       
    }else{
        alert("Indicar la cantidad de productos a comprar")
    }
    
}