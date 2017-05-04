const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./settings.json').token;

client.on('ready' ,() => {
    console.log('Im working');
});

client.on('ready' ,() => {
  client.user.setStatus('dnd');
});

client.on('ready' ,() => {
  client.user.setGame('.help / twtich.tv/bassj_');
});

var prefix = "."
client.on('message' , message => {
    if (!message.content.startsWith(prefix)) return;
    let args = message.content.split(' ').slice(1);
	  var result = args.join(' ');

    console.log('Message');
    if (message.author.bot) return;
    if (message.content === prefix + 'ping') {
      const embed = new Discord.RichEmbed()
     .setColor("#FF0000")
     .setTitle("Pong!");
   let start = Date.now();
   message.channel.sendEmbed(embed, { disableEveryone: true })
     .then(m => {
       m.edit('', {
         embed: new Discord.RichEmbed()
           .setColor("#84DE02")
           .setTitle("Pong!:ping_pong:")
           .setDescription(`\`${Date.now() - start}ms\``)
       })
     }).catch(console.error);
 } else

    if (message.content.startsWith(prefix + 'game')) {
      console.log('Game set!');
  		if (!result) {
  			result = null;
  		}
  		client.user.setGame(result);
    } else

    if (message.content.startsWith(prefix + 'status')) {
      console.log('Status set!');
      if (!result) {
              result = 'online';
      }
      client.user.setStatus(result);
    } else
    if (message.content === prefix + 'help') {
      message.channel.sendMessage('**Příkazy:**\n\n`.battletag` - Můj Battletag!\n`.steam` - Můj steam!\n`.youtube` - Můj Youtube kanál!\n`.čas` - Kolik je hodin?!\n`.highlight` - Zde nalezneš poslední highlight (zatím se sám neupdatuje)\n`.facebook` - Moje facebook fanpage!\n`.schedule` - Kdy streamuju?\n`.spotify` - Můj spotify playlist!');
    } else

    if (message.content === prefix + 'battletag') {
        message.channel.sendMessage('Můj BattleTag je: `BassJ#2613`!');
    } else

    if (message.content === prefix + 'steam') {
        message.channel.sendMessage('Můj steam je: http://steamcommunity.com/id/bassik96/');
    } else

    if (message.content === prefix + 'youtube') {
        message.channel.sendMessage('Můj youtube kanál: https://www.youtube.com/c/Bassjofficial');
    } else

    if (message.content === prefix + 'čas') {
      message.channel.sendMessage('K-k-kk-k-Kolik je?!\n**It\'s high noon!** :clock12:\nhttps://clips.twitch.tv/MushyObliviousWheelDBstyle');
    } else

    if (message.content === prefix + 'highlight') {
      message.channel.sendMessage('Poslední highlight nalezeš zde: https://clips.twitch.tv/TriumphantBeautifulLasagnaGivePLZ');
    } else

    if (message.content === prefix + 'facebook') {
      message.channel.sendMessage('Moje facebook fanpage: https://www.facebook.com/BassJOfficial');
    } else

    if (message.content === prefix + 'schedule') {
      message.channel.sendMessage('**Kdy streamuju?**\n\n__**Sudé týdny**__: Většinou streamy nebudou protože mám odpolední, ale občas okolo 11 večer stream dám.\n__**Liché týdny**__: Většinou okolo 3 odpoledne, pokud mi do toho něco nevleze.\n__**Víkendy**__: Většinou každý den, čas buďto určím předem nebo jak se budu cítit.')
    } else

    if (message.content === prefix + 'spotify') {
      message.channel.sendMessage('Můj Spotify playlist: `spotify:user:corkysek:playlist:1javH7H7REnAF7iWhhq5BZ` Toto stačí vložit do search baru v spotify a stisknout enter.')
    }



});

client.login(token);
