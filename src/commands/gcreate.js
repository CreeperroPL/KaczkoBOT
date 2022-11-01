const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const channel = message.mentions.channels.first();


    await bot.giveaways.startGiveaway({
        prize: 'Test Thingy',
        channelId: channel.id,
        guildId: message.guild.id,
        duration: 10000, // 30 Seconds
        winners: 1, // 1 winner
        hostedBy: message.author.id
    });  
}

module.exports.config = {
    name: "gcreate",
    aliases: []
}