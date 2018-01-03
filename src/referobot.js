import Discord from 'discord.js';
import logger from 'winston';
import request from 'superagent';
import auth from '../auth.json';
import msgParser from './msgParser.js';
import express from 'express';

const app = express();

app.listen(5433, () => {
  console.log('Server started');
});

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

const TOKEN = auth.token;
// const DBOT_TOKEN = auth.dbot_token;
// const PWBOT_TOKEN = auth.pwbot_token;

const bot = new Discord.Client({
  token: TOKEN,
  autorun: true
});

bot.on('ready', (evt) => {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.user.username + ' - ' + bot.user.id);

  bot.user.setPresence({status: 'online', game: {name: `>help | ${bot.guilds.size} servers`, type: 0}});
});

msgParser(bot);

bot.login(TOKEN);
