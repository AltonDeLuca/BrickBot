
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Intents } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gareface')
		.setDescription('yktfv'),
	async execute(interaction) {
		const chan = interaction.channel;
        //const gareface1 = client.cache;
        console.log(gareface1);
		await chan.send(`\:gareface1:\:gareface2:`);
        await chan.send('\:gareface3:\:gareface4:');

		
	},
};
