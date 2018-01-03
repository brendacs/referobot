import Discord from 'discord.js';

const help = (bot, msg, cmd) => {
  const richEmbed = new Discord.RichEmbed();

  msg.channel.send({
    embed: richEmbed
            .setColor('#ffffff')
            .setDescription(`${"`" + ">invites" + "`"} - check # invites until next role
${"`" + ">top <#>" + "`"} - check a certain # of top inviters
${"`" + ">membercount" + "`"} - check total server member count
${"`" + ">set <channel-name>" + "`"} - only allow this bot in ${"`" + "<channel-name>" + "`"}
${"`" + ">set default" + "`"} - allow bot to work in all channels
Remember to set your invite link to never expire.`)
  });
}

export default help;
