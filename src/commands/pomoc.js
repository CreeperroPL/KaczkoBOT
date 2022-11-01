const { MessageEmbed } = require("discord.js")

module.exports = {
    name: ["pomoc"],
    async execute(client, msg, args) {
        const embed = new MessageEmbed()
        .setTitle("Polecenia")
        .setDescription("**COMMING SOON!**")
        .setColor("#0af50a")
        .setFooter({text: "Created By CREPERRO"})
        msg.channel.send({embeds: [embed]});

        console.log(`Użytkownik ${msg.author.tag} użył komende: !${args}`)
    }
}