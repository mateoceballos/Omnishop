Instalación del proyecto:

Bajando el repositorio por HTTPS:
En nuestra terminal ingresamos el siguiente comando  
git clone https://github.com/mateoceballos/Omnishop.git
una vez corramos este comando, procederemos con el comando
cd .\Omnishop\

Descargando el archivo .zip:
Seleccionamos la opción en github de "Download ZIP"
vamos a la ruta donde se descargo nuestro proyecto y descomprimimos el archivo
Una vez tengamos el archivo descomprimido, daremos click derecho y seleccionamos la opción de abrir en la terminal.

para ingresar al proyecto
es importante la instalación de dependencias por lo que correremos el comando
npm i
una vez termina de correr nuestro comando de instalación, procedemos con el comando
npm start

A Continuación se nos abrirá una pestaña en nuestro navegador con el proyecto en línea
para el registro y login se está manejando la fakeapi suministrada (https://fakestoreapi.com/)
con esta api podemos simular procesos de registro de datos sin embargo esos datos no se almacenan en la api, por lo tanto para el proceso de registro se está manejando
un sistema conjunto del api y localStorage, los usuarios registrados en la pestaña de registro, quedan almacenados en el localStorage, de igual forma se consume el api
de registro para simular un registro y obtener una respuesta (En el proceso de registro se valida que se ingresen los datos solicitados)

Durante el proceso de inicio de sesión, tenemos validación de usuario y clave incorrecta (en caso que el correo sea incorrecto) y validación de clave incorrecta
(en caso que el correo se encuentre bien pero la clave sea incorrecta)

El checkbox de suscribirse, nos retorna un valor interno de true o false si es seleccionado, pero no se está teniendo en cuenta en el proceso

una vez ingresemos los datos correctos podremos acceder a nuestra vista de productos
NOTA: Si no hemos iniciado sesión, el flujo no nos dejará avanzar a nuestra vista de productos

tendremos 2 mensajes en nuestro proyecto, el de registro satisfactorio y el de login satisfactorio, los estados de ambos se manejan global mediante useState y useContext

una vez estemos en la vista de productos, termina nuestro flujo interactivo, tendremos información poco dinámica, por cuestión de tiempo no pude implementar carruseles
sin embargo la vista se alimenta de una base de datos local (Un archivo js que nos retorna los datos de los productos almacenados) alimentando de esta forma
los títulos
precios
imágenes
productos de la sección "te podría gustar"
y la parte dinámica de las tallas
