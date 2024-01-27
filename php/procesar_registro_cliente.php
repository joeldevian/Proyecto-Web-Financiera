<?php
// procesar_registro_cliente.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST["nombre"];
    $direccion = $_POST["direccion"];
    $contacto = $_POST["contacto"];
    $referencia = $_POST["referencia"];

    // Realizar el procesamiento necesario (puedes almacenar los datos en una base de datos, por ejemplo)

    // Enviar una respuesta (puede ser un mensaje de éxito o error)
    echo "¡Formulario procesado con éxito!";
} else {
    // Manejar el caso en el que no se haya enviado un formulario válido
    echo "Error: No se recibió un formulario válido.";
}
?>
