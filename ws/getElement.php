<?php
require_once 'DataBase.php';

try{
    $database = new DataBase ('root', '', '127.0.0.1','3306','monfab'); //crear una instancia de una base de datos para noseke
    $id = $_GET['id'] ?? null;//esto es para recoger el por get

    $arrVacio = [];




    $consulta = "SELECT * FROM elementos"; //lanzamos consulta pa tener tos los datos de alum
    if ($id !== null){
        $consulta .= " WHERE id = :id "; //li al haber nombre se le hacia un pequeño filtro para que muestre lo siguiente de la qery //el . concatena
        $elemento = $database->idCatch($id, $consulta);
        $arrVacio['success'] = true;
        $arrVacio['message'] = 'tamo en japon';
        $arrVacio['data'] = $elemento;

        $arrJSON = json_encode($arrVacio, JSON_PRETTY_PRINT);
        

    }else{
        $elemento = $database->query($consulta);
        $arrVacio['success'] = true;
        $arrVacio['message'] = 'tamo en japon';
        $arrVacio['data'] = $elemento;

        $arrJSON = json_encode($arrVacio, JSON_PRETTY_PRINT);
    }
    

     
    if(empty($elemento)){ //pa comprobar si es que ha dado error o si esque el campo esta vacio
        
        $arrVacio['success'] = false;
        $arrVacio['message'] = 'NOO tamo en japon';
        $arrVacio['data'] = null;

        $arrJSON = json_encode($arrVacio, JSON_PRETTY_PRINT);
        print_r($arrJSON);

    }else{
        
        print_r($arrJSON);
    }
   



}catch (exception $e){
    echo "Ha fallado la conexion por " . $e->getMessage();

}

//meter en una funcion el array vacio para que este mas limpio el codigo

