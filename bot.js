const { Client } = require("discord.js");
const config = require('./config.json');

process.on('unhandledRejection', error => {
  console.error(
    "There was an error! Did you update the config.json file? " +
    "If you did, let me know what the error message says in an issue on the repo on GitHub. \n",
    error
  );
  process.exit();
});

console.log("Ready to level up!");
var maxMessages = 3;
var timeToWait = null, minTime = 2000, maxTime = 4350;
var content = null;
var prune = false;
setArgValues();

for (const token of config.botToken) {
  let count = 1; // Number of messages sent (modified by sendSpamMessage)
  const client = new Client();
  client.config = config;

  try {
    client.on("message", async message => {
      // Ignore message if the content doesn't apply to us
      if (message.author.id !== client.user.id || message.content.indexOf(client.config.prefix) !== 0) return;
  
      const prefix = config.prefix;
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
  
      if (command === "spam") {
        function sendSpamMessage() {
          // You could modify this to send a random string from an array (ex. a quote), create a
          // random sentence by pulling words from a dictionary file, or to just send a random
          // arrangement of characters and integers. Doing something like this may help prevent
          // future moderation bots from detecting that you sent a spam message.
  
          if (content) {
            var sentMessage = message.channel.send(content).then(m => {
              // If you don't care about whether the messages are deleted or not, like if you created a dedicated server
              // channel just for bot spamming, you can remove the below statement and the entire prune command.
              if (prune) m.delete();
            });
          } else {
            message.channel.send("This is spam message #" + count).then(m => {
              // If you don't care about whether the messages are deleted or not, like if you created a dedicated server
              // channel just for bot spamming, you can remove the below statement and the entire prune command.
              if (prune) m.delete();
            });
          }
          
          if (count < maxMessages) {
            count++;
  
            /* These numbers are good for if you want the messages to be deleted.
             * I've also noticed that Discord pauses for about 4 seconds after you send 9
             * messages in rapid succession, and this prevents that. I rarely have any spam
             * messages slip through unless there is a level up from mee6 or Tatsumaki.
             * Mileage may vary based on internet speed. */
            if (!timeToWait)
              timeToWait = Math.floor(Math.random() * (maxTime - minTime)) + minTime;
  
            setTimeout(sendSpamMessage, timeToWait);
          } else {
            // Sends a message when count is equal to maxMessages. Else statement can be
            // modified/removed without consequence.
            message.channel.send("------------------\nI AM FINISHED!!!\n------------------");
          }
        }
  
        message.delete().catch(console.error);
        sendSpamMessage();
      }
    });
  } catch (error) {
    console.error("CAUGHT ERROR =>", error);
  }

  client.login(token);
}

function setArgValues() {
  // Get command line arguments
  var argLength = process.argv.length;
  for (let j = 2; j < argLength; j++) {
    // j is 2 initially to ignore `node bot.js`
    let argsLeft = j + 1 < argLength;
    let arg = process.argv[j];
    let nextArg = process.argv[j + 1];

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
        maxTime = nextArg;
      } else if (arg == "--minTime") {
        minTime = nextArg;
      }
    } else {
      if (minTime && maxTime && minTime > maxTime) {
        console.error("minTime can't be greater than maxTime!");
        process.exit();
      }
    }

    // Doesn't require a second arg
    if (arg == "--prune") {
      prune = true;
    }
  }
}
