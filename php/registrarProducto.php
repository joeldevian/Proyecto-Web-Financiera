<?php
    include("../conexion/conectar.php");
    
    if (isset($_POST['registrarproducto'])){ 
        
        if(
            strlen($_POST['nombre']) >= 1 &&
            strlen($_POST['tipo']) >= 1 &&
            strlen($_POST['precio']) >= 1 &&
            strlen($_POST['descripcion']) >= 1 
        ){
            $nombre = trim($_POST['nombre']);
            $tipo = trim($_POST['tipo']);
            $precio = trim($_POST['precio']);
            $descripcion = trim($_POST['descripcion']);
            
            $consulta = "INSERT INTO productos(Nombre,Tipo,Precio,Descripcion)
                VALUES('$nombre','$tipo','$precio','$descripcion')
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
