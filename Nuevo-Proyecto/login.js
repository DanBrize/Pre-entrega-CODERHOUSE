// let user;
// let contrasenia;
// let eleccionMenu;

// function userYPass() {
//   user = prompt("Ingrese un nombre de usuario administrador");
//   contrasenia = prompt("Ingrese una contraseña de administrador");
// }

// function logIn() {
//   while (user != "admin" || contrasenia != "admin123") {
//     alert("El usuario o contraseña no son válidos");
//     userYPass();
//   }
// }

// userYPass();
// logIn();


let user = document.querySelector("#user");
let password = document.querySelector("#password");
let logInForm = document.querySelector("#ingreso");


function validarformulario() {
    var usuario = document.querySelector("#usuario");
    var contrasenia = document.querySelector("#contrasenia");

    if (usuario === "admin" || contrasenia === "admin123") {
        document.getElementById("mensaje").innerHTML = "Por favor ingrese los datos nuevamente"
        return false;
    }
    return true;
}