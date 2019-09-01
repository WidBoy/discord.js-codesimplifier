[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
[![NPM](https://nodei.co/npm/discord.js-codesimplifier.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/discord.js-codesimplifier/)

EL NPM ESTÁ EN __BETA__

__¿Para qué sirve este npm?__
Muy simple, como su propio nombre indica es un simplificador de code.
Es decir, no hará falta que te pases el tiempo escribiendo `message.guild.owner.id`... ¡Eso es el pasado!
Ahora, con este npm, con un par de letras podrás representar eso!


| Funciones disponibles | Explicación |
| ------ | ------ |
| ownerid | Con esta extensión el bot te mostrará la id del owner |
| servername | Con esta extensión el bot mostará el nombre del servidor |
| serverid | Con esta extensión el bot mostrará la id del servidor  |
| cantidadmiembros | Con esta extensión bot mostará la cantidad de miembros del servidor |
| serversecurity | Con esta extensión el bot mostará el nivel de seguridad del servidor |
| servercreacion | Con esta extensión el bot mostrará la fecha de creación del servidor |
| serverregion | Con esta extensión el bot mnadará la región del servidor |
| ping | Con esta extensión el bot mandará tu ping |
| rolelist | Con esta extensión el bot mandará la lista de roles del servidor [POSIBLES ERRORES](https://www.npmjs.com/package/discord.js-codesimplifier#posibles-errores) |
| emojilist | Con está extensión el bot mandará la lista de emojis del servidor [POSIBLES ERRORES](https://www.npmjs.com/package/discord.js-codesimplifier#posibles-errores) |
| botserverlist | Con esta extensión el bot mandará la lista de servidores en los que está el bot |


### Instalación
```sh
npm install discord.js-codesimplifier
```
Para definirlo en el código del bot:
```js
let simplifier = require("discord.js-codesimplifier")
```
### Ejemplos:
```js
if(command === "ownerid"){
    /* Esto es el code básico de todas las funciones */
    
        let owner = simplifier.ownerid(message)
        message.channel.send(owner)

}
```

```js
if(command === "serversecurity"){
     /* Esto es el code básico de todas las funciones */

  let nivel = simplifier.serversecurity(message)
  message.channel.send(nivel)

}
```
###Posibles errores:
* Extensiónes `rolelist` y `emojilist`: Si el servidor dispone de demasiados emojis o roles enviará un error al log. 