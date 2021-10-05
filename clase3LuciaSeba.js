let ingreso = parseInt(prompt("Ingrese un valor para calcular su factorial. Ingrese 0 para salir."));
let factorial = 1;

while (ingreso != 0){
    for (let i = ingreso; i > 1  ; i--){
 
        factorial = factorial * i;
    }

    document.write("<h1>" + "El factorial para el nro " + ingreso + " es : " + factorial + "</h1>");
    ingreso = parseInt(prompt("Ingrese un valor para calcular su factorial. Ingrese 0 para salir."));
   
}

