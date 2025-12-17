let productoseleccionados = JSON.parse(localStorage.getItem("carrito")) //
let totalfinal= 0;
let idconta = 0;
function cargarcarrito() {
    for (let productoseleccionado of productoseleccionados) {
    let fila = document.createElement("tr")
    /* idconta = idconta + 1;
    fila.id = "pe" + idconta; */
    let total = productoseleccionado.precio*productoseleccionado.cantidad
    totalfinal = totalfinal + total;
    fila.innerHTML = `
                    <td><img src="${productoseleccionado.imagen}" alt=""></td>
                    <td>${productoseleccionado.cantidad}</td>
                    <td>${productoseleccionado.nombre}</td>
                    <td>${productoseleccionado.precio}</td>
                    <td>${total}</td>
                    <td><button onclik="borrar('pe${idconta}')">X</button></td>
                    `
    document.getElementById("listadeproductos").appendChild(fila)
    
   }
   document.getElementById("totalgastos").innerHTML= totalfinal
}

/* function borrar(tr) {
    let pe = document.getElementById(tr) - 1;
    if (fila) {
        fila.remove();
    }
} */

cargarcarrito()