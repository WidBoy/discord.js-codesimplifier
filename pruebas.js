//Definimos el npm
const Discord = require("discord.js");
const simplifier = require("./lib/codesimplifier")
//Creamos el client
const  client = new Discord.Client();

//Evento de encendido
client.on("ready", () => {
   console.log("Estoy listo!");
});

//Evento de mensaje
client.on("message", (message) => {

 var prefix = "!";

   if(!message.content.startsWith(prefix)) return;
   if(message.author.bot) return;
   const args = message.content.slice(prefix.length).trim().split(/ +/g);
   const command = args.shift().toLowerCase();

if(command === "ownerid"){

    let owner = simplifier.ownerid(message)
  message.channel.send(owner)

}
if(command === "cantidadmiembros"){
  let cantidad = simplifier.cantidadmiembros(message)
  message.channel.send(cantidad)
}
if(command === "serverid"){
  let id = simplifier.serverid(message)
 message.channel.send(id)
}
if(command === "servername"){
  let name = simplifier.servername(message)
  message.channel.send(name)
}

if(command === "ping"){
  let ping = simplifier.ping(message)
  message.channel.send(ping)
}

if(command === "rolelist"){
let list = simplifier.rolelist(message)
message.channel.send(list)
}

if(command === "serverregion"){
  let region = simplifier.serverregion(message)
  message.channel.send(region)

}
if(command === "serversecurity"){
  let nivel = simplifier.serversecurity(message)
  message.channel.send(nivel)
}

if(command === "servercreacion"){
  let dia = simplifier.servercreacion(message)
  message.channel.send(dia)
}

if(command === "botserverlist"){
  let search = simplifier.botserverlist(message)
  message.channel.send(search)
}

if(command === "emojilist"){
  let list = simplifier.emojilist(message)
  message.channel.send(list)
}

if(command === "serverafkchannel"){
  let canal = simplifier.serverafkchannel(message)
  message.channel.send(canal)
}


});
client.login("");