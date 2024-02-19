const {Client, Events , GatewayIntentBits} = require('discord.js');
const token = require('./config.json').token;

const client = new Client({intents: [GatewayIntentBits.Guilds] }) ; // guild here is basically a discord server

client.once(Events.ClientReady, readyClient => {
    console.log(`Logged in as ${readyClient.user.tag}`);
});

client.login(token);