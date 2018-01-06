import commands from './commands/commands.js';

const msgParser = (bot) => {

  bot.on('message', (msg) => {
    const string = msg.content;
    const cmds = ['help', 'invites', 'top', 'membercount', 'set'];

    if (msg.toString().substring(0, 1) === '>') { // if prefix is used
      const args = msg.toString().substring(1).split(' ');
      const cmd = args[0];
      const subcmd = args[1];
      commands(bot, msg, cmd, subcmd);
    } else if (msg.mentions.users.has(bot.user.id)) { // if bot is mentioned
      const args = msg.toString().split(' ');
      const cmd = args[1];
      const subcmd = args[2];
      commands(bot, msg, cmd, subcmd);
    }
  });
}

export default msgParser;
