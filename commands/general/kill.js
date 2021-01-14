const Discord = require('discord.js');

module.exports = {
    name: "kill",
    usage: "{prefix}kill [ @user ]",
    description: "",
    run: async(bot, message, args) => {
        
        let user = message.mentions.users.first();

        if(!user) {
            return message.channel.send(`${message.author} killed himself.`);
        }

        let killmessages = [`${user} was beaten to death by his mum`, `${user} fell in lava cause he hated monke`, 
        `${user} got thrown into the sky`, `${user} got rejected by his/her crush and suffocated`];

        message.channel.send(killmessages[Math.floor(Math.random() * killmessages.length)]);

    }
}