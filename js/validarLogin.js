// validarLogin()

function validarLogin() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    var errorUsuario = document.getElementById("errorUsuario");
    var errorContrasena = document.getElementById("errorContrasena");

    // limpiar mensaje de error
    errorUsuario.innerText = '';
    errorContrasena.innerText = '';

    // Validar credenciales
    if (usuario !== 'admin') {
        errorUsuario.innerText = 'Usuario incorrecto. Por favor, inténtelo de nuevo.';
        return false;
    }
    if (contrasena !== '123456') {
        errorContrasena.innerText = 'Contraseña incorrecta. Por favor, inténtelo de nuevo.';
        return false;
    }

    // Redirigir a la página principal
    window.location.href = "./main.html";

    return true; // No es necesario en este punto, pero puedes mantenerlo si lo deseas
}





   

    

    