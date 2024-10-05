// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad(numero) {
    if (numero % 2 === 0) {
        console.log("El número " + numero + " es Par");
    } else {
        console.log("El número " + numero + " es Impar");
    }
}
verificarParidad(4);
verificarParidad(5);

// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
    if(edad <= 18){
        console.log(edad+    "  Es Menor de Edad" );
    } else{
        if(edad <= 65){
            console.log(edad+  "  Es un Adulto ");
        }else{
            console.log(edad+   "  Es un Adulto Mayor");
        }
    }
}
clasificarEdad(15);
clasificarEdad(30);
clasificarEdad(70);

// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
function cuentaRegresiva(numero) {
    if(numero < 0){
        console.log("Por favor, introduce un número entero positivo.");
        return;
    }
    while(numero >= 0){
        console.log(numero);
        numero---1;
    }
}
cuentaRegresiva(5);

// Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
    let contador = 0; 
    do {
        console.log("Estoy aprendiendo JavaScript");
        contador++; 
    } while (contador < 5); 
}
repetirMensaje();

// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
    if (numero < 0) {
        console.log("Por favor, introduce un número entero positivo.");
        return;
    }

    for (let i = 0; i <= numero; i++) {
        if (i % 2 === 0) { 
            console.log(i); 
        }
    }
}
imprimirPares(10);

// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
    for(let i = 1; i <= 10; i++) {
        if(i===6){
            break;
        }
        console.log(i);
    }
}
detenerEnSeis();

// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() {
    for(let i = 1; i <= 10; i++){
        if( i==5){
            continue;
        }
        console.log(i);
    }
}
saltarCinco();

// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dia) {
    let diaSemana;

    switch (dia) {
        case 1:
            diaSemana = "Lunes";
            break;
        case 2:
            diaSemana = "Martes";
            break;
        case 3:
            diaSemana = "Miércoles";
            break;
        case 4:
            diaSemana = "Jueves";
            break;
        case 5:
            diaSemana = "Viernes";
            break;
        case 6:
            diaSemana = "Sábado";
            break;
        case 7:
            diaSemana = "Domingo";
            break;
        default:
            return "Número no válido. Debe ser del 1 al 7."; 
    }

    return diaSemana;
}
console.log(obtenerDiaSemana(1)); 
console.log(obtenerDiaSemana(5)); 
console.log(obtenerDiaSemana(8)); 

// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(letra) {
    letra = letra.toLowerCase();

    switch (letra) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return letra + " es una vocal.";
        default:
            return letra + " no es una vocal.";
    }
}
console.log(esVocal('A'));
console.log(esVocal('b')); 
console.log(esVocal('e')); 
console.log(esVocal('x'));

// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function evaluarNumeros(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        return "Todos los números son positivos.";
    } else if (a < 0 || b < 0 || c < 0) {
        if (a < 0 && b < 0 && c < 0) {
            return "Todos los números son negativos.";
        } else {
            return "Al menos uno de los números es negativo.";
        }
    } else {
        return "Los números son mixtos (positivos y negativos).";
    }
}
console.log(evaluarNumeros(5, 3, 2));  
console.log(evaluarNumeros(-1, 2, 3)); 
console.log(evaluarNumeros(-1, -2, -3));
console.log(evaluarNumeros(1, -1, 1)); 

// Exportar todas las funciones
export {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};
