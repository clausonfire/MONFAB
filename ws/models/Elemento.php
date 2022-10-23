<?php

    // require_once ("./DWES/3_PracticaTres/ws/crearElemento.php");

class Elemento implements IToJson{

    public $nombre;
    public $descripcion;
    public $n_serie;
    public $estado;
    public $prioridad;


    function __construct($nombre, $descripcion, $n_serie, $estado, $prioridad)
    {
        $this->nombre = $nombre;
        $this->descripcion = $descripcion;
        $this->n_serie = $n_serie;
        $this->estado = $estado;
        $this->prioridad = $prioridad; 
    }


    //GETTERS & SETTERS
    /**
     * Get the value of nombre
     */ 
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * Set the value of nombre
     *
     * @return  self
     */ 
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }

    /**
     * Get the value of descripcion
     */ 
    public function getDescripcion()
    {
        return $this->descripcion;
    }

    /**
     * Set the value of descripcion
     *
     * @return  self
     */ 
    public function setDescripcion($descripcion)
    {
        $this->descripcion = $descripcion;

        return $this;
    }

    /**
     * Get the value of n_serie
     */ 
    public function getN_serie()
    {
        return $this->n_serie;
    }

    /**
     * Set the value of n_serie
     *
     * @return  self
     */ 
    public function setN_serie($n_serie)
    {
        $this->n_serie = $n_serie;

        return $this;
    }

    /**
     * Get the value of estado
     */ 
    public function getEstado()
    {
        return $this->estado;
    }

    /**
     * Set the value of estado
     *
     * @return  self
     */ 
    public function setEstado($estado)
    {
        $this->estado = $estado;

        return $this;
    }

    /**
     * Get the value of prioridad
     */ 
    public function getPrioridad()
    {
        return $this->prioridad;
    }

    /**
     * Set the value of prioridad
     *
     * @return  self
     */ 
    public function setPrioridad($prioridad)
    {
        $this->prioridad = $prioridad;

        return $this;
    }

    function toJson(){
        echo("hola soy un metodo toJson");
        echo "<br>";

        if (!empty($this->nombre) && !empty($this->descripcion) && !empty($this->n_serie) && !empty($this->estado) && !empty($this->prioridad))
        {
            $arrayForm = array('nombre'=> $this->nombre, 'descripcion'=>$this->descripcion, 'numSerie'=>$this->n_serie, 'estado'=>$this->estado, 'prioridad'=>$this->prioridad);
            $arryJson = json_encode($arrayForm);
            // var_dump($arryJson);

            
            
            $archivoTxt = fopen("c:\\xampp\\htdocs\\2ºDAW\\DWEC\\1_PracticaUno\\fichero.txt", "a");
            fwrite($archivoTxt, $arryJson. PHP_EOL);
            fclose($archivoTxt);
            
            echo "<br>";
            echo "Formulario enviado CORRECTAMENTE!!";
        }
        else
        {
            echo "Algo ha salido mal :( | Recuerda rellenar TODOS los campos del formulario!!";
        }
        
    }

}