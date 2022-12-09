<?php
require_once 'DataBase.php';

try{
    $database = new DataBase ('root', '', '127.0.0.1','3306','monfab'); //crear una instancia de una base de datos para noseke
    $nombre = $_POST['nombre'] ?? null;//esto es para recoger el por post
    $desc = $_POST['descripcion'] ?? null;
    $num = $_POST['numero'] ?? null;
    $est = $_POST['estado'] ?? null;
    $prio = $_POST['prioridad'] ?? null;


    $arrVacio = [];
 //hacer valores x defecto, si nombre estan vacio les asigno algo

    if (empty($nombre)){
        $nombre = 'vaxio';
    }
    if (empty($desc)){
        $desc = 'vaxio';
    }
    if (empty($num)){
        $num = 'vaxio';
    }
    if (!empty($est) && $est='activo'){
        $est = 'activo';
    }else{
        $est = 'inactivo';
    }

    switch($prio){
        case 'baja': 
            $prio = 'baja';
            break;
        case 'media': 
            $prio = 'media';
            break;
        case 'alta': 
            $prio = 'alta';
            break;
        default;
            $prio = 'media';
            break;
            
    }
    

    if(!empty($nombre) || !empty($desc) || !empty($num) || !empty($est) || !empty($prio)){
       
        $insert = "INSERT INTO elementos(nombre, descripcion, nserie, estado, prioridad) VALUES (:nombre, :desc, :num, :est, :prio)";
        $select = "SELECT * FROM elementos WHERE id = :id";

        $varnew = $database->insert($insert,$nombre,$desc,$num,$est,$prio);
        $elemento = $database->idCatch($database->getPdo()->lastInsertId(),$select);//el pdo va a la bd y coge el ultimo id registrado

        if ($varnew !== null) {
            $arrVacio['success'] = true;
            $arrVacio['message'] = 'registro AÑADIDO';
            $arrVacio['data'] = $elemento;
        } else {
            $arrVacio['success'] = false;
            $arrVacio['message'] = 'Error, NO se añadió nada';
            $arrVacio['data'] = null;
        }
        

        $arrJSON = json_encode($arrVacio, JSON_PRETTY_PRINT);
        print_r($arrJSON);


    }else{

        $arrVacio['success'] = false;
        $arrVacio['message'] = 'Error, NO se añadió nada';
        $arrVacio['data'] = null;
        $arrJSON = json_encode($arrVacio, JSON_PRETTY_PRINT);
        print_r($arrJSON);
    };




}catch (exception $e){
    echo "Ha fallado la conexion por " . $e->getMessage();

};
