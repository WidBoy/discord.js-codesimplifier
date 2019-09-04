const Discord = require("discord.js");
//const client = new Discord.Client();
  
/**
 * @param {string} message
 * @returns
 */
function ownerid(message) {
    if(!message) throw new Error("ownerid(), para solucionarlo: ownerid(message)")
    return message.guild.owner.id
};

/**
 * @param {string} message
 * @returns
 */
function cantidadmiembros(message){
    if(!message) throw new Error("cantidadmiembros(), para solucionarlo: cantidadmiembros(message)")
    return message.guild.memberCount
};

/**
 * @param {string} message
 * @returns
 */
function serverid(message){
    if(!message) throw new Error("serverid(), para solucionarlo: severid(message)")
    return message.guild.id
}

/**
 * @param {string} message
 * @returns
 */
function servername(message){
    if(!message) throw new Error("servername(), para solucionarlo: servername(message)")
    return message.guild.name
}

/**
 * @param {string} message
 * @returns
 */
function serverregion(message){
    if(!message) throw new Error("serverregion(), para solucionarlo: serverregion(message)")
    return message.guild.region
}

/**
 * @param {string} message
 * @returns
 */
function servercreacion(message){
    if(!message) throw new Error("servercreacion(), para solucionarlo:  servercreacion(message)")

    const moment = require('moment');
    return moment.utc(message.guild.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')
}

/**
 * @param {string} message
 * @returns
 */
function serversecurity(message){
    if(!message) throw new Error("serversecurity(), para solucionarlo: serversecurity(message)")
    
    const verlvl = {
        0: "Ninguno",
        1: "Muy bajo",
        2: "Medio",
        3: "(╯°□°）╯︵ ┻━┻",
        4: "(ノಠ益ಠ)ノ彡┻━┻"
      }
    return verlvl[message.guild.verificationLevel]
}



/**
 * @param {string} message
 * @returns
 */
function rolelist(message){
    if(!message) throw new Error("rolelist(), para solucionarlo: rolelist(message)")
    return  message.guild.roles.map(m => m).join(" **\n** ")
}

/**
 * @param {string} message
 * @returns
 */
function botserverlist(message){
    if(!message) throw new Error("botserverlist(), para solucionarlo: botserverlist(message)")
    
    return message.client.guilds.map(g => "**"+g.name+"** | " + g.id).join("\n")
}

/**
 * @param {string} message
 * @returns
 */
function emojilist(message){
    if(!message) throw new Error("emojilist(), para solucionarlo: emojilist(message)")
    
    return message.guild.emojis.map((e, x) => (x + ' = ' + e) + ' | ' +e.name).join('\n')
}

/**
 * @param {string} message
 * @returns
 */
function midiscrim(message){
    if(!message) throw new Error("midiscrim(), para solucionarlo: midiscrim(message)")
    
    return message.client.users.filter(u => u.discriminator === message.author.discriminator).map(d => d.tag).join("\n ");
}

/**
 * @param {string} message
 * @returns
 */
function pingbot(message){
    if(!message) throw new Error("pingbot(), para solucionarlo: pingbot(message)")
    
    return parseInt(message.client.ping)
}

/**
 * @param {string} message
 * @returns
 */
function botuptime(message){
    if(!message) throw new Error("botuptime(), para solucionarlo: botuptime(message)")
    
    let totalSeconds = (message.client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    return `Horas: **${hours}** , minutos: **${minutes}** , segundos: **${seconds}**`
}

/** 
 * @param {string} message
 * @returns  
 */
function noname(message){

}


module.exports = {
   cantidadmiembros,
   ownerid,
   serverid,
   servername,
   rolelist,
   serverregion,
   serversecurity,
   servercreacion,
   botserverlist,
   emojilist,
   midiscrim,
   pingbot,
   botuptime
   
}