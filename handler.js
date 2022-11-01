const { getRucursivelyDirectoryFiles } = require("./src/utils/filesUtil");
const { Collection } = require("discord.js");
module.exports = {
    loadEvents,
    loadCommands
}

function loadEvents(client) {
   const events = getRucursivelyDirectoryFiles("./src/events", ".js");

   for(const event of events) {
       const object = require(`./${event}`);

       if(!object.name) { continue; }

       client.on(object.name, (...args) => { object.execute(client, ...args); })
   }

   console.log(`Załadowano ${events.length} events`);
}

function loadCommands(client) {
    client.commands = new Collection();

    const commands = getRucursivelyDirectoryFiles("./src/commands", ".js")

    for(const command of commands) {
        const object = require (`./${command}`);

        if(!object.name) { continue; }


        for(const alias of object.name) {
            client.commands.set(alias, object);
        }
    }

    console.log(`Załadowano ${commands.length} commands`);
}