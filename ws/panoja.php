<!-- 
getElement.php. 
Este archivo tendrá dos funciones:

1. Si recibe un parámetro “id” por GET, el archivo deberá consultar en la base de
datos el elemento con ese id y devolverlo en el formato de respuesta que se
especifica en el siguiente apartado.

2. Si no recibe ningún parámetro, el archivo deberá devolver todos los elementos de
la base de datos en el formato de respuesta que se especifica en el siguiente
apartado. -->

<!-- 
deleteElement.php: 
Este archivo recibirá un parámetro id por GET y deberá eliminar el
elemento de la base de datos con ese id. Posteriormente devolverá los datos del elemento
eliminado en el formato de respuesta que se especifica en el siguiente apartado.


createElement2.php: 
Este archivo recibirá todos los parámetros enviados por el formulario
HTML y creará el elemento en la base de datos (taba elementos). Posteriormente devolverá los
datos del elemento creado en el formato de respuesta que se especifica en el siguiente
apartado.


modifyElements.php: 
Este archivo recibirá un parámetro “id” por GET y los mismos
parámetros que el archivo “createElement2.php” por POST. Si existe un elemento con el id
especificado en la tabla elementos, se modificarán sus datos en base a lo especificado en los
parámetros POST. Si algún parámetro POST no se envía o viene vacío, ese dato no deberá
modificarse. -->