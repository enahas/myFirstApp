# ATR Mentoría y Coaching

ATR es un e-commerce para la venta de servicios de Mentoría y Coaching, sesiones personales y Workshops grupales.

Cuenta con

- registro y login de usuarios: los campos son validados al realizar el registro
- filtro por categorías: tomando las categorías de la base de datos se generan filtros de productos
- carrito: cuenta vista completa de los items del carrito, su total, y la opción de sacar un producto del carrito
- vistas de listas de productos: vista general de productos con foto y detalles mínimos
- vista de detalles: vista con todos los detalles del producto 
- control de stock: revisa que los usuarios no puedan agregar más items al carrito de los que hay disponibles, y revisa el stock real al momento de generar la compra

## Instalación

1. Forkeá y cloná el repositorio

2. Parado en la raíz del proyecto corré el comando 

   ```
   yarn install
   ```

    para instalar todas las dependecias del proyecto

3. Usá 

   ```
   yarn start
   ```

    para correr el proyecto, que estará disponible en http://localhost:3000



## Dependencias

Uso de Bootstrap para dar formato a la aplicación.

Uso de React Router Dom para la navegación.

Uso de FireBase para persistencia de datos.


## Aplicación en funcionamiento

https://github.com/enahas/myFirstApp/blob/Firebase/atr_en_funcionamiento.gif


### Autora

Estefanía Nahas

2021 - Curso de React en CoderHouse
