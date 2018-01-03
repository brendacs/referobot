import Discord from 'discord.js';

const help = (bot, msg, cmd) => {
  const richEmbed = new Discord.RichEmbed();

  msg.channel.send({
    embed: richEmbed
            .setColor('#ffffff')
            .setDescription(`Use ${"`" + ">invites" + "`"} to see how many more invites you need to get a new role.
To check a certain # of top inviters, use ${"`" + ">top <#>" + "`"}.
To check how many members are in this server use ${"`" + ">membercount" + "`"}.
Remember to set your invite link to never expire. Read #faq for more info.`)
  });
}

export default help;
