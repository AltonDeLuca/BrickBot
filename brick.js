
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Intents } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('brick')
		.setDescription('BRICK SQUAD'),
	async execute(interaction) {
		const chan = interaction.channel;
		await chan.send('Brick!');

		
	},
};
