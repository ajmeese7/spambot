const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
client.config = config;

console.log("Ready to level up!");

<<<<<<< HEAD
try {
  client.on("message", async message => {
    const prefix = config.prefix;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (message.author.id !== client.user.id || message.content.indexOf(client.config.prefix) !== 0) return;

    if (command === "spam") {
      var count = 1; // Number of messages sent (modified by sendSpamMessage)
      var maxMessages = 10000; // Change based on how many messages you want sent

      function sendSpamMessage() {
        // You could modify this to send a random string from an array (ex. a quote), create a
        // random sentence by pulling words from a dictionary file, or to just send a random
        // arrangement of characters and integers. Doing something like this may help prevent
        // future moderation bots from detecting that you sent a spam message.
=======
client.on("message", async message => {
  const prefix = config.prefix;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (message.author.id !== client.user.id || message.content.indexOf(client.config.prefix) !== 0) return;

  if (command === "spam") {
    var count = 1; // Number of messages sent (modified by sendSpamMessage)
    var maxMessages = 100000; // Change based on how many messages you want sent

    function sendSpamMessage() {
      try {
        // You could modify this to send a random string from an array (ex. a quote), create a
        // random sentence by pulling words from a dictionary file, or to just send a random
        // arrangement of characters and integers. Doing something like this may help prevent
        // future bots from detecting that you sent a spam message.
>>>>>>> master
        message.channel.send("This is spam message #" + count);

        if (count < maxMessages) {
          // If you don't care about whether the messages are deleted or not, like if you created a dedicated server
          // channel just for bot spamming, you can remove the below line and the entire prune command.
<<<<<<< HEAD
          message.channel.send("/prune");
=======
          // message.channel.send("/prune");
>>>>>>> master
          count++;

          /* These numbers are good for if you want the messages to be deleted.
           * I've also noticed that Discord pauses for about 4 seconds after you send 9
           * messages in rapid succession, and this prevents that. I rarely have any spam
<<<<<<< HEAD
           * messages slip through unless there is a level up from mee6 or Tatsumaki.
           * Mileage may vary based on internet speed. */
          let minTime = Math.ceil(2000);
          let maxTime = Math.floor(4350); // Arbitrary integer
=======
           * messages slip through unless there is a level up from mee6 or Tatsumaki. */
          let minTime = Math.ceil(2112);  // Rush RP1
          let maxTime = Math.floor(3779); // Arbitrary integer
>>>>>>> master
          let timeToWait = Math.floor(Math.random() * (maxTime - minTime)) + minTime;
          setTimeout(sendSpamMessage, timeToWait);
        } else {
          // Sends a message when count is equal to maxMessages. Else statement can be
          // modified/removed without consequence.
          message.channel.send("------------------");
          message.channel.send("I AM FINISHED!!!");
          message.channel.send("------------------");
        }
<<<<<<< HEAD
=======
      } catch (error) {
        sendSpamMessage();
>>>>>>> master
      }

      message.delete().catch(O_o=>{})
      sendSpamMessage();
    }

<<<<<<< HEAD
    if (command === "prune") {
=======
    message.delete().catch(O_o=>{})
    sendSpamMessage();
  }

  /*if (command === "prune") {
    setTimeout(prune, 1000); // Theoretically waits long enough to avoid 10008 error
    function prune() {
      // IDEA: Only delete messages sent by current user? Use other bot validation...
>>>>>>> master
      message.channel.fetchMessages()
      .then(messages => {
        let message_array = messages.array();
        message_array.length = 2;
<<<<<<< HEAD
        message_array.map(msg => msg.delete().catch(O_o => {}));
       });
    }
  });
} catch (error) {
  console.error("CAUGHT ERROR: " + error);
}
=======
        message_array.map(msg => msg.delete().catch(console.log)); //.error
       })
      .catch(console.log); //.error
    }
  }*/
});
>>>>>>> master

client.login(config.botToken);
