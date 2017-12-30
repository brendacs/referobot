import helpCmd from './help.js';
import invitesCalcCmd from './invitesCalc.js';

const commands = (bot, msg, cmd) => {
  let currChannel = msg.channel.name;
  if (currChannel !== 'referral-check' && currChannel !== 'testing') {
    return;
  } else {
    if (cmd === 'help') helpCmd(bot, msg, cmd);
    else if (cmd === 'invites' || cmd === 'updateme') invitesCalcCmd(bot, msg, cmd);
  }
}

export default commands;
