module.exports={
    name: 'ping',
    description: 'responds with pong!',
    category: 'info',
    run: async(bot, message, args)=>{
        message.channel.send('Pong!')
    }
}