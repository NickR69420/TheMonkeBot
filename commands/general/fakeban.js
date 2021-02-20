const Discord = require('discord.js');

module.exports = {
    name: "ban",
    usage: "{prefix}ban [ @user ]",
    description: "",
    permsneeded: "KICK_MEMBERS",
    run: async(bot, message, args) => {
        
        let user = message.mentions.users.first();

        if(!user) {
            return message.channel.send(`${message.author} banned himself. LOL NUB`);
        }

        let banmessages = [`${user} was Banned for drinking too much orange juice`, `Ban hammer has spoken! ${user} was banned for being too good`, 
        `${user} was Banned by Notch`, `${user} got Banned for : e`];

        message.channel.send(banmessages[Math.floor(Math.random() * banmessages.length)]);

    }
}