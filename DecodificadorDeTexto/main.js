const gerarTexto = document.querySelector("#textoUm");
const resultadoTexto= document.querySelector("#textoDois");

function btnCriptografar(){
    const textoCriptografado = criptografar(gerarTexto.value);
    resultadoTexto.value = textoCriptografado;
    resultadoTexto.style.backgroundImage = "none";
}

function criptografar(stringCriptografar){
    let matrixCode = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringCriptografar = stringCriptografar.toLowerCase();
    for (let i = 0; i < matrixCode.length; i++) {
        if (stringCriptografar.includes(matrixCode[i][0])) {
            stringCriptografar = stringCriptografar.replaceAll(matrixCode[i][0], matrixCode[i][1]);
        }
    }
    return stringCriptografar;
}

function btnDescriptografar(){
    const textoDescriptografar = descriptografar(gerarTexto.value);
    resultadoTexto.value = textoDescriptografar;
    resultadoTexto.style.backgroundImage = "mensage";
}

function descriptografar(strDescriptado) {
    let matrixCode = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    strDescriptado = strDescriptado.toLowerCase();
    for (let i = 0; i < matrixCode.length; i++) {
        if (strDescriptado.includes(matrixCode[i][0])) {
            strDescriptado = strDescriptado.replaceAll(matrixCode[i][1], matrixCode[i][0]);
        }
    }
    return strDescriptado;
}