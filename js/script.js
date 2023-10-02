class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    sumarIva() {
        this.precio = this.precio * 1.21;
    }
    precioTotal() {
        return this.precio * this.cantidad;
    }
}

function ingresarCantidad(n) {
    let valorCorrecto = false;
    let cant = -1;
    do {
        cant = parseInt(prompt("Ingrese la cantidad que desea del producto " + n))
        if (cant >= 0) {
            valorCorrecto = true;
        } else {
            valorCorrecto = false;
            alert("Valor Incorrecto");
        }
    } while (!valorCorrecto);
    return cant;
}

let cant1 = ingresarCantidad(1);
let cant2 = ingresarCantidad(2);
let cant3 = ingresarCantidad(3);

let producto1 = new Producto("remera", 7000, cant1);
let producto2 = new Producto("buzo", 15000, cant2);
let producto3 = new Producto("pantalon", 12000, cant3);
producto1.sumarIva();
producto2.sumarIva();
producto3.sumarIva();;
console.log(producto1);
console.log("Total a Gastar : " + (producto1.precioTotal() + producto2.precioTotal() + producto3.precioTotal()));