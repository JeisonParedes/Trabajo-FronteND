// Mostrar la fecha actual
document.getElementById('fecha').textContent = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// Función para agregar un robot
function agregarRobot() {
    const nombre = document.getElementById('nombreRobot').value.trim();
    const tipo = document.getElementById('tipoRobot').value.trim();

    if (!nombre || !tipo) {
        alert('Por favor completa todos los campos del robot.');
        return;
    }

    const tarjeta = document.createElement('div');
    tarjeta.className = 'card';
    tarjeta.innerHTML = `
        <span>${nombre} - ${tipo}</span>
        <div class="actions">
            <button onclick="eliminarTarjeta(this)">Eliminar</button>
        </div>
    `;

    document.getElementById('listaRobots').appendChild(tarjeta);

    document.getElementById('nombreRobot').value = '';
    document.getElementById('tipoRobot').value = '';
}

// Función para agregar un ingeniero
function agregarIngeniero() {
    const nombre = document.getElementById('nombreIngeniero').value.trim();
    const especialidad = document.getElementById('especialidadIngeniero').value.trim();

    if (!nombre || !especialidad) {
        alert('Por favor completa todos los campos del ingeniero.');
        return;
    }

    const tarjeta = document.createElement('div');
    tarjeta.className = 'card';
    tarjeta.innerHTML = `
        <span>${nombre} - ${especialidad}</span>
        <div class="actions">
            <button onclick="eliminarTarjeta(this)">Eliminar</button>
        </div>
    `;

    document.getElementById('listaIngenieros').appendChild(tarjeta);

    document.getElementById('nombreIngeniero').value = '';
    document.getElementById('especialidadIngeniero').value = '';
}

// Función para eliminar tarjeta
function eliminarTarjeta(boton) {
    const tarjeta = boton.closest('.card');
    tarjeta.remove();
}