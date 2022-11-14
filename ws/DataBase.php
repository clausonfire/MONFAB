<?php

class DataBase
{

    private $user;
    private $password;
    private $host;
    private $port;
    private $name;
    private $pdo;

    public function __construct($user, $password, $host, $port, $name)
    {
        $this->user = $user;
        $this->password = $password;
        $this->host = $host;
        $this->port = $port;
        $this->name = $name;

        //Domain Source Name -> Nombre de Origen de datos
        $dsn = 'mysql:host=' . $host . ';port=' . $port . ';dbname=' . $name;
        $this->pdo = new PDO($dsn, $user, $password);
    }

    public function getPdo(){
        return $this->pdo;
    }
    public function query($query)
    {
        try {
            $consulta = $this->pdo->query($query); //ejecuta una consulta en pdo
            return $consulta->fetchAll(PDO::FETCH_ASSOC); //si la consulta se ha ejecutado bien se obtenian los result con el fechtasc

        } catch (Exception $e) { //miramos si tiene un error y lo controlamos
            //1. mostrar el error por pantalla (funciona para desarrollo en local, nunca en producion)
            //2. loguear el error en un archivo, enviar una alerta por mail, etc... RECOMENDED
            return null;
        }
    }

    public function idCatch($id, $query)
    {
        try {
            $consulta = $this->pdo->prepare($query);
            $consulta->bindParam(':id', $id, PDO::PARAM_INT); //int por que es una id, es un nro
            $consulta->execute();
            return $consulta->fetchAll(PDO::FETCH_ASSOC); //pasa que salga solo la asociacion, que no salga el 0, el clave valor
        } catch (Exception $e1) {
            return $e1;
        }
    }

    public function insert($query, $nombre, $desc, $num, $est, $prio){

        try{
            $consulta2=$this->pdo->prepare($query);
            $consulta2->bindParam(':nombre', $nombre, PDO::PARAM_STR);
            $consulta2->bindParam(':desc', $desc, PDO::PARAM_STR);
            $consulta2->bindParam(':num', $num, PDO::PARAM_STR);
            $consulta2->bindParam(':est', $est, PDO::PARAM_STR);
            $consulta2->bindParam(':prio', $prio, PDO::PARAM_STR);
            $consulta2->execute();
            return $consulta2->fetchAll(PDO::FETCH_ASSOC);
        }catch(Exception $e2){
            return $e2;
        }
    }

    public function update($query, $id, $nombre, $desc, $num, $est, $prio){

        try{
            $consulta3=$this->pdo->prepare($query);
            $consulta3->bindParam(':id', $id, PDO::PARAM_INT);
            $consulta3->bindParam(':nombre', $nombre, PDO::PARAM_STR);
            $consulta3->bindParam(':desc', $desc, PDO::PARAM_STR);
            $consulta3->bindParam(':num', $num, PDO::PARAM_STR);
            $consulta3->bindParam(':est', $est, PDO::PARAM_STR);
            $consulta3->bindParam(':prio', $prio, PDO::PARAM_STR);
            $consulta3->execute();
            return $consulta3->fetchAll(PDO::FETCH_ASSOC);
        }catch(Exception $e3){
            return null;
        }
    }


    
}
