import Discord from 'discord.js';
import customRoles from '../../roles.json';

const updateme = (msg, numberUses, numberLeft, nextRole, hasInviteLink) => {
  const richEmbed = new Discord.RichEmbed();
  let member = msg.member;

  if (member == null) {
    msg.guild.fetchMember(msg.author, true);
    member = msg.member;
  }

  let allGuildRoles = msg.guild.roles.array();
  let roles = member.roles.array();
  let updatedRole;
  let currentRoles = {};
  let updated = false;


  for (let i = 0; i < roles.length; i++) {
    currentRoles[roles[i].name] = i;
  }

  let roleNames = Object.keys(customRoles);
  let roleNums = Object.values(customRoles);

  if (numberUses >= roleNums[0]) updatedRole = `${roleNames[0]}`;
  if (numberUses >= roleNums[1]) updatedRole = `${roleNames[1]}`;
  if (numberUses >= roleNums[2]) updatedRole = `${roleNames[2]}`;
  if (numberUses >= roleNums[3]) updatedRole = `${roleNames[3]}`;
  if (numberUses >= roleNums[4]) updatedRole = `${roleNames[4]}`;
  if (numberUses >= roleNums[5]) updatedRole = `${roleNames[5]}`;

  if (updatedRole in currentRoles || numberUses < roleNums[0]) {
    updated = true;
  } else {
    for(let i = 0; i < allGuildRoles.length; i++) {
      if (updatedRole === allGuildRoles[i].name) {
        member.addRole(allGuildRoles[i]);
        break;
      }
    }
  }
}

export default updateme;
