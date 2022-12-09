
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
    if (!empty($est) && $est='Activo'){
        $est = 'Activo';
    }else{
        $est = 'Inactivo';
    }

    switch($prio){
        case 'Baja': 
            $prio = 'Baja';
            break;
        case 'Media': 
            $prio = 'Media';
            break;
        case 'Alta': 
            $prio = 'Alta';
            break;
        default;
            $prio = 'Media';
            break;
            
    }
    

    
    $update = "UPDATE elementos SET nombre = :nombre, descripcion = :desc, nserie =:num, estado = :est, prioridad = :prio WHERE id = :id";
    $select = "SELECT * FROM elementos WHERE id = :id";

    $database->update($update,$id,$nombre,$desc,$num,$est,$prio);
    $elemento = $database->idCatch($id, $select);//el pdo va a la bd y coge el ultimo id registrado

    if(!empty($elemento)){
       
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
