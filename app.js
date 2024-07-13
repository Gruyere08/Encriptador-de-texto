




function encriptarTexto(texto) {
    
    primerResultado();

    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        switch (char) {
            case 'a':
                resultado += 'ai';
                break;
            case 'e':
                resultado += 'enter';
                break;
            case 'i':
                resultado += 'imes';
                break;
            case 'o':
                resultado += 'ober';
                break;
            case 'u':
                resultado += 'ufat';
                break;
            default:
                resultado += char;
        }
    }

    return resultado;
}




function encriptar() {
    let texto = document.getElementById("campoEntrada").value
    document.getElementById("campoSalida").value = encriptarTexto(texto);
};


function primerResultado(){
    document.getElementById('copiar').style.visibility = "visible";
    document.getElementById('campoSalida').style.display = "block";
    document.getElementById('imagenInicial').style.display = "none";
    document.getElementById('parrafoResultado').style.display = "none";
    document.getElementById('tituloResultado').style.display = "none";

    
}