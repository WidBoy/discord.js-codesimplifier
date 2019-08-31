EL NPM ESTÁ EN __BETA__
### discord.js-codesimplifier

__¿Para qué sirve este npm?__
Muy simple, como su propio nombre indica es un simplificador de code.
Es decir, no hará falta que te pases el tiempo escribiendo `message.guild.owner.id`... ¡Eso es el pasado!
Ahora, con este npm, con un par de letras podrás representar eso!


| Funciones disponibles | Explicación |
| ------ | ------ |
| ownerid | Con esta extensión el bot te mostrará la id del owner |
| servername | Con esta extensión el bot mostará el nombre del servidor |
| serverid | Con esta extensión el bot mostrará la id del servidor  |
| cantidadmiembros | Con esta extensión bot mostará la cantidad de miembros del servidor|

### Instalación
```sh
npm install discord.js-codesimplifier
```
Para definirlo en el código del bot:
```js
let simplifier = require("discord.js-codesimplifier
```
### Ejemplo:
```js
if(command === "ownerid"){
    /* Esto es el code básico de todas las funciones */
    
        let owner = simplifier.ownerid(message)
        message.channel.send(owner)

}
```
