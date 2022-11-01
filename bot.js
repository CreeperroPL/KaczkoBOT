const { Client, Intents, } = require("discord.js")
const Discord = require("discord.js");
const { Collection, Message, MessageEmbed, ActivityType, setActivity } =require("discord.js")
const fs = require('fs');
const { loadEvents, loadCommands } = require('./handler');

const client = new Client({intents: new Intents(32767)})




client.on("ready", () => {
    client.user.setActivity(
    "Poleceń Kaczki",
    {
        type: "LISTENING"
    }

    );

    console.log(`eniu, twój komputer hackuje ${client.user.tag}`);
})


//   ----------------------------------------------------------------------------------------------------------------------------------

            loadEvents(client);
            loadCommands(client);

// });

client.login("MTAzNjk1OTk2OTU0ODk3NjEyOA.G-C1L_.6TxeTpkgwQVnwFKx_V7MjDG2c9zJlHfHsZm9bQ");