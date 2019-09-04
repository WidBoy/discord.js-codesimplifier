![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)
[![NPM](https://nodei.co/npm/discord.js-codesimplifier.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/discord.js-codesimplifier/)


![NPM](https://cdn.discordapp.com/attachments/602881684714815520/618032181658255360/gg.png)

__¿Para qué sirve este npm?__
Muy simple, como su propio nombre indica es un simplificador de code.
Es decir, no hará falta que te pases el tiempo escribiendo `message.guild.owner.id`... ¡Eso es el pasado!
Ahora, con este npm, con un par de letras podrás representar eso!


| Funciones disponibles | Explicación |
| ------ | ------ |
| ownerid | Mostrará la id del owner |
| servername | Mostará el nombre del servidor |
| serverid | Mostrará la id del servidor  |
| cantidadmiembros |  Mostará la cantidad de miembros del servidor |
| serversecurity | Con esta extensión el bot mostará el nivel de seguridad del servidor |
| servercreacion | Mostrará la fecha de creación del servidor |
| serverregion |  Mostrará la región del servidor |
| rolelist |  Mostrará la lista de roles del servidor [POSIBLES ERRORES](https://www.npmjs.com/package/discord.js-codesimplifier#posibles-errores) |
| emojilist | Mostrará la lista de emojis del servidor [POSIBLES ERRORES](https://www.npmjs.com/package/discord.js-codesimplifier#posibles-errores) |
| botserverlist | Mostrará la lista de servidores en los que está el bot |
| pingbot |  Mostrará el ping del bot |
| botuptime | Mostrará el timepo que lleva el bot activo |
| midiscrim | Mostrará una lista de personas que tienen tu mismo discrim (Solo personas que usan el bot) |



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

```js
if(command === "botuptime"){
  let uptime = simplifier.botuptime(message)

  message.channel.send(uptime)
  /* 
 El bot retornará las horas, los minutos y los segundos
 */

}
###Posibles errores:
* Extensiónes `rolelist` y `emojilist`: Si el servidor dispone de demasiados emojis o roles enviará un error al log. 