const productos = [
  {
    id: 1,
    nombre: "Taza con forma de gato",
    imagen: "img/tazacat.jpg",
    descripcion: "Taza de cerámica con orejitas y carita de gato pintada.",
    stock: 15,
    precio: 5000,
  },
  {
    id: 2,
    nombre: "Mochila estampada de gatitos",
    imagen: "img/mochicat.jpg",
    descripcion: "Mochila escolar con diseño kawaii de gatos.",
    stock: 10,
    precio: 15000,
  },
  {
    id: 3,
    nombre: "Almohada con forma de huella de gato",
    imagen: "img/almohada_2.jpg",
    descripcion: "Almohadón suave con ilustración realista de gato.",
    stock: 8,
    precio: 10000,
  },
  {
    id: 4,
    nombre: "Almohada con forma de gato galleta de Steven Universe",
    imagen: "img/gatogalleta.jpg",
    descripcion: "Almohadón suave con ilustración de una galleta con forma de gato.",
    stock: 20,
    precio: 10000,
  },
  {
    id: 5,
    nombre: "Pantuflas de gato",
    imagen: "img/pantuflas patas.jpg",
    descripcion: "Pantuflas peluditas con orejas y bigotes.",
    stock: 12,
    precio: 12000,
  },
  {
    id: 6,
    nombre: "Lámpara LED de gato",
    imagen: "img/gatos luz.jpg",
    descripcion: "Lámpara nocturna de silicona con forma de gato.",
    stock: 9,
    precio: 22000,
  },
  {
    id: 7,
    nombre: "Lámpara LED de gato de multiples colores",
    imagen: "img/gato lampara.jpg",
    descripcion: "Lámpara nocturna de silicona con forma de gato de multiples colores.",
    stock: 25,
    precio: 22000,
  },
  {
    id: 8,
    nombre: "Almuhada con forma de huella de gato con pelo sintetico",
    imagen: "img/almohada_1.jpg",
    descripcion: "Almuadón de patita pero hecho de pelo sintetico.",
    stock: 6,
    precio: 12000,
  },
  {
    id: 9,
    nombre: "Silla Gatuna",
    imagen: "img/silla gatuna.jpg",
    descripcion: "Una silla con forma de patita de gato.",
    stock: 14,
    precio: 20000,
  },
  {
    id: 10,
    nombre: "Calcetines con huellitas de gato",
    imagen: "img/medias gatos.jpg",
    descripcion: "Calcetines suaves con diseño de patas y caritas de gato.",
    stock: 22,
    precio: 8000,
  },
  {
    id: 11,
    nombre: "Pantuflas de Toro Inoue",
    imagen: "img/pantuflas toro.jpg",
    descripcion: "Unas bonitas pantuflas de Toro.",
    stock: 10,
    precio: 12000,
  },
];


function cargarproductos() {
    for (let producto of productos) {
        let parrafo = document.createElement("div")
        parrafo.id = "boxproducto"
        parrafo.innerHTML= `
                    <h2 id="nombreproducto">${producto.nombre}</h2>
                    <img src="${producto.imagen}" alt="" id="imagenproducto">
                    <h3 id="precioproducto">${producto.precio}</h3>
                    <button id="btncomprar" onclick="verdetalle(${producto.id})">ver</button>
        `
        document.getElementById("boxproductos").appendChild(parrafo)
    }
    
}

cargarproductos()

function verdetalle(id) {
  let productoseleccionado = productos.find(producto => producto.id == id)
  let productojon = JSON.stringify(productoseleccionado)
  localStorage.setItem("Detalle", productojon)
  window.location.href = "detalle.html"
}