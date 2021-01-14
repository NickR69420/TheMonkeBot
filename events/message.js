const Discord = require("discord.js");

module.exports = (bot) => {
    
    bot.on("message", async message => {
        if (!message.member) return;
        if(message.content === "monke") {
            return message.channel.send("**Monke is best**\n**Monke is awesome**\n**Don't disrepect Monke.**\nhttps://tenor.com/view/go-back-iwant-to-be-monkey-gif-19199142");
        }
        if(message.content === "pizza") {
            return message.channel.send("making it... https://tenor.com/view/pizza-dough-chef-pizza-hut-commercial-gif-17563081 ");
        }
    });

}