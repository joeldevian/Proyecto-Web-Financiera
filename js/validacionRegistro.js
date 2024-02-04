// validacionRegistro.js

function validarRegistro() {
    var nombre = document.getElementById('nombre').value;
    var direccion = document.getElementById('direccion').value;
    var contacto = document.getElementById('contacto').value;
    var referencia = document.getElementById('referencia').value;

    var errorNombre = document.getElementById('errorNombre');
    var errorDireccion = document.getElementById('errorDireccion');
    var errorContacto = document.getElementById('errorContacto');
    var errorReferencia = document.getElementById('errorReferencia');

    // Limpiar mensajes de errorww
    errorNombre.innerText = '';
    errorDireccion.innerText = '';
    errorContacto.innerText = '';
    errorReferencia.innerText = '';

    // Validar nombre
    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        errorNombre.innerText = 'El nombre solo puede contener letras y espacios';
        return false;
    }

    // Validar dirección (al menos 5 caracteres)
    if (direccion.length < 5) {
        errorDireccion.innerText = 'La dirección debe tener al menos 5 caracteres';
        return false;
    }

    // Validar contacto (solo números)
    if (!/^\d+$/.test(contacto)) {
        errorContacto.innerText = 'El contacto solo puede contener números';
        return false;
    }

    // Validar referencia (no vacía)
    if (referencia.trim() === '') {
        errorReferencia.innerText = 'La referencia es obligatoria';
        return false;
    }

    // Si la validación pasa, podrías enviar los datos al servidor o realizar otras acciones
    return true;
}
