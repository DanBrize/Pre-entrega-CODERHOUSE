let user;
let contrasenia;
let eleccionMenu;

/// AGREGAR MENU BIENVENIDA ///

userYPass();
logIn();

swal.fire({
  title: "Bienvenidas/os",
  timer: 1500,
  icon: "success",
});

console.log("Entraste");

const inventario = document.querySelector("#inventario");
const nombre = document.querySelector("#nombre");
const telefono = document.querySelector("#telefono");
const direccion = document.querySelector("#direccion");
const btn = document.querySelector("#btn");
const buscar = document.querySelector("#buscar");
const contenedorUsuarios = document.querySelector("#contenedorUsuarios");
const btnSalir = document.querySelector("#btnSalir");
const dataTecnicos = document.querySelector("#dataTecnicos");

let modoEdicion = false;
let usuarioEditar;

class usuario {
  constructor(nombre, telefono, direccion) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.direccion = direccion;
    this.id = Date.now().toString(36);
  }

  // posible boton pago total
}

///Fetch///
// dataTecnicos.addEventListener("click", () => {
//     fetch("./db/data.json")
//     .then((resp) => JSON.resp())
//     .then((data) => localStorage.setItem("dataTecnicos", JSON.stringify(data)));
//     console.log("testing");
// })
dataTecnicos.onclick = () => {
  const obtenerData = async () => {
    const resp = await fetch("./db/data.json");
    const data = await resp.json();
    console.log(data);
  };
};

///  Inventario - Agregar -  Editar ///

let usuarios = [];

inventario.onsubmit = (event) => {
  event.preventDefault();

  if (modoEdicion) {
    let confirmar = confirm("Esta seguro que desea editar este usuario?");
    if (confirmar) {
      let index = usuarios.findIndex(
        (usuario) => usuario.id === usuarioEditar.id
      );
      console.log(`Usuario nro: ${index}`);
      // index = usuario.id === usuarioEditar.id;}
      usuarios[index].nombre = nombre.value;
      usuarios[index].telefono = telefono.value;
      usuarios[index].direccion = direccion.value;
      alert("Edicion exitosa");
    } else {
      alert("Edicion cancelada");
    }
    modoEdicion = false;
    btn.value = "Agregar";
    mostrarUsuarios(usuarios);
  } else {
    usuarios.push(new usuario(nombre.value, telefono.value, direccion.value));
    mostrarUsuarios(usuarios);
  }
  // console.log(usuarios);

  ///localStorage///

  localStorage.setItem("usuarioStringify", JSON.stringify(usuarios));
  let usuarioStringify = localStorage.getItem("usuarioStringify");
  console.log("usuarioStringify   ");

  inventario.reset();
};

/// Mostrar Usuarios ///

const mostrarUsuarios = (usuarios) => {
  contenedorUsuarios.innerHTML = "";

  usuarios.forEach((usuario, index) => {
    const { nombre, telefono, direccion } = usuario;

    let usuariosContenedor = document.createElement("div");
    usuariosContenedor.classList.add(
      "mt-2",
      "border",
      "border-2",
      "p-3",
      "shadow",
      "shadow-md"
    );
    usuariosContenedor.innerHTML = `
        <p>Nombre: ${nombre}</p>
        <p>Telefono: ${telefono}</p>
        <p>Direccion: ${direccion}</p>
            
    `;

    /// Botones eliminar y editar  ///

    let btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btn", "btn-danger");
    btnEliminar.innerHTML = "Eliminar";
    usuariosContenedor.appendChild(btnEliminar);

    btnEliminar.onclick = () => {
      swal
        .fire({
          title: "¿Esta segura/o que desea eliminar al usuario?",
          icon: "question",
          confirmButtonText: "Aceptar",
          showCancelButton: true,
        })
        .then((respuestaEliminar) => {
          if (respuestaEliminar.isconfirmed) {
            console.log("Accion cancelada");
          } else {
            eliminarUsuario(index);
            console.log("Eliminacion exitosa");
          }
        });

      // let confirmar = confirm("Estas seguro que deseas eliminar al empleado?");

      // let stringy = localStorage.getItem("usuarioStringify");

      // if (confirmar) {
      //     eliminarUsuario(index);
      //     console.log("Eliminacion exitosa");

      //     for (let i = 0; i < localStorage.length; i++) {
      //         let clave = localStorage.key(i)
      //         let usuarioStringify = localStorage.getItem("usuarioStringify")
      //         console.log(`La clave es: ${clave}`);
      //         console.log(`El valor es: ${localStorage.getItem("usuarioStringify")} `);
      //     }

      //     // localStorage.removeItem("usuarioStringify");

      // } else {
      //     console.log("Eliminacion cancelada");

      // }
    };

    //------------------------------------//

    let btnEditar = document.createElement("button");
    btnEditar.classList.add("btn", "btn-info", "ms-2");
    btnEditar.innerHTML = "Editar";
    usuariosContenedor.appendChild(btnEditar);

    btnEditar.onclick = () => editarUsuario(index);

    // let btnPagar = document.createElement("button");
    // btnPagar.classList.add("btn", "btn-info", "ms-2");
    // btnPagar.innerHTML = "Pagar";
    // contenedorUsuarios.appendChild(btnPagar);
    contenedorUsuarios.appendChild(usuariosContenedor);
  });

  // contenedorUsuarios.appendChild(usuariosContenedor);
};

//------------------------------------//

const eliminarUsuario = (index) => {
  usuarios = usuarios.filter((usuario) => usuario.id !== usuarios[index].id);
  mostrarUsuarios(usuarios);
};

//------------------------------------//

const editarUsuario = (index) => {
  usuarioEditar = usuarios[index];
  nombre.value = usuarioEditar.nombre;
  telefono.value = usuarioEditar.telefono;
  direccion.value = usuarioEditar.telefono;

  modoEdicion = true;
  btn.value = "Editar";
};

//------------------------------------//

buscar.oninput = (event) => {
  if (event.target.value === " ") {
    mostrarUsuarios(usuarios);
  } else {
    let usuariosFiltrados = usuarios.filter((usuario) =>
      usuario.nombre.toLowerCase().includes(event.target.value)
    );
    mostrarUsuarios(usuariosFiltrados);
    // console.log(usuario);
  }
};

///BtnSalir///

btnSalir.addEventListener("click", () => {
  swal
    .fire({
      title: "¿Esta seguro que desea salir?",
      // titletext: "¿Esta seguro que desea salir?",
      icon: "question",
      confirmButtonText: "Aceptar",
      showCancelButton: true,
    })
    .then((respuestaSalir) => {
      if (respuestaSalir.isconfirmed) {
        location.reload();
        localStorage.clear();
      } else {
        console.log("Cancelado");
      }
    });
});

//     Swal.fire({

//     })

// Swal.fire({

// })

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
