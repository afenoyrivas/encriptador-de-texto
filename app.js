//MATRIZ QUE ALMACENA LAS LETRAS Y SU VERSIÓN ENCRIPTADA
const codingMatrix = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];

//FUNCIÓN PARA ENCRIPTAR MENSAJES
function code(){
    let inputText = document.getElementById("encoding__input__text").value;
    let outputText = "";

    let flag = 0;
    let j = 0;

    for(let i=0; i<inputText.length; i++){

        while(j<codingMatrix.length && flag==0){
            
            if(inputText[i]==codingMatrix[j][0]){
                outputText += codingMatrix[j][1];
                flag=1;
            }

            j++;

        }
        if(flag==0){
            outputText += inputText[i];
        }
        else{
            flag=0;
        }

        j=0;
    }

    document.getElementById("encoding__output__text").value = outputText;

}

//FUNCIÓN PARA DESENCRIPTAR MENSAJES
function decode(){
    let inputText = document.getElementById("encoding__input__text").value;
    let outputText = inputText;

    for(let i=0; i<codingMatrix.length; i++){

        if(inputText.includes(codingMatrix[i][1])){
            outputText = outputText.replaceAll(codingMatrix[i][1], codingMatrix[i][0]);
        }
    }

    document.getElementById("encoding__output__text").value = outputText;
}

