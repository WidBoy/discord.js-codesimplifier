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

module.exports = {
    cantidadmiembros,
    ownerid,
   serverid,
   servername
}