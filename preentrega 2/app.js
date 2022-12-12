class Libro {
    constructor(nombre, autor, editorial, genero, precio) {
        this.nombre = nombre;
        this.autor = autor;
        this.editorial = editorial;
        this.genero = genero;
        this.precio = precio;
    }
}

const libro1 = new Libro("It", "Stephen King", "El Mundo", "Terror", 5000);
const libro2 = new Libro("Nacidos de la Bruma", "Brandon Sanderson", "Salamandra", "Fantasia", 6000);
const libro3 = new Libro("La borra del Cafe", "Mario Benedetti", "Gentille", "Romance", 2000);

const libros = [libro1, libro2, libro3];

class Usuario {
    constructor(nombre, id, correo, creditos){
        this.nombre = nombre;
        this.id = id;
        this.correo = correo;
        this.creditos = creditos;
    }
}

const usuario1 = new Usuario("Juan", 1, "juanperez@gmail.com", 12000);
const usuario2 = new Usuario("Pablo", 2, "pablogarcia@gmail.com", 20000);
const usuario3 = new Usuario("Manu", 3, "manueltello@gmail.com", 5000);

const usuarios = [usuario1, usuario2, usuario3];

function filtrarGenero(libros){
    let genero = prompt("Genero que desea buscar: ");
    let librosDelGenero = []
    for (const libro of libros) {
        if (genero == libro.genero) {
            librosDelGenero.push(libro.nombre)
        }
    }
    console.log(librosDelGenero.length)
    if (librosDelGenero.length == 0) {
        alert("No se encontro el genero")
    } else {
        alert(librosDelGenero)
    }

}

function agregarLibro(libros) {
    let agregar = prompt("desea agregar un producto? ")
    let carrito = [];
    let total = 0;
    
    while (agregar == "si") {
        let nombreLibro = prompt("que libro desea agregar? ")
        for (const libro of libros) {
            if (nombreLibro == libro.nombre) {
                carrito.push(libro.nombre);
                total = total + libro.precio
            }

        }
        agregar = prompt("desea agregar otro libro?")
    }
    console.log(carrito)
    return total
}

function realizarVenta(usuarios, precioTotal){
    let idUsuario = prompt("id de usuario: ");
    for (const usuario of usuarios) {
        if (idUsuario == usuario.id && usuario.creditos >= precioTotal) {
            alert("gracias por tu compra " + usuario.nombre);
            usuario.creditos = usuario.creditos - precioTotal;
        } else if(usuario.creditos < precioTotal) {
            alert("fondos insuficientes");
        }
    }
}

filtrarGenero(libros);

totalCarrito = agregarLibro(libros);

if (totalCarrito > 0) {
    realizarVenta(usuarios, totalCarrito);
}

