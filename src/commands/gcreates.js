const { MessageEmbed } = require("discord.js")

module.exports = {
    name: ["gcreate"],
    async execute(client, msg, args) {
        const embed = new MessageEmbed()
        .setTitle("Giveaway")
        .setDescription("**Wygrana: TEST**")
        .setColor("#0af50a")
        .setFooter({text: "Giveaway"})
        msg.channel.send({embeds: [embed]});
        console.log(`Użytkownik ${msg.author.tag} użył komende: !${args}`)
    }
}