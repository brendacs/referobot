import commands from './commands/commands.js';

const msgParser = (bot) => {

  bot.on('message', (msg) => {
    const string = msg.content;
    const cmds = ['help', 'invites', 'updateme'];

    if (msg.toString().substring(0, 1) === '>') { // if prefix is used
      const args = msg.toString().substring(1).split(' ');
      const cmd = args[0];
      commands(bot, msg, cmd);
    } else if (msg.mentions.users.has('396189412867833856')) { // if bot is mentioned
      const args = msg.toString().split(' ');
      const cmd = args[1];
      commands(bot, msg, cmd);
    }
  });
}

export default msgParser;
