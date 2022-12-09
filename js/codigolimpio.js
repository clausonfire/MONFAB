// const objElem = [{
//     nombre: "JUANITA",
//     descripcion: "Descripcion de JUANITA",
//     numSerie: 1111,
//     estado: true,
//     prioridad: "Baja",

// },
// {
//     nombre: "PAKITA",
//     descripcion: "Descripcion de PAKITA",
//     numSerie: 2222,
//     estado: true,
//     prioridad: "Alta",

// },
// {
//     nombre: "FINITA",
//     descripcion: "hola si Descripcion de FINITA",
//     numSerie: 3333,
//     estado: true,
//     prioridad: "Alta",

// },
// {
//     nombre: "JESUSITA",
//     descripcion: "buenos dias Descripcion de JESUSITA",
//     numSerie: 4444,
//     estado: true,
//     prioridad: "Alta",

// },
// ];

window.onload = function () {
    newTable();
};


//--------------------CREAR-TABLA--------------------
function newTable() {

    const $tableBody = document.querySelector("#cuerpoTabla");

    fetch("ws/getElement.php")
        .then(response => response.json())
        .then((response2) => {

            response2.data.forEach(objElem => {
                const $tr = document.createElement("tr");
                $tr.className = "trclase";

                let $tdNombre = document.createElement("td");
                let $tdDescripcion = document.createElement("td");
                let $tdNserie = document.createElement("td");
                let $tdEstado = document.createElement("td");
                $tdEstado.className = "estadoclase";
                let $tdPrioridad = document.createElement("td");
                let $tdAcciones = document.createElement("button");
                let $tdEdit = document.createElement("button");
                $tdEdit.id = "ie";

                $tdNombre.id = "nombre";
                $tdDescripcion.id = "descripcion";
                $tdNserie.id = "nserie";
                $tdEstado.id = "estado";
                $tdPrioridad.id = "prioridad";


                $tdNombre.textContent = objElem.nombre;
                $tdDescripcion.textContent = objElem.descripcion;
                $tdNserie.textContent = objElem.nserie;
                $tdEstado.textContent = objElem.estado;
                $tdPrioridad.textContent = objElem.prioridad;
                $tdAcciones.textContent = 'X';
                $tdEdit.textContent = 'Edit';


                $tr.appendChild($tdNombre);
                $tr.appendChild($tdDescripcion);
                $tr.appendChild($tdNserie);
                $tr.appendChild($tdEstado);
                $tr.appendChild($tdPrioridad);
                $tr.appendChild($tdAcciones);
                $tr.appendChild($tdEdit);

                $tableBody.appendChild($tr);

                let idd = document.getElementById('ie');

                $tdAcciones.onclick = function () {
                    Swal.fire({
                        icon: 'success',
                        title: 'Seguro que quieres BORRAR?',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'BORRAR'
                    })

                        .then((result) => {
                            if (result.isConfirmed) {

                                fetch("ws/deleteElement.php?id=" + objElem.id) //pa pasarle la id por la url bcs GET
                                    .then(response => response.json())
                                    .then((response3) => {

                                        if (response3.success) {
                                            Swal.fire({
                                                icon: 'success',
                                                title: 'Borrado'
                                            });

                                            this.closest("tr").remove($tdAcciones);
                                        } else {
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'ha ocurrido un error'
                                            });
                                        }
                                    });
                            }
                        });
                }



                $tdEdit.onclick = function () {
                    generateForm(this.closest("tr"), objElem.id);

                }

            });

        });





    //------------------------GENERAR-FORMULARIO------------------------------
    function generateForm(button, objElem) {

        let div = document.getElementById('divform');
        div.innerHTML = ` 
        <form name="formulario" method="post" id="form">
                    
            Nombre: <input type="text" name="nombre" id="name" value="">
            <br>
            Descripcion: <input type=text id="desc" name="descripcion">
            <br>
            Num Serie: <input type=text id="numero" name="numero">
            <br>
            <legend><b>Estado Activado? </b></legend>
            <input type="checkbox" id="chbox" value="Activo" name="estado">
            <br> 

            <legend><b>Prioridad</b></legend>
            <input type="radio" id="ch1" name="prioridad" value="Alta">
            <label for="ch">Alta</label>
            <input type="radio" id="ch2" name="prioridad" value="Media">
            <label for="ch">Media</label>
            <input type="radio" id="ch3" name="prioridad" value="Baja">
            <label for="ch">Baja</label>
            <br> 
            
            <input type="button" id="send" value="send"/> 
                 
        </form>`;


        let ch = document.getElementById('chbox');
        let ch1 = document.getElementById('ch1');
        let ch2 = document.getElementById('ch2');
        let ch3 = document.getElementById('ch3');
        let send = document.getElementById('send');

        for (let i = 0; i <= div.childNodes[1].length; i++) { //aqui recorremos el largo de los inputs

            let div2 = div.childNodes[1]; //recoge el valor de los inputs

            switch (i) {
                case 0:
                case 1:
                case 2:
                    div2[i].value = button.cells[i].innerHTML;
                    break;
                case 3:
                    if (button.cells[i].innerHTML === 'Activo') {
                        ch.checked = true;
                    } else {
                        ch.checked = false;
                    }
                    break;
                case 4:
                case 5:
                case 6:
                    if (button.cells[4].innerHTML === 'Alta') {
                        ch1.checked = true;
                        ch2.checked = false;
                        ch3.checked = false;
                    } else if (button.cells[4].innerHTML === 'Media') {
                        ch1.checked = false;
                        ch2.checked = true;
                        ch3.checked = false;
                    } else if (button.cells[4].innerHTML === 'Baja') {
                        ch1.checked = false;
                        ch2.checked = false;
                        ch3.checked = true;
                    }

                    break;
            }

        }

        send.onclick = function () {
            Swal.fire({
                icon: 'success',
                title: 'Seguro que quieres EDITARLO?',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'EDITAR'
            })

                .then((result) => {
                    if (result.isConfirmed) {

                        let form = document.getElementById('form');
                        let formdata = new FormData(form); //es como si pusieramos los datos en el POSTMAN

                        fetch("ws/modifyElements.php?id=" + objElem, {
                            method: "POST",
                            body: formdata
                        })
                            .then(response => response.json())
                            .then((response7) => {

                                if (response7.success) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Editado'
                                    });

                                    for (let i = 0; i <= button.cells.length - 1; i++) {

                                        let div3 = div.childNodes[1]; //se recogen los inputs

                                        switch (i) {
                                            case 0:
                                            case 1:
                                            case 2:
                                                button.cells[i].innerHTML = div3[i].value;
                                                break;
                                            case 3:
                                                if (ch.checked === true) {
                                                    button.cells[i].innerHTML = 'true';
                                                } else {
                                                    button.cells[i].innerHTML = 'false';
                                                }
                                                break;
                                            case 4:
                                                if (ch1.checked === true) {
                                                    button.cells[i].innerHTML = 'Alta';
                                                } else if (ch2.checked === true) {
                                                    button.cells[i].innerHTML = 'Media';
                                                } else if (ch3.checked === true) {
                                                    button.cells[i].innerHTML = 'Baja';
                                                }
                                                break;
                                        }
                                    }

                                    div.innerHTML = "";

                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'ha ocurrido un error al editar'
                                    });
                                }
                            });

                    }
                });

            
            // div.innerHTML = "";

        }





    }
}

















//------------------FILTRO-BUSCADOR-----------------------------------
function buscador() {
    let inputCon = document.getElementById("idInput");
    let buscar = inputCon.value.toLowerCase().trim();
    let tr = document.getElementsByClassName("trclase");

    console.log(buscar);


    if (buscar.length >= 3) {
        console.log(buscar);
        console.log(tr);

        for (i = 0; i < tr.length; i++) {

            td = tr[i].getElementsByTagName("td")[0, 1];

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

