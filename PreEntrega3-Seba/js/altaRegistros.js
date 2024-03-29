/*-----Clases-----*/

class Categoria {
    constructor(id, nombre){
        this.id = id;
        this.nombre = nombre;
    }
}

class Usuario{
    constructor(id, username, password){
        this.id = id;
        this.username = username;
        this.password = password;
    }

    // validarLogin(username, password){
    //     if (username = this.username && password == this.password){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    hy78gvalidarLogin(username){
        return username == this.username;
    }
        
}

/*-----Funciones-----*/

/**************************************************************************************************/
/* Esta función genera las opciones de categorías en el index.html a partir del array categorias */ 
/**************************************************************************************************/

function agregarCategorias() {

    const selectCategorias1 = document.getElementById("selectcategoria1");

    for(const categoria of categorias) {

        const opcionCategoria = document.createElement("option");
        opcionCategoria.value = categoria.id;
        opcionCategoria.innerHTML = categoria.nombre;
    
        selectCategorias1.appendChild(opcionCategoria);
    }
}

/**************************************************************************************************/
/* Esta función valida las hs ingresadas en el input del index.html */ 
/**************************************************************************************************/

function validarHs(horas){

    return !!(Number.isInteger(horas) && horas > 0 && horas <= 24);

}

/*****************************************************************************************************************/
/* Verifica si tengo registros guardados en el storage, si no los tengo creo el array vacío y lo envío a Storage */ 
/****************************************************************************************************************/

function obtenerRegistrosDeStorage() {

    let registrosEnStorage = JSON.parse(localStorage.getItem("registros"));

    if(!registrosEnStorage) {
        registrosEnStorage = [];
        localStorage.setItem("registros", JSON.stringify(registrosEnStorage));
    }

    return registrosEnStorage;
}

/*****************************************************************************************************************/
/* Guarda un registro en Storage
/****************************************************************************************************************/

function guardarRegistrosEnStorage(registro) {

    const registrosEnStorage = obtenerRegistrosDeStorage();
    registrosEnStorage.push(registro);
    localStorage.setItem("registros", JSON.stringify(registrosEnStorage));
}

/*****************************************************************************************************************/
/* Informa al usuario que el logueo fue exitoso
/****************************************************************************************************************/
function notificarLogueoExitoso(usuarioIngresado){

    const notificacion = document.getElementById("notificaciones");


        const opcionNotificacion = document.createElement("h5");
        opcionNotificacion.id = "notificacionLogueo";
        opcionNotificacion.innerHTML = ("Bienvenido " + usuarioIngresado + "!");
        opcionNotificacion.style.cssText = 'text-align: center; color: green; margin-top:3em;'
    
        notificacion.replaceChild(opcionNotificacion, notificacionLogueo);
}

/*****************************************************************************************************************/
/* Informa al usuario que el logue fue NO exitoso y por lo tanto no se guardarán los datos ingresados
/****************************************************************************************************************/
function notificarLogueoErroneo(){

    const notificacion = document.getElementById("notificaciones");


        const opcionNotificacion = document.createElement("h5");
        opcionNotificacion.id = "notificacionLogueo";
        opcionNotificacion.innerHTML = "El logueo no fue exitoso";
        opcionNotificacion.style.cssText = 'text-align: center; color: red; margin-top:3em; '
    
        notificacion.replaceChild(opcionNotificacion,notificacionLogueo);

        const opcionNotificacionAlta = document.createElement("h5");
        opcionNotificacionAlta.id = "notificacionAltaRegistro";
        opcionNotificacionAlta.innerHTML = "No se guardará el registro";
        opcionNotificacionAlta.style.cssText = 'text-align: center; color: red;'
    
        notificacion.replaceChild(opcionNotificacionAlta, notificacionAltaRegistro);

}
/*****************************************************************************************************************/
/* Informa al usuario que se guardarán los datos ingresados.
/****************************************************************************************************************/
function notificarRegistroExitoso(){

    const notificacion = document.getElementById("notificaciones");


        const opcionNotificacion = document.createElement("h5");
        opcionNotificacion.id = "notificacionAltaRegistro";
        opcionNotificacion.innerHTML = "Se guardó el registro exitosamente.";
        opcionNotificacion.style.cssText = 'text-align: center; color: green;'
    
        notificacion.replaceChild(opcionNotificacion, notificacionAltaRegistro);
    
}



/* MAIN */

//Creo las categorías del selection en el html
agregarCategorias();

//creo un usuario de prueba
const usuario = new Usuario(1, "admin", "123456");

//Acciones luego del submit del formulario
document.getElementById("formIngresoRegistros").addEventListener("submit", (event) => {

    event.preventDefault();

    //obtengo los datos de los inputs del formulario
    let usuarioIngresado = document.getElementById("usuario").value;
    const fecha = document.getElementById("fechaSeleccionada").value;
    const datosFecha = fecha.split("-");
    const fechaAGuardar = `${datosFecha[1]}/${datosFecha[2]}/${datosFecha[0]}`;
    const categoria = categorias.find(categoria => categoria.id == document.getElementById("selectcategoria1").value).nombre;
    const horasIngresadas = Number(document.getElementById("horas").value);


    if(usuario.validarLogin(usuarioIngresado) && validarHs(horasIngresadas)) {

        notificarLogueoExitoso(usuarioIngresado);

        const nuevoRegistro = new Registro(usuarioIngresado, fechaAGuardar, categoria, horasIngresadas);
        guardarRegistrosEnStorage(nuevoRegistro);

        notificarRegistroExitoso();
       
        document.querySelector("form").reset();
    }else{
        notificarLogueoErroneo();
        document.querySelector("form").reset();
    }
});








