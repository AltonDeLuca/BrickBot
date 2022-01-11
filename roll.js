const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Replies with a random number from 1-100!'),
	async execute(interaction) {
        floatName = (Math.random() * 100).toFixed(0);
		await interaction.reply(`You Rolled: ${floatName}`);
	},
};
