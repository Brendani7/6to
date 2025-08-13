const productos = [
  {
    id: 1,
    nombre: "Refrigerador Samsung RT32K",
    imagen: "https://example.com/images/refrigerador1.jpg",
    stock: 12,
    descripcion: "Refrigerador de 320L con tecnología Twin Cooling Plus.",
    precio: 599.99
  },
  {
    id: 2,
    nombre: "Lavadora LG WF-T1400TP",
    imagen: "https://example.com/images/lavadora1.jpg",
    stock: 8,
    descripcion: "Lavadora automática de 14 kg con motor Smart Inverter.",
    precio: 449.99
  },
  {
    id: 3,
    nombre: "Microondas Panasonic NN-SD372S",
    imagen: "https://example.com/images/microondas1.jpg",
    stock: 20,
    descripcion: "Microondas de 950W con sensor de cocción automática.",
    precio: 129.99
  },
  {
    id: 4,
    nombre: "Aspiradora Dyson V11",
    imagen: "https://example.com/images/aspiradora1.jpg",
    stock: 5,
    descripcion: "Aspiradora inalámbrica con pantalla LCD y 60 min de autonomía.",
    precio: 699.99
  },
  {
    id: 5,
    nombre: "Televisor LG OLED 55''",
    imagen: "https://example.com/images/tv1.jpg",
    stock: 7,
    descripcion: "Smart TV OLED 4K de 55 pulgadas con Dolby Vision IQ.",
    precio: 1199.99
  },
  {
    id: 6,
    nombre: "Cafetera Nespresso Essenza Mini",
    imagen: "https://example.com/images/cafetera1.jpg",
    stock: 25,
    descripcion: "Cafetera compacta con sistema de cápsulas Nespresso.",
    precio: 89.99
  },
  {
    id: 7,
    nombre: "Licuadora Oster Pro",
    imagen: "https://example.com/images/licuadora1.jpg",
    stock: 18,
    descripcion: "Licuadora de alto rendimiento con vaso de vidrio resistente.",
    precio: 74.50
  },
  {
    id: 8,
    nombre: "Horno eléctrico Mabe",
    imagen: "https://example.com/images/horno1.jpg",
    stock: 10,
    descripcion: "Horno de 52L con múltiples funciones y temporizador.",
    precio: 199.99
  },
  {
    id: 9,
    nombre: "Plancha a vapor Philips GC5037",
    imagen: "https://example.com/images/plancha1.jpg",
    stock: 15,
    descripcion: "Plancha potente con suela SteamGlide y función anti-goteo.",
    precio: 79.90
  },
  {
    id: 10,
    nombre: "Ventilador de torre Honeywell HYF290",
    imagen: "https://example.com/images/ventilador1.jpg",
    stock: 22,
    descripcion: "Ventilador silencioso con 8 niveles de velocidad.",
    precio: 64.99
  },
  {
    id: 11,
    nombre: "Aire acondicionado LG Dual Inverter",
    imagen: "https://example.com/images/aire1.jpg",
    stock: 6,
    descripcion: "A/C de 12,000 BTU con ahorro energético y Wi-Fi integrado.",
    precio: 749.00
  },
  {
    id: 12,
    nombre: "Freidora de aire Ninja AF101",
    imagen: "https://example.com/images/freidora1.jpg",
    stock: 30,
    descripcion: "Freidora de aire de 3.8L para cocinar sin aceite.",
    precio: 129.00
  },
  {
    id: 13,
    nombre: "Tostadora Black+Decker TR3500SD",
    imagen: "https://example.com/images/tostadora1.jpg",
    stock: 14,
    descripcion: "Tostadora de acero inoxidable con ranuras extra anchas.",
    precio: 39.95
  },
  {
    id: 14,
    nombre: "Batidora de mano Braun MQ7035X",
    imagen: "https://example.com/images/batidora1.jpg",
    stock: 11,
    descripcion: "Batidora con tecnología ActiveBlade y múltiples accesorios.",
    precio: 99.90
  },
  {
    id: 15,
    nombre: "Extractor de jugos Philips Viva",
    imagen: "https://example.com/images/extractor1.jpg",
    stock: 9,
    descripcion: "Extractor centrífugo de alta velocidad y fácil limpieza.",
    precio: 119.00
  },
  {
    id: 16,
    nombre: "Secadora Whirlpool 7MWGD1730JW",
    imagen: "https://example.com/images/secadora1.jpg",
    stock: 4,
    descripcion: "Secadora a gas de 17 kg con 12 ciclos automáticos.",
    precio: 659.99
  },
  {
    id: 17,
    nombre: "Lava vajillas Bosch Serie 4",
    imagen: "https://example.com/images/lavavajillas1.jpg",
    stock: 5,
    descripcion: "Lavavajillas silencioso con eficiencia energética A++.",
    precio: 799.00
  },
  {
    id: 18,
    nombre: "Enfriador de aire portátil Honeywell",
    imagen: "https://example.com/images/enfriador1.jpg",
    stock: 13,
    descripcion: "Enfriador evaporativo con control remoto y ruedas.",
    precio: 199.00
  },
  {
    id: 19,
    nombre: "Robot aspirador Xiaomi Mi Robot Vacuum",
    imagen: "https://example.com/images/robot1.jpg",
    stock: 10,
    descripcion: "Aspirador inteligente con navegación láser y app.",
    precio: 399.00
  },
  {
    id: 20,
    nombre: "Parrilla eléctrica George Foreman",
    imagen: "https://example.com/images/parrilla1.jpg",
    stock: 17,
    descripcion: "Parrilla eléctrica antiadherente para interior.",
    precio: 59.95
  }
];

function cargarproductos() {
    for (let producto of productos) {
        let parrafo = document.createElement("div")
        parrafo.id = "boxproducto"
        parrafo.innerHTML= `
                    <h2 id="nombreproducto">${producto.nombre}</h2>
                    <img src="" alt="" id="imagenproducto">
                    <h3 id="precioproducto">${producto.precio}</h3>
                    <button id="btncomprar">ver</button>
        `
        document.getElementById("boxproductos").appendChild(parrafo)
    }
    
}

cargarproductos()