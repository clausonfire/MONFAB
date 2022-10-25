// const productos = [{
//     NombreElemento: "detector de humos",
//     descripcion: "Los sensores de humo son capaces de detectar el humo de un lugar a tiempo",
//     NumeroSerie: 1582,
//     Estado: true,
//     Prioridad: "Alta"
// },
// {
//     id: 2,
//     nombre: "Xiaomi Mi A1",
//     precio: 5000,
//     codigo: "123444",
// },
// {
//     id: 3,
//     nombre: "Galletas",
//     precio: 10,
//     codigo: "20205",
// },
// {
//     id: 4,
//     nombre: "Computadora portátil",
//     precio: 30000,
//     codigo: "7700545",
// },
// ];


//---------------------------------------------------------------------------------------------------

// const objectRandom = new Object($nombre, $descripcion, $n_serie, $estado, $prioridad);


// const objetoElementos = [
//     { boton:"X", nombre: "JOSEFINA", descripcion: "holasiadios", n_serie: "1234", estado: "on", prioridad: "Media" },
//     { boton:"X", nombre: "JUANITA", descripcion: "holasiadios", n_serie: "1578", estado: "on", prioridad: "Baja" },
//     { boton:"X", nombre: "JACINTA", descripcion: "holasiadios", n_serie: "14683", estado: "on", prioridad: "Alta" },
// ];

// // window.onload = function () {
// //     generarTabla(objetoElementos);
// // }

// const $tablabody = document.querySelector("#tablebody");

// objetoElementos.forEach(objetoElementos => {
//     const $fila = document.createElement("tr");
//     let $btn = document.createElement("button");

//     $btn.textContent = objetoElementos.boton;
//     $fila.appendChild(btn);
//     $tablabody.appendChild($fila);
// });
//------------------------------------------------------------------------


    // function buscador(){
    //     let inputCon, buscar, table, tr, td, i, txtValue;
    //     inputCon = document.getElementById("idInput");
    //     buscar = inputCon.value.toLowerCase().trim();
    //     let objprueba=objElem;
    //     // debugger;

    //     if(buscar.length >= 3){
    //         console.log(buscar);

    //         if(buscar==objElem[1].nombre.toLowerCase() || objElem[1].descripcion.toLowerCase()){
    //             console.log(buscar);

            

    //             generateTable(buscar);
    //         }
    //     }
    // }




// function generarTabla(objetoElementos) {
//     document.write("lala");
//     document.write(objetoElementos.nombre);

//     let tabla = document.createElement("table");
//     let tblBody = document.createElement("tbody");

//     for (let i = 0; i < objetoElementos.length; i++) {
//         let fila = document.createElement("tr");


//         for (let j = 0; j <= 5; j++) {
//             let celda = document.createElement("td");
//             let textoCelda = document.createTextNode(objetoElementos[i][j]);//AQUI TIENE QUE MOSTRAR LA POS DEL ARRAY

//             celda.appendChild(textoCelda);
//             fila.appendChild(celda);
//         }

//         tblBody.appendChild(fila);
//     }

//     tabla.appendChild(tblBody);
//     body.appendChild(tabla);
//     tabla.setAttribute("border", "1");
//-----------------------------------------------------------------------------

    // var body = document.getElementsByTagName("body")[0];
    // var tabla   = document.createElement("table");
    // var tblBody = document.createElement("tbody");

    // for (var i = 0; i < 2; i++) {
    //     var hilera = document.createElement("tr");

    //     for (var j = 0; j < 2; j++) {
    //     var celda = document.createElement("td");
    //     var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
    //     celda.appendChild(textoCelda);
    //     hilera.appendChild(celda);
    //     }

    //     tblBody.appendChild(hilera);
    // }

    // tabla.appendChild(tblBody);
    // body.appendChild(tabla);
    // tabla.setAttribute("border", "2");

//------------------------------------------------------------------
// for(i=0; i < tr.length; i++) {
    //     td = tr[i].getElementsByTagName("td")[0];
    //     if (td) {
    //         txtValue = td.textContent || td.innerText;
    //         if (txtValue.toLowerCase().indexOf(buscar) > -1) {
    //             tr[i].style.display = "";
    //         }
    //     } else {
    //         tr[i].style.display = "none";
    //     }    
    // }



//







        // for(let i=0; i<tr.length;i++){

        //     let hola = tr[i].getElementsByTagName("td")[0,1,2];
        //     let adios = hola.textContent;

        //     tr[i].style.display = adios.toLowerCase().indexOf(buscar) > -1 ? "" : "none";
        // }
        //---------------------------------------------------------                   
        // if(buscar==tr[1].nombre.toLowerCase() || tr[1].descripcion.toLowerCase()){
        //     console.log("SÍ hay coincidencias");
        //     // let arrayobj = objElem.filter((objElem)=>{
        //     //     if(buscar.includes(objElem[1].nombre.toLowerCase())){
        //     //         console.log(siiiii);
        //     //     }
        //     // });
        // }else{
        //     console.log("no coinside");
        // }
        //---------------------------------------------------------


//---------------------------------------------------------
        // for(let i=0; i<tr.length;i++){
        //     if(buscar==tr[1].nombre.toLowerCase() || tr[1].descripcion.toLowerCase()){
        //         console.log("SÍ hay coincidencias");
        //         // let arrayobj = objElem.filter((objElem)=>{
        //         //     if(buscar.includes(objElem[1].nombre.toLowerCase())){
        //         //         console.log(siiiii);
        //         //     }
        //         // });
        //     }else{
        //         console.log("no coinside");
        //     }
        // }
        // generateTable(buscar);
//---------------------------------------------------
        // let arrayobj = objElem.filter(objElem=>{
        //     if(buscar.includes(objElem[1].nombre.toLowerCase())){
        //         console.log("siiiii");
        //     }else{
        //         console.log("no coinside");
        //     }
        //     generateTable(arrayobj);
        // });
//---------------------------------------------------
        // let arrayobj = objElem.filter(objElem=>{
        //     if(objElem.nombre.toLowerCase().includes(buscar) || objElem.descripcion.toLowerCase().includes(buscar)){
        //         console.log("coinside");
        //     }else{
        //         console.log("no coinside");
        //     }

        // });

// for(let i=0; i<tr.length;i++){

        //     let hola = tr[i].getElementsByTagName("td")[0,1,2];
        //     let adios = hola.textContent;

        //     tr[i].style.display = adios.toLowerCase().indexOf(buscar) > -1 ? "" : "none";
        // }
        //---------------------------------------------------------                   
        // if(buscar==tr[1].nombre.toLowerCase() || tr[1].descripcion.toLowerCase()){
        //     console.log("SÍ hay coincidencias");
        //     // let arrayobj = objElem.filter((objElem)=>{
        //     //     if(buscar.includes(objElem[1].nombre.toLowerCase())){
        //     //         console.log(siiiii);
        //     //     }
        //     // });
        // }else{
        //     console.log("no coinside");
        // }
        //---------------------------------------------------------

//---------------------------------------------------------
        // for(let i=0; i<tr.length;i++){
        //     if(buscar==tr[1].nombre.toLowerCase() || tr[1].descripcion.toLowerCase()){
        //         console.log("SÍ hay coincidencias");
        //         // let arrayobj = objElem.filter((objElem)=>{
        //         //     if(buscar.includes(objElem[1].nombre.toLowerCase())){
        //         //         console.log(siiiii);
        //         //     }
        //         // });
        //     }else{
        //         console.log("no coinside");
        //     }
        // }
        // generateTable(buscar);
//---------------------------------------------------
        // let arrayobj = objElem.filter(objElem=>{
        //     if(buscar.includes(objElem[1].nombre.toLowerCase())){
        //         console.log("siiiii");
        //     }else{
        //         console.log("no coinside");
        //     }
        //     generateTable(arrayobj);
        // });
//---------------------------------------------------
        // let arrayobj = objElem.filter(objElem=>{
        //     if(objElem.nombre.toLowerCase().includes(buscar) || objElem.descripcion.toLowerCase().includes(buscar)){
        //         console.log("coinside");
        //     }else{
        //         console.log("no coinside");
        //     }

        // });

// for(i=0; i < tr.length; i++) {
    //     td = tr[i].getElementsByTagName("td")[0];
    //     if (td) {
    //         txtValue = td.textContent || td.innerText;
    //         if (txtValue.toLowerCase().indexOf(buscar) > -1) {
    //             tr[i].style.display = "";
    //         }
    //     } else {
    //         tr[i].style.display = "none";
    //     }    
    // }



//


//ESTE ES EL UNICO QUE HACE ALGO (me borra la tabla entera, exito)

// function buscador(){
//     let search = document.getElementById("idInput");
//     let food = document.getElementsByTagName("td");
//     let forEach = objElem.forEach;

    

//     search.addEventListener("keyup", function(e){
//     var choice = this.value;
  
//     forEach.call(food, function(f){
//         if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
//             f.parentNode.style.display = "none";        
//         else
//             f.parentNode.style.display = "block";        
//         });
//     }, false);
// }


// let filtrar = objElem.filter(objElem => objElem.$tdNombre, objElem=> objElem.$tdDescripcion);
// let filtrar = objElem.filter(objElem => objElem.$tdNombre );

   

// function buscador(){
//     $(document).ready(function() {
//         $("#idInput").on("keyup", function() {
//             var value = $(this).val().toLowerCase();
//             $("#cuerpoTabla tr").filter(function() {
//                 $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//             });
//         });
//     });
// }

////codigo qie en principio funciona pero no...gracias w3school :(
// function buscador(){
//     var input, filter, table, tr, td, i, txtValue;
//         input = document.getElementById("idInput");
//         filter = input.value.toUpperCase();
//         table = document.getElementsByTagName("tbody");
//         tr = table.getElementsByTagName("tr");

//         // Loop through all table rows, and hide those who don't match the search query
//         for (i = 0; i < tr.length; i++) {
//             td = tr[i].getElementsByTagName("td")[0];
//             if (td) {
//                 txtValue = td.textContent || td.innerText;
//                 if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }

//         }
//     }
// }    


// function buscar(){
//     let $tdAtributo = document.createAttribute("class","item_name");
//     $("#idInput").bind("keyup", function() {
//         var text = $(this).val().toLowerCase();
//         var items = $(".item_name");
    
//         //first, hide all:
//         items.parent().hide();
    
//         //show only those matching user input:
//         items.filter(function () {
//             return $(this).text().toLowerCase().indexOf(text) == 0;
//         }).parent().show();
//     });

// }





//A CHUPARLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA CAGO EN LA VIRGIN   
