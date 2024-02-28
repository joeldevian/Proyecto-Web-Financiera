<?php
    include("../conexion/conectar.php");
    
    if (isset($_POST['registrarpedido'])){ 
        
        if(
            strlen($_POST['cliente']) >= 1 &&
            strlen($_POST['fecha']) >= 1 &&
            strlen($_POST['detalles']) >= 1 &&
            strlen($_POST['estado']) >= 1 
        ){
            $nombre = trim($_POST['cliente']);
            $fecha = trim($_POST['fecha']);
            $detalles = trim($_POST['detalles']);
            $estado = trim($_POST['estado']);
            
            $consulta = "INSERT INTO pedido(Cliente,Fecha,Detalles,Estado)
                VALUES('$nombre','$fecha','$detalles','$estado')
                ";
            $resultado = mysqli_query($conex, $consulta);
            if($resultado){
                
                ?>
                <h3 class = "success"> Tu registro es a completado </h3>
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
