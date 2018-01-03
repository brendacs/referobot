const checkPerms = (msg) => {
  checkNull(msg);
  let admin = msg.member.hasPermission('ADMINISTRATOR');
  let mod = msg.member.hasPermission('MANAGE_ROLES');
  return admin || mod;
}

// insert null member into cache
const checkNull = (msg) => {
  if (msg.member == null) {
    msg.guild.fetchMember(msg.author, true);
  }
}

export default checkPerms;
