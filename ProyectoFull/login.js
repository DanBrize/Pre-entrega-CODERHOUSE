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


// let user = document.querySelector("#usuario");
// let password = document.querySelector("#password");
// let logInForm = document.querySelector("#ingreso");
// var usuario = document.querySelector("#usuario");
// var contrasenia = document.querySelector("#contrasenia");

// function validarformulario() {
   

//     if (usuario != "admin" || contrasenia != "admin123") {
//         alert("Ingrese los datos nuevamente")

//         // document.getElementById("mensaje").innerHTML = "Por favor ingrese los datos nuevamente"
//         // return false;
//     } else {
//         // document.getElementById("mensaje").innerHTML = "";
//         //         return true;
//         //         console.log("test");
//                 window.location.href = "index.html";
//     }
    
// }






let loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit", function(nose) {
    nose.preventDefault(); 

    let usuario = document.querySelector("#usuario").value;
    let contrasenia = document.querySelector("#contrasenia").value;

    if (usuario === "admin" && contrasenia === "sapiencia") {
        location.href = "index.html";
    } else {
        alert("Datos incorrectos.")
    }

})










// const loginForm = document.getElementById("loginForm");

//         loginForm.addEventListener("submit", function (e) {
//             e.preventDefault(); // Evitar la recarga de la página al enviar el formulario

//             const username = document.getElementById("username").value;
//             const password = document.getElementById("password").value;

//             // Verificar las credenciales (esto es un ejemplo simple, debes mejorar la seguridad)
//             if (username === "tu_usuario" && password === "tu_contraseña") {
//                 // Credenciales válidas, redirigir a la siguiente página
//                 window.location.href = "siguiente_pagina.html";
//             } else {
//                 alert("Credenciales incorrectas. Inténtalo de nuevo.");
//             }
//         });