# Coder Backend - Proyecto de Nico Zampolini

En este proyecto encontrarás los trabajos realizados en el curso de backend de Coder.

## Primer entregable

En este primer entregable se creó la clase `ProductManager` con su constructor, que contiene un array vacío donde se guardarán los productos futuros.

También se crearon 3 métodos de la clase:
- `addProduct` para agregar productos.
- `getProducts` para obtener todos los productos.
- `getProductById` para obtener un producto específico en base a su identificador.

¡Muchas gracias por tu lectura! :)

## Segundo entregable

En el segundo entregable se agregaron métodos del módulo "fs" para guardar y hacer persistente la memoria local de la aplicación. Se implementaron funcionalidades para agregar, editar, eliminar y traer todos los datos desde el archivo `data.json`.

## Tercer entregable

En esta ocasión se agregó la clase `CartManager`, donde se incorporaron métodos para crear carritos nuevos, obtener los mismos y obtener un carrito de forma individual según el ID proporcionado.

También se agregó el servidor provisto por Express y se crearon las rutas para consultar la API tanto para productos como para los carritos.

### Consulta de productos

Puedes consultar los productos utilizando las siguientes rutas:

- Para obtener todos los productos: `GET /api/products`
- Para obtener una cantidad limitada de productos: `GET /api/products?limit={cantidad}`

Además, puedes realizar consultas por un producto específico utilizando la siguiente ruta:

- Para obtener un producto en particular: `GET /products/{id}`
