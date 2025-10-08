const productos = [
  {
    id: 1,
    nombre: "Taza con forma de gato",
    imagen: "img/tazacat.jpg",
    descripcion: "Taza de cerámica con orejitas y carita de gato pintada.",
    stock: 15,
    precio: 12.99,
  },
  {
    id: 2,
    nombre: "Mochila estampada de gatitos",
    imagen: "img/mochicat.jpg",
    descripcion: "Mochila escolar con diseño kawaii de gatos.",
    stock: 10,
    precio: 29.99
  },
  {
    id: 3,
    nombre: "Cojín con cara de gato",
    imagen: "https://example.com/images/cojin_gato.jpg",
    descripcion: "Almohadón suave con ilustración realista de gato.",
    stock: 8,
    precio: 18.50
  },
  {
    id: 4,
    nombre: "Anillo ajustable de gatito",
    imagen: "https://example.com/images/anillo_gato.jpg",
    descripcion: "Anillo de plata con forma de gato abrazando el dedo.",
    stock: 20,
    precio: 9.90
  },
  {
    id: 5,
    nombre: "Pantuflas de gato",
    imagen: "https://example.com/images/pantuflas_gato.jpg",
    descripcion: "Pantuflas peluditas con orejas y bigotes.",
    stock: 12,
    precio: 19.95
  },
  {
    id: 6,
    nombre: "Lámpara LED de gato",
    imagen: "https://example.com/images/lampara_gato.jpg",
    descripcion: "Lámpara nocturna de silicona con forma de gato.",
    stock: 9,
    precio: 22.00
  },
  {
    id: 7,
    nombre: "Bolso tote con ilustración de gatos",
    imagen: "https://example.com/images/bolso_gato.jpg",
    descripcion: "Bolsa de tela ecológica con estampado de gatos.",
    stock: 25,
    precio: 14.80
  },
  {
    id: 8,
    nombre: "Camisa con patrón de gatos",
    imagen: "https://example.com/images/camisa_gato.jpg",
    descripcion: "Camisa casual con pequeños gatitos estampados.",
    stock: 6,
    precio: 34.50
  },
  {
    id: 9,
    nombre: "Set de stickers de gatos",
    imagen: "https://example.com/images/stickers_gato.jpg",
    descripcion: "Paquete con 50 stickers de gatitos adorables.",
    stock: 40,
    precio: 5.99
  },
  {
    id: 10,
    nombre: "Cuaderno de notas con portada de gato",
    imagen: "https://example.com/images/cuaderno_gato.jpg",
    descripcion: "Cuaderno A5 con portada ilustrada de gatito dormilón.",
    stock: 30,
    precio: 6.99
  },
  {
    id: 11,
    nombre: "Collar con dije de gato",
    imagen: "https://example.com/images/collar_gato.jpg",
    descripcion: "Cadena dorada con colgante en forma de gato.",
    stock: 14,
    precio: 11.50
  },
  {
    id: 12,
    nombre: "Pendientes de orejitas de gato",
    imagen: "https://example.com/images/pendientes_gato.jpg",
    descripcion: "Aretes pequeños en forma de orejas felinas.",
    stock: 18,
    precio: 8.25
  },
  {
    id: 13,
    nombre: "Calcetines con huellitas de gato",
    imagen: "https://example.com/images/calcetines_gato.jpg",
    descripcion: "Calcetines suaves con diseño de patas y caritas de gato.",
    stock: 22,
    precio: 7.90
  },
  {
    id: 14,
    nombre: "Reloj de pared con gato",
    imagen: "https://example.com/images/reloj_gato.jpg",
    descripcion: "Reloj decorativo con forma de gato y movimiento de cola.",
    stock: 7,
    precio: 24.99
  },
  {
    id: 15,
    nombre: "Estuche escolar de gatito",
    imagen: "https://example.com/images/estuche_gato.jpg",
    descripcion: "Estuche con orejitas y cierre decorado.",
    stock: 16,
    precio: 9.99
  },
  {
    id: 16,
    nombre: "Pijama con estampado de gatos",
    imagen: "https://example.com/images/pijama_gato.jpg",
    descripcion: "Pijama de algodón con diseño divertido de gatos.",
    stock: 13,
    precio: 27.50
  },
  {
    id: 17,
    nombre: "Paraguas con gatos ilustrados",
    imagen: "https://example.com/images/paraguas_gato.jpg",
    descripcion: "Paraguas plegable con dibujos de gatitos en la tela.",
    stock: 11,
    precio: 17.00
  },
  {
    id: 18,
    nombre: "Portavasos de silicona gato",
    imagen: "https://example.com/images/portavasos_gato.jpg",
    descripcion: "Set de posavasos con forma de cara de gato.",
    stock: 20,
    precio: 6.75
  },
  {
    id: 19,
    nombre: "Camiseta con frase gatuna",
    imagen: "https://example.com/images/camiseta_gato.jpg",
    descripcion: "T-shirt con ilustración y frase: 'Soy un gato en otra vida'.",
    stock: 10,
    precio: 16.99
  },
  {
    id: 20,
    nombre: "Funda de celular con orejas de gato",
    imagen: "https://example.com/images/funda_gato.jpg",
    descripcion: "Funda protectora con diseño de gatito kawaii.",
    stock: 15,
    precio: 13.20
  }
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