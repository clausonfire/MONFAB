# ¿Que es el CDN?

El nombre viene de las siglas de  Content Delivery Network
Es un grupo de servidores que estan colocados en diferentes partes del mundo con la finalidad de distribuir los datos de una forma mas rápida. Ej: cuanto te metes a una web random, la distancia entrre tu y el servidor pues afecta al tiempo de carga de la web. La CDN mejora esto drasticamente sin importar la distancia que haya entre el usuario y el servidor; Esto pasa por que un sist. de caché almacena copias de los datos en el servidor mas cercano.



## VENTAJAS

1. Rapidez; Replican los archivos para proporcionárselos al usuario lo antes posible
2. Seguridad; Hacen la función de capa DDoS contra ataques de denegacion de servicios.
3. Balancean la carga del trafico que entra.
4. Escalable.

## DESVENTAJAS

1. Seguridad; Si se replica tu web en un servidor un poco tranboliko, hay riesgo de que otros vean tus archivos.
2. 0 Control; No puedes controlar las veces que se replica.
3. Configuración; Un poco pesado de configurar(DNS, IP, HTTP, subdominio, cache, etc...)
