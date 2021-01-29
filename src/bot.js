require('dotenv').config();

const { Client, MessageEmbed } = require('discord.js');

const client = new Client();

client.on('ready', () => {
  console.log(`${client.user.username} has logged in`);
});

client.on('message', (message) => {
  if (message.author.bot) return;
  if (
    message.content === 'Hi' ||
    message.content === 'Hey' ||
    message.content === 'Hello' ||
    message.content === 'Hi!' ||
    message.content === 'Hey!' ||
    message.content === 'Hello!' ||
    message.content === 'hi' ||
    message.content === 'hey' ||
    message.content === 'hello' ||
    message.content === 'hi!' ||
    message.content === 'hey!' ||
    message.content === 'hello!'
  ) {
    message.reply("\nNamaste!🙏🏻\nWelcome to Digvijay's Server");
  }
  if (message.content === 'about' || message.content === 'About') {
    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('About the developer')
      // Set the color of the embed
      .setColor(0xff0000)
      // Set the main content of the embed
      .setDescription(
        "Namaste!🙏🏻\nI'm Digvijay Srivastava\nSophomore at NIT PATNA"
      )
      .setImage('https://i.postimg.cc/x82dZg5L/IMG-20200813-155004-731.jpg');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});

client.on('guildMemberAdd', (member) => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(
    (ch) => ch.name === 'member-log'
  );
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
