import help from './help.js';
import invitesCalc from '../invitesCalc.js';
import top from './top.js';
import membercount from './membercount.js';

const commands = (bot, msg, cmd, subcmd) => {
  let currChannel = msg.channel.name;
  if (currChannel !== 'referral-check' && currChannel !== 'testing') {
    return;
  } else {
    if (cmd === 'help') help(bot, msg, cmd);
    else if (cmd === 'invites') invitesCalc(bot, msg, cmd);
    else if (cmd === 'top' && subcmd) top(bot, msg, cmd, subcmd);
    else if (cmd === 'membercount') membercount(msg);
    else return;
  }
}

export default commands;
