import helpCmd from './help.js';
import invitesCalcCmd from './invitesCalc.js';
import top from './top.js';

const commands = (bot, msg, cmd, subcmd) => {
  let currChannel = msg.channel.name;
  if (currChannel !== 'referral-check' && currChannel !== 'testing') {
    return;
  } else {
    if (cmd === 'help') helpCmd(bot, msg, cmd);
    else if (cmd === 'invites' || cmd === 'updateme') invitesCalcCmd(bot, msg, cmd);
    else if (cmd === 'top' && subcmd) top(bot, msg, cmd, subcmd);
    else return;
  }
}

export default commands;
