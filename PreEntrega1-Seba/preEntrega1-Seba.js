function validarUsuario(username){
    return username == "Usuario Registrado";
}

function validarCategorias(categoria){
    return !((categoria < 1) || (categoria > 5));
}
function validarHsIngresadas(horasIngresadas){
    return !(horasIngresadas<0 || horasIngresadas > 24);
}

function registrarHsIngresadas(horasIngresadasxCategoría){

    let hsRegistradas = 0;
    hsRegistradas = hsRegistradas + horasIngresadasxCategoría;

    return hsRegistradas;
    
}

function imprimirHsxCategoria(username,hsRegistradas,categoria){

    let nombreCategoria = "";
  
    switch (categoria){
        case 1:
            nombreCategoria = 'Trabajo';
            break;
        case 2:
            nombreCategoria  = 'Estudio';
            break;
        case 3:
            nombreCategoria  = 'Ejercicio Físico';
            break;
        case 4:
            nombreCategoria  = 'Recreación';
            break;
        case 5:
            nombreCategoria  = 'Meditación';
            break;
    }

    document.write("<h1>" + "En el día de la fecha dedicaste " + hsRegistradas + " hs en la categoría: " + nombreCategoria  + "</h1>");

}


let username = prompt("Ingrese su nombre de usuario");
let resultadoValidarUsuario = validarUsuario(username);

if (resultadoValidarUsuario){

    document.write("<h1>" + username + ":" + "</h1>" + "</br>");
    let categoria = parseInt(prompt("Ingrese la categoría en la que desea registrar su actividad:(1)Trabajo - (2)Estudio (3) Ejercicio Físico (4) Recreación (5) Meditación. Para salir ingrese 0."));

    do{

        let resultadoValidarCategorias = validarCategorias(categoria);
    
        if (resultadoValidarCategorias){
    
            let horasIngresadasxCategoría = parseInt(prompt("Ingrese la cantidad de hs a registrar"));
            let resultadoValidarHoras = validarHsIngresadas(horasIngresadasxCategoría);

            if (resultadoValidarHoras){
                let hsRegistradas = registrarHsIngresadas(horasIngresadasxCategoría);
                
                 
                imprimirHsxCategoria(username,hsRegistradas, categoria);
            }else{
                document.write("<h1>" + "El nro. de horas ingresado es invalido" + "</h1>");
            }
    
        }else{
            document.write("<h1>" + "La categoría ingresada es invalida" + "</h1>");
        }
        categoria = parseInt(prompt("Ingrese la categoría en la que desea registrar su actividad:(1)Trabajo - (2)Estudio (3) Ejercicio Físico (4) Recreación (5) Meditación. Para salir ingrese 0."));

    }while(categoria != 0);

    
}else{
    document.write("<h1>" + "Usuario No Registrado" + "</h1>");
}
