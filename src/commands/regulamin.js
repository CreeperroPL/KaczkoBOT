const { MessageEmbed } = require("discord.js")

module.exports = {
    name: ["reggdsadasdasdsadasdsa"],
    async execute(client, msg, args) {
        const embed = new MessageEmbed()
        .setTitle("Regulamin")
        .setDescription("**▬▬▬▬▬▬▬▬▬▬▬▬▬📃REGULAMIN📃▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n \n🏠Regulamin ogólny 🏠\n\n1-nie spam\n2-nie floduj \n3-nie bądź toksyczny\n4-nie podszywaj się za kogo kogokolwiek \n5-nie obrażaj @👑 》 twórca 《 👑 @🤙 》 admin 《 🤙 @🤙 》 pomocnik 《 🤙 ponieważ trzeba mieć do nich kulturę\n6-nie poprawiaj kogoś orta\n7-nie niszcz nie kogoś pociskami\n8-nie promuj się\n9-nie kopiuj regulaminu serwera\n10-nie wysyłaj gołych zdj ITP\n11-nie bądź gwiazdą\n12-nie rób nie prawdziwych zgłoszeń\n13-musisz mieć 10-18 lat\n\n🔊 Regulaminna kanałach głosowych 🔊\n\n\n1-nie troluj\n2-nie psuj ludziom gry\n3-nie fleksuj się\n4-nie popisuj się bo to tylko discord\n\n🧐Inne🧐\n1-bardzo dziękujemy za zgodę z regulaminem\n2-dzękujemy bardzo mocno za wszystkie boosty prezenty ITP\n3-aby zgłosić kogoś trzeba wejść do 『🧐』zgłoszenia『🧐\n4-każde wykroczenia będą karane odpowiednią karą\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n@👑 》 twórca 《 👑 @🤙 》 admin 《 🤙 @🤙 》 pomocnik 《 🤙 mogą nie przestrzegać zasad i je zmieniać**")
        .setColor("#0af50a")
        .setFooter({text: "Created By CREPERRO"})
        msg.channel.send({embeds: [embed]});

        console.log(`Użytkownik ${msg.author.tag} użył komende: !${args}`)
    }
}