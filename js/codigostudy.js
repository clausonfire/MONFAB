// const objElem = [{
//     nombre: "JUANITA",
//     descripcion: "Descripcion de JUANITA",
//     numSerie: 1111,
//     estado: true,
//     prioridad: "Alta",
//     acciones: "X"
// },
// {
//     nombre: "PAKITA",
//     descripcion: "Descripcion de PAKITA",
//     numSerie: 2222,
//     estado: true,
//     prioridad: "Alta",
//     acciones: "X"
// },
// {
//     nombre: "FINITA",
//     descripcion: "hola si Descripcion de FINITA",
//     numSerie: 3333,
//     estado: true,
//     prioridad: "Alta",
//     acciones: "X"
// },
// {
//     nombre: "JESUSITA",
//     descripcion: "buenos dias Descripcion de JESUSITA",
//     numSerie: 4444,
//     estado: true,
//     prioridad: "Alta",
//     acciones: "X"
// },
// ];




// function generateTable(){
    
//     // Ahora dibujamos la tabla
//     const $tableBody = document.querySelector("#cuerpoTabla");
//     // Recorrer todos los productos
//     objElem.forEach(objElem => {
//         // Crear un <tr>
//         const $tr = document.createElement("tr");
//         $tr.className="trclase";
//         // $tr.setAttribute("id", "eliminar");

//         // Creamos el <td> de nombre y lo adjuntamos a tr
//         let $tdNombre = document.createElement("td");
//         $tdNombre.textContent = objElem.nombre; // el textContent del td es el nombre
        
//         let $tdDescripcion = document.createElement("td");
//         $tdDescripcion.textContent = objElem.descripcion; // el textContent del td es el nombre
    
//         let $tdNserie = document.createElement("td");
//         $tdNserie.textContent = objElem.numSerie;

//         let $tdEstado = document.createElement("td");
//         $tdEstado.className="estadoclase";
//         $tdEstado.textContent = objElem.estado;

//         let $tdPrioridad = document.createElement("td");
//         $tdPrioridad.textContent = objElem.prioridad;

//         let $tdAcciones = document.createElement("button");
//         $tdAcciones.textContent = objElem.acciones;

//         $tr.appendChild($tdNombre);
//         $tr.appendChild($tdDescripcion);
//         $tr.appendChild($tdNserie);
//         $tr.appendChild($tdEstado);
//         $tr.appendChild($tdPrioridad);
//         $tr.appendChild($tdAcciones);
//         // Finalmente agregamos el <tr> al cuerpo de la tabla
//         $tableBody.appendChild($tr);
//         // Y el ciclo se repite hasta que se termina de recorrer todo el arreglo


//         $tdAcciones.onclick = function() {
//             this.closest("tr").remove($tdAcciones);
//         }

//     });
// }



// //CLAUDIFICADO

// function buscador(){
//     let inputCon = document.getElementById("idInput");
//     let buscar = inputCon.value.toLowerCase().trim();
//     let tr = document.getElementsByClassName("trclase");
//     // let objprueba=objElem;
//     console.log(buscar);


//     if(buscar.length >= 3){
//         console.log(buscar);
//         console.log(tr);

//         for(i=0; i<tr.length; i++){

//             td = tr[i].getElementsByTagName("td")[0,1];

//             if (td) {
//                 let txtValue = td.textContent || td.innerText;
//                 if (txtValue.toLowerCase().indexOf(buscar) > -1) {
//                   tr[i].style.display = "";
//                 } else {
//                   tr[i].style.display = "none";
//                 }
//             }   

//         }
//     } 
    
    
// }

// document.getElementById("idInput").addEventListener("keyup", function () { buscador() });

