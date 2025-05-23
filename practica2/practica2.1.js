const productos = [
    { nombre: "Laptop", precio: 12000 },
    { nombre: "Mouse", precio: 250 },
    { nombre: "Teclado", precio: 750 },
    { nombre: "Monitor", precio: 3000 }
];

//filtro para productos con precio mayor a 1000 pejecoins
const filtro = productos.filter(producto => producto.precio > 1000);
//map para obtener solo los nombres
const nombres = filtro.map(producto => producto.nombre);

console.log(nombres); 
