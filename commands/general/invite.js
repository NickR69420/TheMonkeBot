const Discord = require('discord.js');


module.exports = {
    name: "invite",
    usage: "{prefix}invite",
    description: "invite command for Monke",
    permsneeded: "",
    run: async(bot, message, args) => {

   let embed = new Discord.RichEmbed()
   .setTitle("Here's the invite link!")
  .setDescription(`
 https://discord.com/api/oauth2/authorize?client_id=798076169852289054&permissions=8&scope=bot
 `)
        .setColor("RANDOM")
        .setFooter("Powered by the Great Monke")

        message.channel.send(embed);
    }
}  