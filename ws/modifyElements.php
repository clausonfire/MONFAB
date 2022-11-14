
<?php
require_once 'DataBase.php';

try{
    $database = new DataBase ('root', '', '127.0.0.1','3306','monfab'); //crear una instancia de una base de datos para noseke

    $id = $_GET['id'] ?? null;
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
    

    
    $update = "UPDATE elementos SET nombre = :nombre, descripcion = :desc, nserie =:num, estado = :est, prioridad = :prio WHERE id = :id";
    $select = "SELECT * FROM elementos WHERE id = :id";

    $database->update($update,$id,$nombre,$desc,$num,$est,$prio);
    $elemento = $database->idCatch($id, $select);//el pdo va a la bd y coge el ultimo id registrado

    if(!empty($elemento)){
       
        echo "Registro Añadido";
        $arrVacio['success'] = true;
        $arrVacio['message'] = 'registro MODIFICADO';
        $arrVacio['data'] = $elemento;

        $arrJSON = json_encode($arrVacio, JSON_PRETTY_PRINT);
        print_r($arrJSON);


    }else{

        $arrVacio['success'] = false;
        $arrVacio['message'] = 'Error, NO se MODIFICÓ nada';
        $arrVacio['data'] = null;
        $arrJSON = json_encode($arrVacio, JSON_PRETTY_PRINT);
        print_r($arrJSON);
    };




}catch (exception $e){
    echo "Ha fallado la conexion por " . $e->getMessage();

};
