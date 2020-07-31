const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!'; //You can make this whatever you want

client.once('ready', () => {
    console.log('The bot is online!')
});

client.on('message', async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('Pong!') //The bot will respond with pong!
    }
});

client.login('NzM0MTA5NTQyMTYxNDQ5MDEy.XxM6yQ.98RQr0OpC_S8vGkxl1C1stpGDxw') //Put your token here!