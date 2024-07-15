const a = 'ai';
const e = 'enter';
const li = 'imes';
const o = 'ober';
const u = 'ufat';

const cartel = ['imagenError', 'imagenInicial', 'parrafoResultado', 'tituloResultado']
const iconos = ["Alura", "warning", "imagenError", "imagenInicial", "icono_tema", "icono_home", "icono_info"];
const bloques = ["bloque_principal", "bloque_secundario", "bloque_botones", "titulo"]
const boton_tema = document.getElementById("boton_tema");


const temaGuardado = localStorage.getItem('tema') || 'oscuro';
document.documentElement.setAttribute('tema', temaGuardado);
boton_tema.addEventListener("click", cambiarTema);
actualizarIconos();
transicionBloques();
aparecerIconos();




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


function esconderIconos() {
    let botones = document.querySelectorAll(".menu__boton");
    for (const elemento of botones) {
        elemento.classList.remove("fuera_de_pantalla");
        elemento.classList.remove("aparecer_por_izquierda");
        elemento.classList.add("salir_por_izquierda");
    }
}

function aparecerIconos() {
    let botones = document.querySelectorAll(".menu__boton");
    for (const elemento of botones) {
        elemento.classList.add("fuera_de_pantalla");
        elemento.classList.remove("salir_por_izquierda");
        elemento.classList.add("aparecer_por_izquierda");
    }
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


function ocultarCartel() {
    
    for (const elemento of cartel) {
        document.getElementById(elemento).classList.add("oculto")
        setTimeout(() => {
            document.getElementById(elemento).style.display = "none";
            mostrarResultado();
        }, 300);
    }
    return;
}


function mostrarResultado() {
    document.getElementById('copiar').style.visibility = "visible";
    document.getElementById('campoSalida').style.display = "block";
    document.getElementById('copiar').classList.remove("oculto")
    document.getElementById('campoSalida').classList.remove("oculto")

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
    boton_tema.disabled = true;
    transicionBloques();
    esconderIconos();
    const temaActual = document.documentElement.getAttribute('tema');
    const temaNuevo = temaActual === 'oscuro' ? 'claro' : 'oscuro';
    setTimeout(() => {
        document.documentElement.setAttribute('tema', temaNuevo);
        actualizarIconos();
        transicionBloques();
        aparecerIconos();
        boton_tema.disabled = false;
    }, 1100);
    localStorage.setItem('tema', temaNuevo);
    return;
}


function actualizarIconos() {
    if (oscuro()) {
        for (let icono of iconos) {
            oscurecer(document.getElementById(icono));
            boton_tema.setAttribute("texto-cartel", "Tema claro")
        }
    } else {
        for (let icono of iconos) {
            enclarecer(document.getElementById(icono));
            boton_tema.setAttribute("texto-cartel", "Tema oscuro")
        }
    }

    return 0;
}


function oscuro() {
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


function transicionBloques() {
    console.log("entre al transition");
    for (const elemento of bloques) {
        document.getElementById(elemento).classList.toggle("oculto");
    }
}

