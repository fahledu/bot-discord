require('dotenv').config();
const { token } = process.env;
const { Client, Collection, GatewayIntentBits } = require('discord.js')
const fs = require('fs')

const client = new Client({ intents: GatewayIntentBits.Guilds });
client.commands = new Collection();
client.commandArray = [];

const functionFolders = fs.readdirSync(`./src/functions`)
for (const folder of functionFolders) {
    const functionFiles = fs.readdirSync(`./src/functions/${folder}`).filter((file) => file.endsWith(".js"));
for (const file of functionFiles) require(`./functions/${folder}/${file}`)(client);
}

client.handleEvents();
client.handleCommands();

// Start sending hourly messages once the bot is ready
client.once('ready', () => {
    console.log(`Ready!!! ${client.user.tag} is logged in and online!`);
    client.sendHourlyMessage(); // Start the hourly message task
});


client.login(token)