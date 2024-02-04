// validacionCertificacion.js
function validarCertificacion(){
    var tipo            = document.getElementById('tipo').value;
    var fechaEmision    = document.getElementById('fechaEmision').value;
    var fechaExpiracion = document.getElementById('fechaExpiracion').value;
    var entidadEmisora  = document.getElementById('entidadEmisora').value;
    var nombreProducto  = document.getElementById('nombreProducto').value;
    var nombreProveedor = document.getElementById('nombreProveedor').value;

    var errorTipo            = document.getElementById('errorTipo');
    var errorFechaEmision    = document.getElementById('errorFechaEmision');
    var errorFechaExpiracion = document.getElementById('errorFechaExpiracion');
    var errorEntidadEmisora  = document.getElementById('errorEntidadEmisora');
    var errorNombreProducto = document.getElementById('errorNombreProducto');
    var errorNombreProveedor = document.getElementById('errorNombreProveedor');

    

    // Limpiar mensajes de error
    errorTipo.innerText = '';
    errorFechaEmision.innerText = ''; 
    errorFechaExpiracion.innerText = '';
    errorEntidadEmisora.innerText = '';
    errorNombreProducto.innerText = '';
    errorNombreProveedor.innerText = '';



    // Validar tipo
    if (!/^[a-zA-Z\s]+$/.test(tipo)) {
        errorTipo.innerText = 'El Tipo de certifiación solo puede contener letras y espacios';
        return false;
    }

    // Validar fecha de Emision
    if (fechaEmision > fechaExpiracion ) {
        errorFechaEmision.innerText = 'La fecha de emisión no puede ser despues que la fecha de expiración';
        return false;
    }

    // Validar fecha de expiración 
    if (fechaExpiracion < fechaEmision) {
        errorFechaExpiracion.innerText = 'La fecha de expiracion no puede ser antes que la fecha de emision';
        return false;
    }

    // Validar entidad emisora
    if (!/^[a-zA-Z\s]+$/.test(entidadEmisora)) {
        errorEntidadEmisora.innerText = 'La entidar emisora solo puede contener letras y espacios';
        return false;
    }
    //validar nombre del producto
    if (!/^[a-zA-Z\s]+$/.test(nombreProducto)) {
        errorNombreProducto.innerText = 'El Tipo de producto solo puede contener letras y espacios';
        return false;
    }
    //validar nombre de proveedor
    if (!/^[a-zA-Z\s]+$/.test(nombreProveedor)) {
        errorNombreProveedor.innerText = 'El Tipo de proveedor solo puede contener letras y espacios';
        return false;
    }
    // Si la validación pasa, podrías enviar los datos al servidor o realizar otras acciones
    return true;
}
