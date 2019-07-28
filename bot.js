const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
client.config = config;

console.log("Ready to level up!");

try {
  client.on("message", async message => {
    const prefix = config.prefix;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (message.author.id !== client.user.id || message.content.indexOf(client.config.prefix) !== 0) return;

    if (command === "spam") {
      var count = 1; // Number of messages sent (modified by sendSpamMessage)
      var maxMessages = 10000; // Change based on how many messages you want sent
      var timeToWait = null, minTime = 2000, maxTime = 4350;
      var content = null;
      var prune = false;

      // Get command line arguments
      var argLength = process.argv.length;
      for (let j = 2; j < argLength; j++) {
          // j is 2 initially to ignore `node bot.js`
          var argsLeft = j + 1 < argLength;
          var arg = process.argv[j];
          var nextArg = process.argv[j + 1];

          // All the flags require a second argument, so this only checks for flags if another arg exists
          if (argsLeft) {
            // TODO update docs and ensure proper typechecking and spit relevant error instead of running command
            if (arg == "--message") {
              content = nextArg;
            } else if (arg == "--maxMessages") {
              maxMessages = nextArg;
            } else if (arg == "--setTime") {
              timeToWait = nextArg;
            } else if (arg == "--maxTime") {
              // TODO ensure this isn't less than minTime
              maxTime = nextArg;
            } else if (arg == "--minTime") {
              // TODO ensure this isn't greater than maxTime
              minTime = nextArg;
            }
          }

          // Doesn't require a second arg
          if (arg == "--prune") {
            prune = true;
          }
      }

      function sendSpamMessage() {
        // You could modify this to send a random string from an array (ex. a quote), create a
        // random sentence by pulling words from a dictionary file, or to just send a random
        // arrangement of characters and integers. Doing something like this may help prevent
        // future moderation bots from detecting that you sent a spam message.
        if (content === null) {
          content = "This is spam message #" + count;
        }

        message.channel.send(content);

        if (count < maxMessages) {
          // If you don't care about whether the messages are deleted or not, like if you created a dedicated server
          // channel just for bot spamming, you can remove the below statement and the entire prune command.
          if (prune) {
            message.channel.send("/prune");
          }
          
          count++;

          /* These numbers are good for if you want the messages to be deleted.
           * I've also noticed that Discord pauses for about 4 seconds after you send 9
           * messages in rapid succession, and this prevents that. I rarely have any spam
           * messages slip through unless there is a level up from mee6 or Tatsumaki.
           * Mileage may vary based on internet speed. */
          if (timeToWait === null) {
            timeToWait = Math.floor(Math.random() * (maxTime - minTime)) + minTime;
          }

          setTimeout(sendSpamMessage, timeToWait);
        } else {
          // Sends a message when count is equal to maxMessages. Else statement can be
          // modified/removed without consequence.
          message.channel.send("------------------");
          message.channel.send("I AM FINISHED!!!");
          message.channel.send("------------------");
        }
      }

      message.delete().catch(O_o=>{})
      sendSpamMessage();
    }

    if (command === "prune") {
      message.channel.fetchMessages()
      .then(messages => {
        let message_array = messages.array();
        message_array.length = 2;
        message_array.map(msg => msg.delete().catch(O_o => {}));
       });
    }
  });
} catch (error) {
  console.error("CAUGHT ERROR: " + error);
}

client.login(config.botToken);
