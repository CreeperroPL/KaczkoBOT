module.exports = {
    name: ["ping"],
    async execute(client, msg, args) {

            msg.channel.send(`Pong! Mam ${client.ws.ping} ms pingu `)

            console.log(`Użytkownik ${msg.author.tag} użył komende: !${args}`)
    }
}