




function encriptarTexto(texto) {
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