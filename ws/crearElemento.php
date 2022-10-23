<?php

    require_once ("./interfaces/IToJson.php");
    require_once ("./models/Elemento.php");

    $nombre = $_POST['nombre']; 
    $descripcion = $_POST['descripcion'];
    $n_serie = $_POST['numserie'];
    $estado = $_POST['estado'];
    $prioridad = $_POST['ch'];

    // echo $nombre;
    // echo "<br>";
    // echo $descripcion;
    // echo "<br>";
    // echo $n_serie;
    // echo "<br>";
    // echo $estado;
    // echo "<br>";
    // echo $prioridad;
    // echo "<br>";

    $element1 = new Elemento($nombre, $descripcion, $n_serie, $estado, $prioridad);

    $element1->toJson($element1);

    // var_dump($element1);

    // if (!empty($nombre) && !empty($descripcion) && !empty($n_serie) && !empty($estado) && !empty($prioridad))
    // {
    //     $arrayForm = array($nombre, $descripcion, $n_serie, $estado, $prioridad);
    //     $arryJson = json_encode($arrayForm);
    //     var_dump($arryJson);
        
        
    //     $archivoTxt = fopen("c:\\xampp\\htdocs\\2ºDAW\\DWES\\3_PracticaTres\\fichero.txt", "a");
    //     fwrite($archivoTxt, $arryJson. PHP_EOL);
    //     fclose($archivoTxt);
        
    //     echo "Formulario enviado CORRECTAMENTE!!";
    // }
    // else
    // {
    //     echo "Algo ha salido mal :( | Recuerda rellenar TODOS los campos del formulario!!";
    // }

    

//como meter un ojbeto en un json
//como serializar objetos para json php
//json_encode es el mtdo que lo transf en json
?>