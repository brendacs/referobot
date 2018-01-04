import Discord from 'discord.js';

const invites = (msg, numberUses, numberLeft, nextRole) => {
  const richEmbed = new Discord.RichEmbed();
  msg.channel.send({
    embed: richEmbed
            .setColor('#ffffff')
            .setDescription(`**Stats for ${msg.author}**

:ballot_box_with_check: Users Invited: ${numberUses}
:trophy: Current Rank: ${msg.member.highestRole}
:chart_with_upwards_trend: Invites left: ${numberLeft}
:level_slider: Next Rank: ${nextRole}`)
  });
}

export default invites;
