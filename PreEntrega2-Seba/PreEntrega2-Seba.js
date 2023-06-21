class Actividad {

    constructor(usuario, categoria, hsIngresadas) {

        this.usuario = usuario;
        this.fecha = new Date();
        this.categoria = categoria;
        this.hsIngresadas = hsIngresadas;

    }

    registrarHsIngresadasCat1(){
        acumuladorHsCategoria1 = acumuladorHsCategoria1 + this.hsIngresadas;
    }

    registrarHsIngresadasCat2(){
        acumuladorHsCategoria2 = acumuladorHsCategoria2 + this.hsIngresadas;
    }

    registrarHsIngresadasCat3(){
        acumuladorHsCategoria3 = acumuladorHsCategoria3 + this.hsIngresadas;
    }

    registrarHsIngresadasCat4(){
        acumuladorHsCategoria4 = acumuladorHsCategoria4 + this.hsIngresadas;
    }

    registrarHsIngresadasCat5(){
        acumuladorHsCategoria5 = acumuladorHsCategoria5 + this.hsIngresadas;
    }
}

function validarUsuario(usuario){
    return usuario == "Usuario Registrado";
}

function validarHsIngresadas(hsIngresadas){
    return !(hsIngresadas < 0 || hsIngresadas > 24);
}

let acumuladorHsCategoria1 = 0;
let acumuladorHsCategoria2 = 0;
let acumuladorHsCategoria3 = 0;
let acumuladorHsCategoria4 = 0;
let acumuladorHsCategoria5 = 0;
const actividades = [];


let usuario = prompt("Ingrese su nombre de usuario");
let resultadoValidarUsuario = validarUsuario(usuario);

if (resultadoValidarUsuario){

    document.write("<h1>" + "Usuario Valido. Bienvenido!" + "</h1>");
    let categoria = parseInt(prompt("Ingrese la categoría en la que desea registrar su actividad:(1)Trabajo - (2)Estudio (3) Ejercicio Físico (4) Recreación (5) Meditación. Para salir ingrese 0."));
    

    do{
    
            let hsIngresadas = parseInt(prompt("Ingrese la cantidad de hs a registrar"));
            let resultadoValidarHoras = validarHsIngresadas(hsIngresadas);

            if (resultadoValidarHoras){

                const actividad = new Actividad(usuario,categoria,hsIngresadas);
                actividades.push(actividad);

                switch (categoria) {
                    case 1:
                        actividad.registrarHsIngresadasCat1(hsIngresadas);
                        break;
                    case 2:
                        actividad.registrarHsIngresadasCat2(hsIngresadas);
                      break;
                    case 3:
                        actividad.registrarHsIngresadasCat3(hsIngresadas);
                        break;
                    case 4:
                        actividad.registrarHsIngresadasCat4(hsIngresadas);
                        break;
                    case 5:
                        actividad.registrarHsIngresadasCat5(hsIngresadas);
                        break;
                    default:
                        document.write("<h1>" + "La categoría ingresada es invalida" + "</h1>");
                        break;
                  }
                  

                  
            }else{
                document.write("<h1>" + "El nro. de horas ingresado es invalido" + "</h1>");
            }
    
      
        categoria = parseInt(prompt("Ingrese la categoría en la que desea registrar su actividad:(1)Trabajo - (2)Estudio (3) Ejercicio Físico (4) Recreación (5) Meditación. Para salir ingrese 0."));

    }while(categoria != 0);

    document.write("<h1>" + "Hs registradas para la categoría Trabajo: " + acumuladorHsCategoria1 + "</h1>");
    document.write("<h1>" + "Hs registradas para la categoría Estudio: " + acumuladorHsCategoria2 + "</h1>");
    document.write("<h1>" + "Hs registradas para la categoría Ejercicio Físico: " + acumuladorHsCategoria3 + "</h1>");
    document.write("<h1>" + "Hs registradas para la categoría Recreación: " + acumuladorHsCategoria4 + "</h1>");
    document.write("<h1>" + "Hs registradas para la categoría Meditación: " + acumuladorHsCategoria5 + "</h1>");
    
    for(const actividad of actividades) {

        document.write("<ul>");
        document.write("<li>Usuario: " + actividad.usuario + "</li>");
        document.write("<li>Fecha: " + actividad.fecha + "</li>");
        document.write("<li>Categoría: " + actividad.categoria + "</li>");
        document.write("<li>Hs Ingresadas: " + actividad.hsIngresadas + "</li>");
        document.write("</ul>");
    }
    
    /*Ordena decrecientemente por categoria*/ 
    actividades.sort(function (a, b){
        return (b.categoria - a.categoria)
    })

    for(const actividad of actividades) {

        document.write("<ul>");
        document.write("<li>Usuario: " + actividad.usuario + "</li>");
        document.write("<li>Fecha: " + actividad.fecha + "</li>");
        document.write("<li>Categoría: " + actividad.categoria + "</li>");
        document.write("<li>Hs Ingresadas: " + actividad.hsIngresadas + "</li>");
        document.write("</ul>");
    }
    
      /*Ordena ascendentemente por categoria*/ 
    actividades.sort(function (a, b) {
        return (a.categoria - b.categoria)
    })

    for(const actividad of actividades) {

        document.write("<ul>");
        document.write("<li>Usuario: " + actividad.usuario + "</li>");
        document.write("<li>Fecha: " + actividad.fecha + "</li>");
        document.write("<li>Categoría: " + actividad.categoria + "</li>");
        document.write("<li>Hs Ingresadas: " + actividad.hsIngresadas + "</li>");
        document.write("</ul>");
    }

}else{
    document.write("<h1>" + "Usuario No Registrado" + "</h1>");
}
