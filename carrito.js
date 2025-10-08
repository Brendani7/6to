let productoseleccionados = JSON.parse(localStorage.getItem("carrito")) //
let totalfinal= 0;
function cargarcarrito() {
    for (let productoseleccionado of productoseleccionados) {
    let fila = document.createElement("tr")
    let total = productoseleccionado.precio*productoseleccionado.cantidad
    totalfinal = totalfinal + total;
    fila.innerHTML = `
                    <td><img src="${productoseleccionado.imagen}" alt=""></td>
                    <td>${productoseleccionado.cantidad}</td>
                    <td>${productoseleccionado.nombre}</td>
                    <td>${productoseleccionado.precio}</td>
                    <td>${total}</td>
                    <td><button>X</button></td>
    `
    document.getElementById("listadeproductos").appendChild(fila)
   }
   document.getElementById("totalgastos").innerHTML= totalfinal
}

cargarcarrito()