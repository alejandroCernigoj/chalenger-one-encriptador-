const textArea=document.querySelector(".text-area");
const mensaje=document.querySelectorAll(".mensaje");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/


function btnEncriptar("btn-encriptar"){
    const textoEncriptado= encriptar(textArea.value) 
    mensaje.value= textoEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage = "none";
}

function encriptar(){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.tolowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i],[0])){
            stringEncriptada=stringEncriptada.repleaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    } 
    return stringEncriptada
}



