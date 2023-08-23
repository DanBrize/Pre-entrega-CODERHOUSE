



// alert("Bienvenidas/os a ultimate sports!"); 

// let usuario;
// let contrasenia; 
// let eleccionMenu;


// userYPass();



// function userYPass() {
//     usuario = prompt("Ingrese un nombre de usuario administrador");
//     contrasenia = prompt("Ingrese una contraseña de administrador");
// }



// logIn();


// function logIn() {

// while ((usuario != "admin") || (contrasenia != "admin123")) {
//     alert("El usuario o contraseña no son válidos");
//      userYPass();
// } 
// }


// console.log("Entraste");






// let btnPrincipal = document.querySelector(`#btnPrincipal`);




// let box = document.querySelector(`#box`);


// const respuestaClick = () => console.log(`Respuesta evento`);

// btnPrincipal.addEventListener(("click"), () => console.log(`Respuesta de evento click`));

// btnPrincipal.onclick = () => console.log(`Click con onclick`);

// let nombre = document.querySelector(`#nombre`);
// let edad = document.querySelector(`#edad`);
const nombre = document.querySelector(`#nombre`);
const telefono = document.querySelector(`#telefono`);
const direccion = document.querySelector(`#direccion`);
const formulario = document.querySelector(`#formulario`);
const boxClientes = document.querySelector(`#boxClientes`);
const buscadorClientes = document.querySelector(`#buscadorClientes`);
const btn = document.querySelector(`#btn`);


let modoEdicion = false;
let editarCliente;
// edad.onkeyup = () => console.log(`UP`);

// nombre.onchange = () => console.log(`On change`);
// edad.onchange = () => console.log(`On change`);

// nombre.oninput = () => console.log(`On input`);

class cliente {
    constructor(nombre, telefono, direccion) {
        this.id = Date.now().toString(36);
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
        this.Total = 0;

    }

    pagoTotal(monto) {
        this.Total += monto;
    }

}



let listaClientes = [];
console.log(listaClientes);
    

formulario.onsubmit = (event) => {
    event.preventDefault();
    }
    if (modoEdicion) {
        let confirmar = confirm(`Desea editar los datos del cliente?`);
        if (confirmar) {
            
            let index = listaClientes.findIndex((cliente) => nombre.id === editarCliente.id);
            listaClientes[index].nombre = nombre.value;
            listaClientes[index].telefono = telefono.value;
            listaClientes[index].direccion = direccion.value;

            alert("Edición correcta");
        } else {
            alert("Edición cancelada")
        }

        modoEdicion = false;
        btn.value = "Agregar";
        listaClientes(cliente);
    
    } else {
        listaClientes.push(cliente(nombre.value, telefono.value, direccion.value));
        mostrarClientes(listaClientes);
        formulario.reset();
    }
    


const mostrarClientes = (listaClientes) => {

    boxClientes.innerHTML = "";



listaClientes.forEach(cliente, index); {

    console.log(index);
    let dataClientes = document.createElement("div");
    dataClientes.classList.add("mt-2","border","p-3","shadow","shadow-md");
    dataClientes.innerHTML = `
    <p>Nombre: ${cliente.nombre}</p>
    <p>Telefono: ${cliente.telefono}</p>
    <p>Direccion: ${cliente.direccion}</p>
    <p Total: ${cliente.Total}</p>
    `
}
}
console.log(listaClientes)