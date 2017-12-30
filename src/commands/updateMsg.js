import Discord from 'discord.js';

const updateMsg = (msg, numberUses, numberLeft, nextRole, hasInviteLink) => {
  const richEmbed = new Discord.RichEmbed();
  let user = msg.author.id;
  let member = msg.member;

  if (member == null) {
    msg.guild.fetchMember(msg.author, true);
    member = msg.member;
  }

  if (hasInviteLink) {
    let allGuildRoles = msg.guild.roles.array();
    let roles = member.roles.array();
    let updatedRole;
    let currentRoles = {};
    let updated = false;


    for (let i = 0; i < roles.length; i++) {
      currentRoles[roles[i].name] = i;
    }

    if (numberUses >= 4) {
      updatedRole = "Recruit";
    } if (numberUses >= 12) {
      updatedRole = "Corporal";
    } if (numberUses >= 36) {
      updatedRole = "Sergeant";
    } if (numberUses >= 75) {
      updatedRole = "Lieutenant";
    } if (numberUses >= 125) {
      updatedRole = "Captain";
    } if (numberUses >= 175) {
      updatedRole = "General";
    }

    if (updatedRole in currentRoles || numberUses < 4) {
      updated = true;
    } else {
      for(let i = 0; i < allGuildRoles.length; i++) {
        if (updatedRole === allGuildRoles[i].name) {
          member.addRole(allGuildRoles[i]);
          break;
        }
      }
    }

    msg.channel.send({
      embed: richEmbed
              .setColor('#ffffff')
              .setDescription(`Your roles have been updated.`)
    });
  } else {
    msg.channel.send({
      embed: richEmbed
              .setColor('#ffffff')
              .setDescription(`You have must create an invite link.`)
    });
  }
}

export default updateMsg;
