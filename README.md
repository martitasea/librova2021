![alt text](https://github.com/martitasea/libro_va/blob/main/client/public/media/logo.svg?raw=true)

## ¿Qué es LibroVa?

Libro Va es una **plataforma digital para el intercambio de libros entre niños de un mismo colegio.** Es una plataforma que pretende fomentar la lectura infantil, la comunidad y el hecho de compartir.


## Marco de trabajo

Libro Va está enmarcada dentro de la convocatoria de subvenciones para **la promoción del tejido asociativo y la participación de las entidades ciudadanas del municipio de Madrid.**
Esta modalidad está destinada a financiar proyectos de Fomento del Asociacionismo destinados a fortalecer las relaciones entre asociados y a promover la incorporación de nuevas personas
>Plan Estratégico de Subvenciones de Distritos 2018-2020 aprobado por Decreto de 20 de diciembre de 2018 del Delegado del Área de Gobierno de Coordinación Territorial y Cooperación Público-Social,

## ¿Cómo funciona LibroVa?

Libro Va funciona como una plataforma de intercambio de libro entre bibliotecas. Cada niño en su casa tiene "su biblioteca" que pone a disposición de los demás niños del colegio.

Se considera dos tipos de usuarios:

👤 **user** (niños)

👴 **admin** (adulto responsable)

La visualización del catálogo, confirmación de préstamo, añadir libros y solicitar la devolución, se hará sobre una web-app, el intercambio físico, en un lugar habilitado en el colegio y supervisado por un adulto. El intercambio podrá hacerse todos los días de la semana lectiva, dejando en el lugar de intercambio los libros por la mañana y recogiendo los correspondientes por la tarde.

Con el fin de delimitar y asignar claramente la responsabilidad del libro en cada momento, se han establecido 5 fases en las que se puede encontrar el mismo.

| Fase | Estado | Descripción | Responsable | Siguiente acción |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 1  | Reposo-Devuelto  | El libro está con su dueño  | Dueño |  📱 El lector lo pide  |
| 2  | Pedido  | El libro ha sido pedido  | Dueño | 📱 Confirma el préstamo  💼 Lo lleva al cole |
| 3  | Prestado  | El adulto confirma la entrega | Adulto | 🔄 Se produce el intercambio físico |
| 4  | Leyendose  | El lector tiene el libro prestado  | Lector |📱 El lector lo quiere devolver 💼 Lo lleva al cole |
| 5  | Pendiente de devolución  | El adulto confirma la entrega | Adulto | 🔄 Se produce el intercambio físico |
| 1  | ...  | ...  | ... |...|

<img src="https://github.com/martitasea/libro_va/blob/main/client/public/media/cicloFases.png" alt="Fases" width="500px">

## ¿Qué puede hacer un usuario en LibroVa? (y que no)

- ### REGISTRO
Para registrarte es necesario que introduzcas un correo electrónico, tuyo, o de tutor, así como un número de teléfono.
Con e objetivo de preservar la identidad y la seguridad de todos los niños, en el registro, se cotejará el nombre del niño con el de la base de datos de alumnos del colegio. No permitiendo registrarse si no se es alumno.

- ### CATÁLOGO
Podrás ver todos los libros a disposición (excepto los tuyos y los que están en ese momemtno prestados) así como ver más detalles de cada libro al hacer click en cada un de ellos y pedirlo prestado.

- ### AÑADIR: un libro a tu colección
Para dar de alta un libro, ve al area de usuario e introduce el ISBN del mismo, la aplicación se conecta a la API Google Books para mostrar la información necesaria, de esta manera, se evitan errores tipográficos y se ahorra tiempo. 

- ### MI BIBLIOTECA: todos los libros que compartes
Una vez hayas añadido un libro en este apartado podrás ver la portada y el título de todos ellos, así como borrarlo si lo has perdido o regalado.

- ### LEYENDO: el libro que te han prestado
Aquí podrás visualizar el libro que te han prestado y avisar a su dueño de que quieres devolvérselo, a él le aparecerá una notificación en préstamos.

- ### PRÉSTAMOS: libros que te han pedido y libros que te quieren devolver
Necesitarás confirmar el préstamo y la recogida de cada libro que vayas a dejar.
Para poder pedir prestado un libro será necesario que tenga compartidos al menos 10 de los suyos. El plazo máximo de préstamo de un libro será de 1 mes. 

## ¿Qué tecnologías se han utilizado?

Se han usado las siguientes tecnologías:
- React.js (react-router-dom)
- Bootstrap (react-bootstrap)
- Node.js
- Firebase
- Xampp
- MariaDB (SQL)
- MaterialUI (Material-table)
- Chart.js
- API Google Books

