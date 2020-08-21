const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;


client.on('ready', () => {
  console.log(` ${client.user.tag} ucusa gecti!`);
});

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('!kick')) {
  const user = message.mentions.users.first();
  if (user) {
  const member = message.guild.member(user);
  if (member) {
  member
   .kick('Optional reason that will display in the audit logs')
   .then(() => {
   message.channel.send(`Basariyla atildi ${member}`);
   })
   .catch(err => {
   message.reply('Dostum sen bu arkadasi atamazsin :)');
    console.error(err);
    });
    } else {
    message.reply("Bu adam bu sunucuda degil adamim :)");
    }
     } else {
     message.reply("Kimi atmak istiyosun dostum :)");
         }
  }
});
client.login(ayarlar.token);
client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('!ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'Uzgunum ama bu sunucudan uzaklastýrýldýn :(',
          })
          .then(() => {
            message.reply(`Basariyla uzaklastirildi ${member}`);
          })
          .catch(err => {
            message.reply('Dostum sen bu arkadasi uzaklastiramazsin :)');
            console.error(err);
          });
      } else {
        message.reply("Bu adam bu sunucuda degil adamim :)");
      }
    } else {
      message.reply("Kimi uzaklastirmak istiyosun dostum :)");
    }
  }
});
client.login(ayarlar.token);
'use strict';
const Client = new Discord.Client();
client.on('guildMemberAdd', member => {
const channel = member.guild.channels.cache.find(ch => ch.name === 'hosgeldiniz');
if (!channel) return;
channel.send(`Sunucumuza hosgeldin :), ${member}`);
});
client.login(ayarlar.token);
client.on('message', message => {
  if (message.content.toLowerCase() === 'sa') {
    message.channel.send('Aleykum Selam');
  }
  if (message.content.toLowerCase() === 'merhaba') {
    message.channel.send('Merhabalar');
  }
  if (message.content.toLowerCase() === 'selam') {                         
    message.channel.send('Selamlar');
  }
  if (message.content.toLowerCase() === 'furkan') {
    message.reply('iyi biri :)');
  }
  if (message.content.toLowerCase() === 'mustafa') {
    message.reply('RP GOD :)');
  }
  if (message.content.toLowerCase() === 'barkin') {
    message.reply('Minecraft Esporcusu');
  }
    if (message.content.toLowerCase() === 'batuhan') {
    message.reply('MRB BNE VLADIMIR OYNUOM');
  }
  if (!message.content.startsWith(prefix)) {
     return;
  }
  if (message.content.toLowerCase() === prefix + 'sahip' ) {
   message.reply('LNCHPD')
  }
  if (!message.content.startsWith(prefix)) {
     return;
  }
  if (message.content.toLowerCase() === prefix + 'davetlinki' ) {
   message.reply('https://discordapp.com/oauth2/authorize?client_id=734815796445970563&scope=bot&permissions=805829694')
  }
  client.login(ayarlar.token);
  });