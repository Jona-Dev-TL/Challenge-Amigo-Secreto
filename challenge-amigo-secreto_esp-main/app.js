// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declarar un array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    // Actualizar el array de amigos
    amigos.push(nombre);
    // Limpiar el campo de entrada y enfocarlo
    input.value = "";
    input.focus();
    // Actualizar la lista de amigos en pantalla
    actualizarListaAmigos();
}

// Evento para agregar amigos al presionar Enter
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

// Función para actualizar la lista de amigos
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista existente
    // Recorrer el array de amigos y agregar cada uno a la lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    // Mostrar el resultado con el mensaje deseado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto sorteado es: ${amigoSorteado}</li>`;
    // Limpiar la lista de amigos en pantalla
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    // Reiniciar el array de amigos
    amigos = [];
}