import Discord from 'discord.js';
import help from './help.js';
import invitesCalc from '../invitesCalc.js';
import top from './top.js';
import membercount from './membercount.js';
import { channelPerm } from './set.js';
import set from './set.js';

const commands = (bot, msg, cmd, subcmd) => {
  const richEmbed = new Discord.RichEmbed();
  let currChannel = msg.channel.name;
  if (channelPerm !== undefined && currChannel !== `${channelPerm}`) {
    msg.channel.send({
      embed: richEmbed
              .setColor('#ffffff')
              .setDescription(`Please use #${channelPerm} to check referrals.`)
    })
  } else {
    if (cmd === 'help') help(bot, msg, cmd);
    else if (cmd === 'invites') invitesCalc(bot, msg, cmd);
    else if (cmd === 'top' && subcmd) top(bot, msg, cmd, subcmd);
    else if (cmd === 'membercount') membercount(msg);
    else if (cmd === 'set') set(msg, cmd, subcmd);
    else return;
  }
}

export default commands;
