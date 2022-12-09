<?php
require_once 'DataBase.php';

try{
    $database = new DataBase ('root', '', '127.0.0.1','3306','monfab'); //crear una instancia de una base de datos para noseke
    $id = $_GET['id'] ?? null;//esto es para recoger el por get

    $arrVacio = [];
    
    $select = "SELECT * FROM elementos WHERE id = :id";
    $select = $database->idCatch($id,$select);
    
    

    
    if(!empty($id) && !empty($select)){
        $consulta = "DELETE FROM elementos WHERE id = :id";

       
        $elemento = $database->idCatch($id, $consulta);

        $arrVacio['success'] = true;
        $arrVacio['message'] = 'registro ELIMINADO';
        $arrVacio['data'] = $select;//se pone select y no elemnto por que tiene que montrar el que se ha eliminado
        $arrJSON = json_encode($arrVacio, JSON_PRETTY_PRINT);
        print_r($arrJSON);

       
    }else{
        $arrVacio['success'] = false;
        $arrVacio['message'] = 'Error, NO se eliminó nada';
        $arrVacio['data'] = null;
        $arrJSON = json_encode($arrVacio, JSON_PRETTY_PRINT);
        print_r($arrJSON);
    }

    
    
   



}catch (exception $e){
    echo "Ha fallado la conexion por " . $e->getMessage();

}

//meter en una funcion el array vacio para que este mas limpio el codigo
