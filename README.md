# coder-backend-39770-nico-zampolini

En este proyecto, encontraras los trabajos realizados en el cusro de backend de coder.

Primer entregable: 
En este primer entregable, se creo la class ProductManager con su constructor, que contiene un array vacio, donde se guardaran los productos futuros.

Tambien se crearon 3 metodos de la clase:
addProduct para agregar productos, getProducts para obtener todos los productos, getProductById para obtener un producto especifico en base a su identificador.

Muchas gracias por tu lectura :)

Segundo entregable:
Se agregaron meteods del modulo de "fs" para guardar y hacer persistenten la memoria local de la aplicacion, agregando, editando, eliminando y trayendo todos los datos desde el archivo data.json.


Tercer entregable:
En esta ocasion, se agrego la class de CartManager, donde se incorporaron los metodos para crear carritos nuevos, obtener los mismos y obtener un carrito de forma individual segun el id a proporcionar.

Tambien se agrego el server provisto por express, y se agregaron las rutas para consultar a la api tanto para productos, como para los carritos

Para consultar a los productos debes agregarle al endpoint:
"/GET/api/products" para obtener todos, tambien puedes hacer lo mismo pero con una query limitando su cantidad, el endpoint para hacer eso seria:
"/GET/api/products?limit=" . Debes agregar una consulta numerica al lado del "="

De la misma forma consultamos por los carritos.

Para consultar a los caritos debes agregarle al endpoint:
"/GET/api/carts" para obtener todos, tambien puedes hacer lo mismo pero con una query limitando su cantidad, el endpoint para hacer eso seria:
"/GET/api/carts?limit=" . Debes agregar una consulta numerica al lado del "="

Tambien puedes hacer consultas por un producto/carrito en particular con los siguientes endpoints:

"/GET/products/" al lado de la ultima "/" debes agregar el numero de producto que desees buscar.
"/GET/carts/" al lado de la ultima "/" debes agregar el numero de carrito que desees buscar.

Muchas gracias :D
