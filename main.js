const fs = require("node:fs");
const path = require("node:path");
const { Client, GatewayIntentBits, MessageReaction, VoiceState, Guild, User, GuildMember, ActivityType, VoiceStateManager} = require('discord.js');

const client = new Client(
  { intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates
    ]
  }
);

// code ---
client.on('messageCreate', message => {
  if(message.author.bot) return;
  if(message.content.match(/^(ヒメ|ひめ)$/)) {
    message.reply("かわいい");
    console.log(message.guild.name + "の" + message.channel.name + "チャンネルで" + message.author.tag + "(" + message.member.displayName + ")さんに返事してきたぞ!");
  };
  // 猫化 --
  if(message.member.roles.cache.find(role => role.name === "猫化")) {
    if(message.author.id == '926338244222812250') return;
    if(!(message.content.match(/にゃ(あ|ぁ|-|~|〜|ー|\?|\.|!|,|\/|\(|\)|…|ん)?(あ|ぁ|-|~|〜|ー|\?|\.|!|,|\/|\(|\)|…|ん)*$/))) {

      if(!(message.member.permissions.bitfield == '114349209288703')) {
      message.member.timeout(message.content.length * 1000)
      console.log(message.author.tag + "さんが猫化してなかったので" + message.content.length + "秒タイムアウトしてきたぞ!!")

      }else{
        message.react('🤔');
        setTimeout(() => {
          message.reactions.cache.get('🤔').users.remove(client.user)
        }, message.content.length * 1000)
      }
    }
  };
});


client.on('ready', () => {
  console.log("ヒメ可愛いよね(訳:起動したよ)");
  /*activity*/
  client.user.setActivity({
    name : "👹",
    type : ActivityType.Competing
  });
  client.user.setStatus("dnd");
});

client.login(process.env.TOKEN);
