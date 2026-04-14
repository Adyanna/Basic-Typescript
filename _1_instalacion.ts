/**
 * ----------------RUNTIME---------------------
 * INSTALAR NODE.JS
 * descripcion: te permite usar JavaScript para construir el backend y manejar servidores.
 * link descarga: https://nodejs.org/en/download/current
 * RECOMENDACION: usar las versiones LTS, que son las estables
 * IMPORTANTE
 * revisar que el path se encuentre creado en las variables de entorno
 * en caso se usar nvm (node version manager) son dos rutas las que deben encontrarse en el path (node, nvm)
 * 
 * -----------------PACKAGE--------------------
 * TYPESCRIPT: lenguaje typado, siendo un JavaScript con superpoderes que te ayuda a evitar errores y escribir código más claro.
 * npm install -g typescript  
 * npm install --save-dev typescript  // para mantenerlo dentro del proyecto
 * IMPORTANTE: -g es de forma global, pero no es recomendado para proyectos reales

 * INICIAR CONFIGURACION: esto crea el archivo tsconfig.json donde se encuentra todas las configuraciones del proyecto
 * npx tsc --init
 * 
 * FOMA DE COMPILAR
 * tsc archivo.ts //convertira el archivo .ts a .js
 * node archivo.js //ejecuta el archivo .js
 * 
 * --------------------EJERCUCION DIRECTA-----------------------
 * TS-NODE : permite ejecutar TS sin generar el archivo .js, evitando compilar manualmente
 * npm install -g ts-node
 * npm install --save-dev ts-node  // para mantenerlo dentro del proyecto
 * 
 * FORMA DE EJERCUTAR DIRECTAMENTE
 * 
 * ts-node archivo.ts
 * npx ts-node archivo.ts
 * 
 */


/**
 * CONCLUCIONES
 * podemos tipas, objetos, interfaces lo que nos brinda una forma de trabajo adecuado para un problema
 * codigo en javascript es valido para typescript
 * 
 * DOCUMENTACION
 *  https://www.typescriptlang.org/docs/
 */