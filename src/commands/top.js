import Discord from 'discord.js';

const top = (bot, msg, cmd, subcmd) => {
  const richEmbed = new Discord.RichEmbed();

  let allInvites = msg.guild.fetchInvites()
    .then(result => {
      let sortedInvites = result.array().sort((a, b) => {
        if (a.uses === b.uses) return 0;
        // sort a to lower index than b if a.uses > b.uses
        return a.uses > b.uses ? -1 : 1;
      });

      let largest = subcmd > sortedInvites.length ? sortedInvites.length : subcmd;
      let number = largest > 10 ? 10 : largest;
      let completeString = '';
      for (let i = 0; i < number; i++) {
        let rankString = `${i+1}. Invites: ${sortedInvites[i].uses} - ${sortedInvites[i].inviter.username} \n`;
        completeString += rankString;
      }
      if (subcmd > 10) {
        msg.channel.send({
          embed: richEmbed
                  .setColor('#ffffff')
                  .setDescription(`The maximum number is 10. \nHere are the top 10:`)
        });
      }
      msg.channel.send({
        embed: richEmbed
                .setColor('#ffffff')
                .setDescription(`${completeString}`)
      });
    });
}

export default top;
