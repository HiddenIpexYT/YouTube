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
    } else if(command === 'embed'){
        const embed = new Discord.MessageEmbed();
        embed.setTitle('User Info')
        .setDescription('Thank you for watching this video!')
        .addField('Player username:', message.author.username)
        .setThumbnail(message.author.displayAvatarURL());
        embed.setFooter('Made by me')
        .setAuthor(client.user.username)
        .setColor('#FF0000')
        message.channel.send(embed);
    }
});

client.login('') //Put your token here!
