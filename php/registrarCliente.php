<?php
    include("../conexion/conectar.php");
    
    if (isset($_POST['registrarcliente'])){ 
        if(
            strlen($_POST['nombre']) >= 1 &&
            strlen($_POST['direccion']) >= 1 &&
            strlen($_POST['contacto']) >= 1 &&
            strlen($_POST['referencia']) >= 1 
        ){
            $nombre = trim($_POST['nombre']);
            $direccion = trim($_POST['direccion']);
            $contacto = trim($_POST['contacto']);
            $referencia = trim($_POST['referencia']);
            
            $consulta = "INSERT INTO datos(Nombre,Direccion,Contacto,Referencia)
                VALUES('$nombre','$direccion','$contacto','$referencia')
                ";
            $resultado = mysqli_query($conex, $consulta);
            if($resultado){
                ?>
                <h3 class = "success"> Tu registro está completado </h3>
                <?php
            }else{
                ?>
                <h3 class="error"> Ocurrio un error </h3>
                <?php
            }
        }else{
            ?>
                <h3 class="error">Complete todo los campos </h3>
            <?php
        }
    }
?>
