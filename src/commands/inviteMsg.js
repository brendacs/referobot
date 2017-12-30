import Discord from 'discord.js';

const inviteMsg = (msg, numberUses, numberLeft, nextRole, hasInviteLink) => {
  const richEmbed = new Discord.RichEmbed();

  if (hasInviteLink) {
    msg.channel.send({
      embed: richEmbed
              .setColor('#ffffff')
              .setDescription(`You have ${numberUses} invites, only ${numberLeft} more invites until ${nextRole}`)
    });
  } else {
    msg.channel.send({
      embed: richEmbed
              .setColor('#ffffff')
              .setDescription(`You have must create an invite link.`)
    });
  }
}

export default inviteMsg;
