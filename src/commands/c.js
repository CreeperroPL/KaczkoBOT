const { MessageEmbed } = require("discord.js")

module.exports = {
    name: ["Creperro"],
    async execute(client, msg, args) {
        const embed = new MessageEmbed()
        .setTitle("Creperro lubi Creeper'y")
        .setDescription("**Creperro lubi Creeper'y SERIO!**")
        .setColor("#0af50a")
        .setImage("https://www.51015kids.eu/picture/960x1274/smart/filters:fill(white):quality(75)/57ee0382d800134e4c4abd1f6bd58690.jpg")
        .setFooter({text: "Creperro pozdrawia<3"})
        msg.channel.send({embeds: [embed]});

        console.log(`Użytkownik ${msg.author.tag} użył komende: !${args}`)
    }
}