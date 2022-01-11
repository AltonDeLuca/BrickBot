const {Client, Intents} = require('discord.js');
const { token, friends } = require('./config.json');
const client = new Client({intents: [Intents.FLAGS.GUILDS]});
var schedule = require('node-schedule');
const { type } = require('os');
var sickEm;








client.once('ready', async () => {
 console.log(`Logged in as ${client.user.tag}!`);
    
//  try{
//      const generalChannel = await client.channels.fetch('146758525773676545');
//     var j = schedule.scheduleJob('17 10-22/12 * * *', function(){
//         generalChannel.send('BRICK SQUAAAAAAAAAAAAAAAAAAD!!!!')
//         .then(sentMessage => sentMessage.react('🧱'));

//     });
// }catch(err) {
//     console.error('async error');
    
// }
});
// client.on('message', msg => {
//     if(msg.author.username === "Altonamore" && msg.content.toLowerCase() === 'sick em boy') {
//         sickEm = true;
//         msg.reply('on it');
//     } 
//     if(msg.author.username === "Altonamore" && msg.content.toLowerCase() === 'down boy') {
//         sickEm = false;
//         msg.reply('sorry sir');
//     }
//     if(msg.author.username === 'VacheMax' && sickEm === true) {
//          msg.reply('💩');
//      }
//     if(msg.author.bot){ return}
//     if(msg.content.includes('🧱')){
//         let thisSender = friends.find(user => user.id === msg.author.id);
//         thisSender.brickCount++;
//     }
//     var stringName = msg.content.toLowerCase();
//     console.log(stringName);

//     switch(stringName) {
//         case "!getbrickcount":
//             console.log(typeof msg.author.id);
//             let thisSender = friends.find(thisSender => thisSender.id === msg.author.id);
//             console.log(thisSender);
//             if(thisSender != undefined){
//                 msg.channel.send(thisSender.brickCount);
//             }
//         break;
//         case "!flip":
//             var num = Math.random();
//             if (num >= 0.5) {
//                 msg.channel.send("heads");
//             } else msg.channel.send('tails');
//         break;

//         case "!brick":
//             msg.channel.send('BRICK')
//                 .then(sentMessage => {
//             sentMessage.react('🧱')
//                 .catch(console.error)
//                 });
//         break;
//         case "!roll":
//             var num = (Math.random() * 100) + 1;
//             num = Math.floor(num).toString();
//             msg.channel.send(num);
//         break;
//         case "!gamble":
//         var num = (Math.random() * 100) + 1;
//         num = Math.floor(num);

//         var num1 = (Math.random() * 100) + 1;
//         num1 = Math.floor(num1);
//         if(num > num1) {
//             msg.channel.send("your roll: " + num);
//             msg.channel.send("bot roll: " + num1);
//             msg.channel.send("You Win!");
//         } else if (num == num1) {
//             msg.channel.send("your roll: " + num);
//             msg.channel.send("bot roll: " + num1);
//             msg.channel.send('Tie');
//         } else {
//             msg.channel.send("your roll: " + num);
//             msg.channel.send("bot roll: " + num1);
//             msg.channel.send('I Win!');
//         }
//         break;
        
//     }
//     });

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
    }});

    client.login(token);
