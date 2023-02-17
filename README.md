## Acerca de este proyecto

Una api para crear formularios CMS basada en Express.js de Nodejs y utilizando el novedoso framework PayloadCMS https://payloadcms.com, que proporciona una interfaz de usuario para interactuar con el api y despliega una base de datos NoSQL de MongoDB
de manera automática. Como plus adicional, agregué la funcionalidad de subir las imagenes directamente a un bucket S3 de AWS,
previamente configurado como público. Además, cree un Custom EndPoint para acceder a la información de la página a renderizar.

## Environment

- MONGODB_URI :
- PAYLOAD_SECRET :
- API_KEY_AWS :
- API_SECRET_KEY_AWS :

## Acerca de mí

- Portafolio: https://juanrosero.netlify.app/
- LinkedIn: https://www.linkedin.com/in/juan-jos%C3%A9-rosero-calder%C3%B3n-27564b203/

## Capturas de pantalla

- Coleccion 'Media'

  ![Collection #1](https://github.com/JuanRosero97/api-cms-amaris/blob/main/screenshots/sc1.png)

- Coleccion 'Section'

  ![Collection #2](https://github.com/JuanRosero97/api-cms-amaris/blob/main/screenshots/sc2.png)

- Coleccion 'Sites'

  ![Collection #3](https://github.com/JuanRosero97/api-cms-amaris/blob/main/screenshots/sc3.png)

- Colleccion 'Users'

  ![Collection #3](https://github.com/JuanRosero97/api-cms-amaris/blob/main/screenshots/sc4.png)

- Imagens en Bucket S3 de AWS

  ![AWS](https://github.com/JuanRosero97/api-cms-amaris/blob/main/screenshots/sc5.png)

## Scripts

### `npm i --save`

### `npm run dev`

Corre el api y la interfaz de adminitrador en el mismo puerto en modo desarrollo.\
[http://localhost:3000](http://localhost:3000).

### `Recuerda crear una cuenta en AWS o de lo contrario modificar la collecion 'Media' para almacenar las imagenes en el servidor local`
