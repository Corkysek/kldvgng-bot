const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./settings.json').token;

client.on('ready' ,() => {
    console.log('Im working');
});

var prefix = "."
client.on('message' , message => {
    if (!message.content.startsWith(prefix)) return;
    let args = message.content.split(' ').slice(1);
	  var result = args.join(' ');

    console.log('Message');
    if (message.author.bot) return;
    if (message.content === prefix + 'ping') {
        message.channel.sendMessage(`Pong! \`${Date.now() - message.createdTimestamp} ms\` :ping_pong:`);
    } else

    if (message.content.startsWith(prefix + 'game')) {
  		if (!result) {
  			result = null;
  		}
  		client.user.setGame(result);
    } else

    if (message.content.startsWith(prefix + 'status')) {
      if (!result) {
              result = 'online';
      }
      client.user.setStatus(result);
    } else
    if (message.content === prefix + 'help') {
      message.channel.sendMessage('**Příkazy:**\n\n`.battletag` - Můj Battletag!\n`.steam` - Můj steam!\n`.youtube` - Můj Youtube kanál!');
    } else

    if (message.content === prefix + 'battletag') {
        message.channel.sendMessage('Můj BattleTag je: `BassJ#2613`!');
    } else

    if (message.content === prefix + 'steam') {
        message.channel.sendMessage('Můj steam je: http://steamcommunity.com/id/bassik96/');
    } else
    if (message.content === prefix + 'youtube') {
        message.channel.sendMessage('Můj youtube kanál: https://www.youtube.com/c/Bassjofficial')
    }
});

client.login(token);
