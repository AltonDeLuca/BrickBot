const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('flip')
		.setDescription('Replies with a coin flip, heads or tails'),
	async execute(interaction) {
        floatName = (Math.random() * 100).toFixed(0);
        if(floatName > 50) {
            await interaction.reply('Heads!');
        } else  {
            await interaction.reply('Tails!');
        }
		
	},
};
