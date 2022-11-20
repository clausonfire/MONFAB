const objElem = [{
    nombre: "JUANITA",
    descripcion: "Descripcion de JUANITA",
    numSerie: 1111,
    estado: true,
    prioridad: "Baja",

},
{
    nombre: "PAKITA",
    descripcion: "Descripcion de PAKITA",
    numSerie: 2222,
    estado: true,
    prioridad: "Alta",

},
{
    nombre: "FINITA",
    descripcion: "hola si Descripcion de FINITA",
    numSerie: 3333,
    estado: true,
    prioridad: "Alta",

},
{
    nombre: "JESUSITA",
    descripcion: "buenos dias Descripcion de JESUSITA",
    numSerie: 4444,
    estado: true,
    prioridad: "Alta",

},
];

window.onload = function () {
    newTable();
};


//--------------------CREAR-TABLA--------------------
function newTable() {

    const $tableBody = document.querySelector("#cuerpoTabla");

    objElem.forEach(objElem => {
        console.log(objElem.index);
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


        $tdNombre.textContent = objElem.nombre;
        $tdDescripcion.textContent = objElem.descripcion;
        $tdNserie.textContent = objElem.numSerie;
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
            this.closest("tr").remove($tdAcciones);
        }

        $tdEdit.onclick = function () {
            generateForm(this.closest("tr"));
        }

    });



    //------------------------GENERAR-FORMULARIO------------------------------
    function generateForm(button) {

        let div = document.getElementById('divform');
        div.innerHTML = ` 
        <form name="formulario" method="post" action="./ws/crearElemento.php">
                    
            Nombre: <input type="text" name="nombre" id="name" value="">
            <br>
            Descripcion: <input type=text id="desc" name="descripcion">
            <br>
            Num Serie: <input type=text id="numserie" name="numserie">
            <br>
            <legend><b>Estado Activado? </b></legend>
            <input type="checkbox" id="chbox" name="estado">
            <br> 

            <legend><b>Prioridad</b></legend>
            <input type="radio" id="ch1" name="ch" value="Alta">
            <label for="ch">Alta</label>
            <input type="radio" id="ch2" name="ch" value="Media">
            <label for="ch">Media</label>
            <input type="radio" id="ch3" name="ch" value="Baja">
            <label for="ch">Baja</label>
            <br> 
            
            <input type="button" id="send" value="send"/> 
                 
        </form>`;

        
        let ch = document.getElementById('chbox');
        let ch1 = document.getElementById('ch1');
        let ch2 = document.getElementById('ch2');
        let ch3 = document.getElementById('ch3');
        let send = document.getElementById('send');

        for (let i = 0; i <= div.childNodes[1].length; i++) {

            let div2 = div.childNodes[1];

            switch (i) {
                case 0:
                case 1:
                case 2:
                    div2[i].value = button.cells[i].innerHTML;
                    break;
                case 3:
                    if (button.cells[i].innerHTML === 'true') {
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
            
            for (let i = 0; i <= button.cells.length - 1; i++) {

                let div3 = div.childNodes[1];
                // div[i].value = button.cells[i].innerHTML;
    
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

