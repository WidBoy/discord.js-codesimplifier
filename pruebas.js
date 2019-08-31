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

});
client.login("NjE3Mjc3NDA0OTA5NDA0MjAz.XWrTgA.sBxyoC6nfx-kQQgq7GBWEEr9WIA");