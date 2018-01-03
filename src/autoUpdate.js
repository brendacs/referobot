import invitesCalc from './invitesCalc'

const autoUpdate = (bot, member) => {
  console.log('Updating roles...');
  let members = member.guild.members.array();
  for (let i = 0; i < members.length; i++) {
    invitesCalc(bot, null, null, members[i].id, members[i]);
  }
}

export default autoUpdate;
