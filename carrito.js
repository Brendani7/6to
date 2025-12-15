let productoseleccionados = JSON.parse(localStorage.getItem("carrito"))
let totalfinal = 0;

function cargarcarrito() {
    for (let productoseleccionado of productoseleccionados) {
        let fila = document.createElement("tr")
        let total = productoseleccionado.precio * productoseleccionado.cantidad
        totalfinal += total;

        fila.innerHTML = `
            <td><img src="${productoseleccionado.imagen}" alt=""></td>
            <td>${productoseleccionado.cantidad}</td>
            <td>${productoseleccionado.nombre}</td>
            <td>${productoseleccionado.precio}</td>
            <td>${total}</td>
            <td>
                <button onclick="borrar(this, ${total}, '${productoseleccionado.nombre}')">X</button>
            </td>
        `
        document.getElementById("listadeproductos").appendChild(fila)
    }
    document.getElementById("totalgastos").innerHTML = totalfinal
}

function borrar(boton, subtotal, nombreProducto) {
    // borrar fila
    let fila = boton.closest("tr")
    fila.remove()

    // actualizar total
    totalfinal -= subtotal
    document.getElementById("totalgastos").innerHTML = totalfinal

    // borrar del array
    productoseleccionados = productoseleccionados.filter(
        producto => producto.nombre !== nombreProducto
    )

    // actualizar localStorage
    localStorage.setItem("carrito", JSON.stringify(productoseleccionados))
}

cargarcarrito()

function comprar() {
    if (!productoseleccionados || productoseleccionados.length === 0) {
        alert("No hay productos para comprar")
        return
    }

    // mensaje de agradecimiento
    alert("Gracias por comprar")

    // guardar productos para la paga
    localStorage.setItem("pago", JSON.stringify(productoseleccionados))

    // borrar carrito
    localStorage.removeItem("carrito")
    productoseleccionados = []

    // opcional: limpiar la tabla visualmente
    document.getElementById("listadeproductos").innerHTML = ""
    document.getElementById("totalgastos").innerHTML = 0
}
