import Discord from 'discord.js';

const invites = (msg, numberUses, numberLeft, nextRole, hasInviteLink) => {
  const richEmbed = new Discord.RichEmbed();

  if (hasInviteLink) {
    msg.channel.send({
      embed: richEmbed
              .setColor('#ffffff')
              .setDescription(`**Stats for ${msg.author}**

:ballot_box_with_check: Users Invited: ${numberUses}
:trophy: Current Rank: ${msg.member.highestRole}
:chart_with_upwards_trend: Invites left: ${numberLeft}
:level_slider: Next Rank: ${nextRole}`)
    });
  } else {
    msg.channel.send({
      embed: richEmbed
              .setColor('#ffffff')
              .setDescription(`You have must create an invite link.`)
    });
  }
}

export default invites;
