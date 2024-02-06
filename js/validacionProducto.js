// validacionProducto.js
function validarProducto(){
    var nombre             = document.getElementById('nombre').value;
    var tipo        = document.getElementById('tipo').value;
    var precio      = document.getElementById('precio').value;
    var descripcion     = document.getElementById('descripcion').value;

    var errorNombre           = document.getElementById('errorNombre');
    var errorTipo        = document.getElementById('errorTipo');
    var errorPrecio     = document.getElementById('errorPrecio');
    var errorDescripcion        = document.getElementById('errorDescripcion');
    
    // Limpiar mensajes de error
    errorNombre.innerText = '';
    errorTipo.innerText = ''; 
    errorPrecio.innerText = '';
    errorDescripcion.innerText = '';

    // Validar Nombre
    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        errorNombre.innerText = 'El nombre del producto  solo puede contener letras y espacios';
        return false;
    }

    // Validar tipo
    if (!/^[a-zA-Z\s]+$/.test(tipo)) {
        errorTipo.innerText = 'El tipo de  producto  solo puede contener letras y espacios';
        return false;
    }
    // Validar precio
    if (precio <= 0) {
        errorPrecio.innerText = 'El precio no puede ser negativo';
        return false;
    }
    // Validar edesccripcion
    if (!/^[a-zA-Z\s]+$/.test(descripcion)) {
        errorDescripcion.innerText = 'La descrición del  producto  solo puede contener letras y espacios';
        return false;
    }
    // Si la validación pasa, podrías enviar los datos al servidor o realizar otras acciones
    return true;
}
