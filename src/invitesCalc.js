import Discord from 'discord.js';
import roles from './roles.js';
import invitesCmd from './commands/invites.js';
import updateme from './commands/updateme.js';

const invitesCalc = (bot, msg, cmd, thisUser, thisMember) => {
  const richEmbed = new Discord.RichEmbed();
  let user = thisUser ? thisUser : msg.author.id;
  let numberUses;
  let max = 0;
  let invites = msg !== null ? msg.guild.fetchInvites() : thisMember.guild.fetchInvites();
  invites
    .then(result => {
      let inviteArr = result.array();
      for (let i = 0; i < inviteArr.length; i++) {
        let invite = inviteArr[i];
        if (invite.inviter.id === user) {
          numberUses = invite.uses;

          if (numberUses > max) {
            max = numberUses;
          }
        }
      }

    numberUses = max;
    let nextRole;
    let roleNumber;
    if (numberUses < 4) [nextRole, roleNumber] = ["Recruit", 4];
    else if (numberUses < 12) [nextRole, roleNumber] = ["Corporal", 12];
    else if (numberUses < 36) [nextRole, roleNumber] = ["Sergeant", 36];
    else if (numberUses < 75) [nextRole, roleNumber] = ["Lieutenant", 75];
    else if (numberUses < 125) [nextRole, roleNumber] = ["Captain", 125];
    else if (numberUses < 175) [nextRole, roleNumber] = ["General", 175];
    else if (numberUses >= 175) [nextRole, roleNumber] = ["XXX", 0];
    let numberLeft = roleNumber - numberUses;
    let hasInviteLink = true;
    if (isNaN(numberLeft)) hasInviteLink = false;

    if (cmd === 'invites') invitesCmd(msg, numberUses, numberLeft, nextRole, hasInviteLink);
  });
}

export default invitesCalc;
