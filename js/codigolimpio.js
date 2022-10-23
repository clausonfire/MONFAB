const objElem = [{
    nombre: "JUANITA",
    descripcion: "Descripcion de JUANITA",
    numSerie: 1111,
    estado: true,
    prioridad: "Alta",
    acciones: "X"
},
{
    nombre: "PAKITA",
    descripcion: "Descripcion de PAKITA",
    numSerie: 2222,
    estado: true,
    prioridad: "Alta",
    acciones: "X"
},
{
    nombre: "FINITA",
    descripcion: "hola si Descripcion de FINITA",
    numSerie: 3333,
    estado: true,
    prioridad: "Alta",
    acciones: "X"
},
{
    nombre: "JESUSITA",
    descripcion: "buenos dias Descripcion de JESUSITA",
    numSerie: 4444,
    estado: true,
    prioridad: "Alta",
    acciones: "X"
},
];




function newTable(){
    
    const $tableBody = document.querySelector("#cuerpoTabla");

    objElem.forEach(objElem => {
        
        const $tr = document.createElement("tr");
        $tr.className="trclase";
        
        let $tdNombre = document.createElement("td");
        let $tdDescripcion = document.createElement("td");
        let $tdNserie = document.createElement("td");
        let $tdEstado = document.createElement("td");
        $tdEstado.className="estadoclase";
        let $tdPrioridad = document.createElement("td");
        let $tdAcciones = document.createElement("button");

        $tdNombre.textContent = objElem.nombre; 
        $tdDescripcion.textContent = objElem.descripcion; 
        $tdNserie.textContent = objElem.numSerie;
        $tdEstado.textContent = objElem.estado;
        $tdPrioridad.textContent = objElem.prioridad;
        $tdAcciones.textContent = objElem.acciones;

        $tr.appendChild($tdNombre);
        $tr.appendChild($tdDescripcion);
        $tr.appendChild($tdNserie);
        $tr.appendChild($tdEstado);
        $tr.appendChild($tdPrioridad);
        $tr.appendChild($tdAcciones);
        
        $tableBody.appendChild($tr);
        

        $tdAcciones.onclick = function() {
            this.closest("tr").remove($tdAcciones);
        }

    });
}





function buscador(){
    let inputCon = document.getElementById("idInput");
    let buscar = inputCon.value.toLowerCase().trim();
    let tr = document.getElementsByClassName("trclase");
    
    console.log(buscar);


    if(buscar.length >= 3){
        console.log(buscar);
        console.log(tr);

        for(i=0; i<tr.length; i++){

            td = tr[i].getElementsByTagName("td")[0,1];

            if (td) {
                let txtValue = td.textContent || td.innerText;
                if (txtValue.toLowerCase().indexOf(buscar) > -1) {
                  tr[i].style.display = "";
                } else {
                  tr[i].style.display = "none";
                }
            }   

        }
    } 
    
    
}

document.getElementById("idInput").addEventListener("keyup", function () { buscador() });

