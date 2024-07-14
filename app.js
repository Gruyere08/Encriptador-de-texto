const a = 'ai';
const e = 'enter';
const li = 'imes';
const o = 'ober';
const u = 'ufat';

const temaGuardado = localStorage.getItem('tema') || 'oscuro';
document.documentElement.setAttribute('tema', temaGuardado);
let iconos = ["Alura", "warning", "imagenError", "imagenInicial"];
actualizarIconos();

function encriptarTexto(texto) {

    if (ilegal(texto)) {
        rechazar();
        return
    }
    
    if (texto !== "") {
        ocultarCartel();
    }


    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        switch (char) {
            case 'a':
                resultado += a;
                break;
            case 'e':
                resultado += e;
                break;
            case 'i':
                resultado += li;
                break;
            case 'o':
                resultado += o;
                break;
            case 'u':
                resultado += u;
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
    
    return;
};

function rechazar() {
    let parrafo = document.getElementById('parrafoResultado');
    let titulo = document.getElementById('tituloResultado');
    document.getElementById('imagenInicial').style.display = "none";
    document.getElementById('copiar').style.visibility = "hidden";
    document.getElementById('campoSalida').style.display = "none";
    document.getElementById('imagenError').style.display = "inline";
    parrafo.style.display = "block";
    titulo.style.display = "block";
    parrafo.innerHTML = "No se permiten <strong>mayusculas</strong> ni <strong>tildes</strong>."
    titulo.textContent = "Algo anduvo mal."
    
}


function ocultarCartel(){
    mostrarResultado();
    document.getElementById('imagenError').style.display = "none";
    document.getElementById('imagenInicial').style.display = "none";
    document.getElementById('parrafoResultado').style.display = "none";
    document.getElementById('tituloResultado').style.display = "none";

    return;
}


function mostrarResultado(){
    document.getElementById('copiar').style.visibility = "visible";
    document.getElementById('campoSalida').style.display = "block";

    return;
}


function ilegal(str) {
    const regular = /[A-ZÁÉÍÓÚÜáéíóú]/;
    return regular.test(str);
}

function limpiar() {
    document.getElementById('campoEntrada').value = "";
    return;
}


function cambiarTema() {
    const temaActual = document.documentElement.getAttribute('tema');
    const temaNuevo = temaActual === 'oscuro' ? 'claro' : 'oscuro';
    document.documentElement.setAttribute('tema', temaNuevo);
    actualizarIconos();
    localStorage.setItem('tema', temaNuevo);
    return;
}


function actualizarIconos(){
    if (oscuro()) {
        for (let icono of iconos) {
            console.log(icono)
            oscurecer(document.getElementById(icono));
        }
        console.log("entre al oscurecer")
    } else {
        for (let icono of iconos) {
            enclarecer(document.getElementById(icono));
        }
        console.log("entre al enclarecer")
    }
    
    return 0;
}


function oscuro(){
    return document.documentElement.getAttribute('tema') === "oscuro";
}


function enclarecer(elemento) {
    elemento.src = elemento.src.replace(/(\.[^/.]+)$/, '_claro$1');
    return;
}


function oscurecer(elemento) {
    elemento.src = elemento.src.replace(/_claro(\.[^/.]+)$/, '$1');
    return;
}

