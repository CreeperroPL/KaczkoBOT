const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "guildMemberAdd",
    async execute(client, member) {
        const user = member.user;
        const channel = client.channels.cache.get("859370947026092052"); // ﹝👋﹞witamy

    //channel.send(`Witaj <@${user.id}>!`);

    const embed = new MessageEmbed()
    .setTitle("Wiadomość powitalna")
    .setDescription(`Witaj <@${user.id}>! Mamy nadzieje że zostaniesz z nami na dłużej! ~Administarcja POZDRAWIA ! `)
    .setColor("RANDOM")
    .setImage("https://cdn.discordapp.com/attachments/1021735891938582530/1022925682319306762/unknown.png")
    .setTimestamp();

    channel.send({embeds: [embed]});
    }
}