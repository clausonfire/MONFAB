
document.getElementById('submitbtn').addEventListener('click', function (e) {
    e.preventDefault(); //envia los datos sin recargar la pagina

    Swal.fire({
        icon: 'success',
        title: 'Seguro que quieres CREAR uno nuevo?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'CREAR'
    })
        .then((result) => {
            if (result.isConfirmed) {

                let form = document.getElementById('form');
                let formdata = new FormData(form); //es como si pusieramos los datos en el POSTMAN


                fetch("ws/createElement2.php", {
                    method: "POST",
                    body: formdata
                })
                    .then(response => response.json())
                    .then((response6) => {

                        if (response6.success) {
                            Swal.fire({
                                icon: 'success',
                                title: 'CREADO CON EXITO',
                                showConfirmButton: false,
                            });
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'ERROR AL CREAR',
                                showConfirmButton: false,
                            });
                        }

                        // console.log(response6);
                    });

            }
        });

    

});
