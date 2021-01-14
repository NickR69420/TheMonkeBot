const Discord = require('discord.js');


module.exports = {
    name: "help",
    usage: "{prefix}help",
    description: "Help command for Monke",
    run: async(bot, message, args) => {

   const embed = new Discord.MessageEmbed()
   .setTitle("Get to know MONKE better!")
        .setDescription(`
 monke help | Get to know MONKE better!
 monke | All about Monke
 kill | hire Monke to kill a user :knife:
 pizza | Ask Monke to make a pizza for you!
 say   | Tell Monke what to say!
 `)
        .setColor("RANDOM")
        .setFooter("Powered by the Great Monke")

        message.channel.send(embed);
    }
}  