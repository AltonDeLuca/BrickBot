
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Intents } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('justblaze')
		.setDescription('BALZE'),
	async execute(interaction) {
		const chan = interaction.channel;
		await chan.send('JUST BLAZE!');

		
	},
};
