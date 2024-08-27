//MATRIZ QUE ALMACENA LAS LETRAS Y SU VERSIÓN ENCRIPTADA

const codingMatrix = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];


//FUNCIÓN PARA ENCRIPTAR MENSAJES

function code(){
    let inputText = document.getElementById("encoding__input__text").value;
    inputText=inputText.trim(); //Elimina espacios en blanco al principio y al final del string.

    let outputText = "";

    result = inputValidation(inputText);

    if(result === 1){

        let flag = 0;
        let j = 0;

        for(let i=0; i<inputText.length; i++){

            while(j<codingMatrix.length && flag==0){
                
                if(inputText[i]==codingMatrix[j][0]){
                    outputText += codingMatrix[j][1];
                    flag=1;
                    console.log("Encontró coincidencia");
                }

                j++;

            }
            if(flag==0){
                outputText += inputText[i];
                console.log("No encontró coincidencia");
            }
            else{
                flag=0;
            }

            j=0;
        }

        changeDisplay();

        document.getElementById("encoding__output__text").value = outputText;
    }
}


//FUNCIÓN PARA DESENCRIPTAR MENSAJES

function decode(){
    let inputText = document.getElementById("encoding__input__text").value;
    inputText=inputText.trim(); //Elimina espacios en blanco al principio y al final del string.
    
    let outputText = inputText;

    result = inputValidation(inputText);

    if(result === 1){

        for(let i=0; i<codingMatrix.length; i++){

            if(inputText.includes(codingMatrix[i][1])){
                outputText = outputText.replaceAll(codingMatrix[i][1], codingMatrix[i][0]);
            }
        }

        changeDisplay();

        document.getElementById("encoding__output__text").value = outputText;
    }
}


//EXPRESIÓN REGULAR PARA LA VALIDACIÓN DEL TEXTO DE ENTRADA

/* El caracter ^ significa negación. Por lo tanto, la RegEx va a
coincidir con cualquier caracter que no sea una letra minúscula, un espacio,
un punto, una coma, un signo de exclamación o un signo de interrogación. */

const invalidChars = /[^a-z.,!?\s]/;


//FUNCIÓN PARA VALIDAR EL TEXTO INGRESADO (no se permiten mayúsculas ni caracteres especiales)

function inputValidation(text){ //Retorna 1 si el string es válido, 0 si no es válido.
    if(text.match(invalidChars)){ //Si el string contiene caracteres no válidos, retorna 0.
        console.log("Caracteres no válidos");
        return 0;
    }
    else if(!text){ //Si el string está vacío, retorna 0.
        console.log("Mensaje vacío");
        return 0;
    }
    return 1; //Si el string es válido, retorna 1.
}

//FUNCIÓN PARA EDITAR LA SECCIÓN DEL RESULTADO DE LA ENCRIPTACIÓN/DESENCRIPTACIÓN

/* Se oculta la imagen y el texto de "mensaje no encontrado".
Se muestra el texto ingresado por el usuario (ya modificado). */

function changeDisplay(){

    document.getElementById("no-message-image").style.display = "none";
    document.getElementById("no-message-title").style.display = "none";
    document.getElementById("no-message-text").style.display = "none";

    document.getElementById("encoding__output__text").style.visibility = "visible";
    document.getElementById("copy-button").style.visibility = "visible";
}


//FUNCIÓN PARA COPIAR EL RESULTADO DE LA ENCRIPTACIÓN/DESENCRIPTACIÓN EN EL PORTAPAPELES

function copy(){
    navigator.clipboard.writeText(document.getElementById("encoding__output__text").value);
}


/*
Funciona pero no está implementada


//FUNCIÓN PARA PEGAR EL TEXTO CONTENDIO EN EL PORTAPAPELES

function paste() {

    promise = navigator.clipboard
    .readText()
    .then(
        copiedText => document.getElementById("encoding__input__text").value = copiedText
    );
    console.log(promesa);
}
*/

