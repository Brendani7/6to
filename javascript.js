const productos = [
  {
    id: 1,
    nombre: "Taza con forma de gato",
    imagen: "img/tazacat.jpg",
    descripcion: "Taza de cerámica con orejitas y carita de gato pintada.",
    stock: 15,
    precio: 7000,
  },
  {
    id: 2,
    nombre: "Mochila estampada de gatitos",
    imagen: "img/mochicat.jpg",
    descripcion: "Mochila escolar con diseño kawaii de gatos.",
    stock: 10,
    precio: 8000,
  },
  {
    id: 3,
    nombre: "Almohada de huella de gato",
    imagen: "img/almohada_2.jpg",
    descripcion: "Almohadón suave con ilustración realista de gato.",
    stock: 8,
    precio: 5500,
  },
  {
    id: 4,
    nombre: "Bolso/Mochila en forma de gato",
    imagen: "img/bolso-mochila_cat.jpg",
    descripcion: "Anillo de plata con forma de gato abrazando el dedo.",
    stock: 20,
    precio: 15000,
  },
  {
    id: 5,
    nombre: "Pantuflas de gato",
    imagen: "img/pantuflas patas.jpg",
    descripcion: "Pantuflas peluditas con orejas y bigotes.",
    stock: 12,
    precio: 6000,
  },
  {
    id: 6,
    nombre: "Lámpara LED de gato",
    imagen: "img/gatos luz.jpg",
    descripcion: "Lámpara nocturna de silicona con forma de gato.",
    stock: 9,
    precio: 10000,
  },
  {
    id: 7,
    nombre: "Lámpara de gato",
    imagen: "img/lampcat.jpg",
    descripcion: "Bolsa de tela ecológica con estampado de gatos.",
    stock: 25,
    precio: 12000,
  },
  {
    id: 8,
    nombre: "Pad de patita de gato",
    imagen: "img/pad_gato.jpg",
    descripcion: "Camisa casual con pequeños gatitos estampados.",
    stock: 6,
    precio: 5000,
  },
  {
    id: 9,
    nombre: "Teclado con mouse de gato",
    imagen: "img/teclado_cat.jpg",
    descripcion: "Paquete con 50 stickers de gatitos adorables.",
    stock: 40,
    precio: 15000,
  },
  {
    id: 10,
    nombre: "Funda para silla gamer de gato",
    imagen: "img/funda_gamer_cat.jpg",
    descripcion: "Cuaderno A5 con portada ilustrada de gatito dormilón.",
    stock: 30,
    precio: 10000,
  },
  {
    id: 11,
    nombre: "Sujetalibros de gatito dormido",
    imagen: "img/sujetalibros.jpg",
    descripcion: "Cadena dorada con colgante en forma de gato.",
    stock: 14,
    precio: 6000,
  },
  {
    id: 12,
    nombre: "Telefono de los 80s Garfield",
    imagen: "img/tele_garfield.jpg",
    descripcion: "Aretes pequeños en forma de orejas felinas.",
    stock: 18,
    precio: 20000,
  },
  {
    id: 13,
    nombre: "Calcetines con huellitas de gato",
    imagen: "img/medias gatos.jpg",
    descripcion: "Calcetines suaves con diseño de patas y caritas de gato.",
    stock: 22,
    precio: 5000,
  },
  {
    id: 14,
    nombre: "Alfombra de gatos Yin y Yang",
    imagen: "img/alfombra_gato.jpg",
    descripcion: "Reloj decorativo con forma de gato y movimiento de cola.",
    stock: 7,
    precio: 7000,
  },
  {
    id: 15,
    nombre: "Taza con forma de gatito bruja",
    imagen: "img/tazacat_brujo.jpg",
    descripcion: "Estuche con orejitas y cierre decorado.",
    stock: 16,
    precio: 9500,
  },
  {
    id: 16,
    nombre: "Vaso con forma patita de gato",
    imagen: "img/vaso_gato.jpg",
    descripcion: "Pijama de algodón con diseño divertido de gatos.",
    stock: 13,
    precio: 8000,
  },
  {
    id: 17,
    nombre: "Guantes con forma de patitas de gatito",
    imagen: "img/guante_gato.jpg",
    descripcion: "Paraguas plegable con dibujos de gatitos en la tela.",
    stock: 11,
    precio: 4500,
  },
  {
    id: 18,
    nombre: "Llavero de Hello Kitty con Hatsune Miku",
    imagen: "img/hellomiku.jpg",
    descripcion: "Set de posavasos con forma de cara de gato.",
    stock: 20,
    precio: 2000,
  },
  {
    id: 19,
    nombre: "Peluche de gato con forma de Canela",
    imagen: "img/gato_canela.jpg",
    descripcion: "T-shirt con ilustración y frase: 'Soy un gato en otra vida'.",
    stock: 10,
    precio: 12000,
  },
  {
    id: 20,
    nombre: "Peluche casi el tamaño rela de gatito",
    imagen: "img/gato_gigante.jpg",
    descripcion: "Funda protectora con diseño de gatito kawaii.",
    stock: 15,
    precio: 13500,
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