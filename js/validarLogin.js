// validarLogin()

function validarLogin(){
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    var errorUsuario = document.getElementById("errorUsuario");
    var errorContrasena = document.getElementById("errorContrasena");

    // limpiar mesaje error
    errorUsuario.innerText = '';
    errorContrasena.innerText= '';

    // Validar credenciales (ejemplo: usuario 'admin', contraseña '123456')
    if (usuario !== 'admin') {
        errorUsuario.innerText = 'Usuario incorrecto. Por favor, inténtelo de nuevo.';
        return false;
    }
    if (contrasena !== '123456') {
        errorContrasena.innerText = 'contraseña incorrecto. Por favor, inténtelo de nuevo.';
        return false;
    }
    // Si la validación pasa, podrías enviar los datos al servidor o redirigir a otra página
    //alert('Inicio de sesión exitoso'); // Solo para ejemplo, puedes cambiar esto según tus necesidades
    return true;
    

}





   

    

    