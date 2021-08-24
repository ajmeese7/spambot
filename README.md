<p align="center">
  <h1 align="center">😈 Spambot 😈</h1>
</p>

<p align="center">
  <a href="https://github.com/ajmeese7/spambot/search?l=javascript">
    <img src="https://img.shields.io/badge/language-javascript-blue?color=FF69B4" alt="JavaScript" />
  </a>
  <a href="https://github.com/ajmeese7/spambot/blob/master/LICENSE.md">
    <img src="https://img.shields.io/github/license/ajmeese7/spambot" alt="License" />
  </a>
  <a href="https://github.com/ajmeese7/spambot/stargazers">
    <img src="https://img.shields.io/github/stars/ajmeese7/spambot" alt="Stars" />
  </a>
  <a href="https://github.com/ajmeese7/spambot/network/members">
    <img src="https://img.shields.io/github/forks/ajmeese7/spambot" alt="Forks" />
  </a>
  <a href="https://github.com/ajmeese7/spambot/stargazers">
    <img src="https://img.shields.io/static/v1?label=%F0%9F%8C%9F&message=If%20Useful&style=style=flat&color=BC4E99" alt="Leave a Star!"/>
  </a>
</p>

<p align="center">
  <img alt="Spambot Usage GIF" src="https://user-images.githubusercontent.com/17814535/33146576-5b103a6c-cf8a-11e7-8d47-cc2938138be8.gif">
</p>

This selfbot's primary purpose is to level up your profile on Discord bots such as 
[mee6](https://github.com/cookkkie/mee6) or [Tatsumaki](https://tatsumaki.xyz). 
Of course, either of those bots must be installed on the server you intend to use 
this bot on for you to gain experience.

Since your Tatsumaki profile transfers across servers (unlike mee6), you can create your 
own server specifically for spam messages and no one (except Discord) will know. When 
you connect to other servers, they will just see your Tatsumaki profile and think you're 
one cool cat.

mee6 gives out between 15-25 XP once per minute to prevent XP spamming, so you could change the times on the bot to reflect that very easily. It's as simple as changing `minTime = Math.ceil(2112)` to `minTime = Math.ceil(60000)` and doing something similar to `maxTime`. I recommend doing something like this because spamming messages too quickly can cause `DiscordAPIError`s, which can force the bot to stop. The settings on my personal bot are `minTime = Math.ceil(7500)` and `maxTime = Math.floor(11240)`. Tatsumaki only grants XP once every two minutes, so if you are only planning on targeting XP gain on that bot, you can set the time between messages to two minutes and one second (in milliseconds).

Please feel free to modify this in any way you like. I just ask that you give credit where credit is due (and leaving a star wouldn't hurt!). If you have any problems or suggestions, feel free to open an issue or a pull request, whichever is relevant. Just remember that this is intended to be a spambot, not a fully-functional selfbot. If you're looking for something that does awesome tricks like animating emojis or searching Google, try [SharpBot](https://github.com/RayzrDev/SharpBot) by [RayzrDev](https://github.com/RayzrDev) or the creatively-named [Discord-Selfbot](https://github.com/appu1232/Discord-Selfbot) (I'm one to talk, right?) by [appu1232](https://github.com/appu1232).

**Note:** Using a selfbot, especially one that spams servers with messages (like this one), may violate the [Discord terms
of service](https://discordapp.com/terms). If you use this, your account could be shut down. I claim no responsibility if this happens to you. You have been warned.

## Downloading

In a command prompt in your projects folder (wherever that may be), run the following:

`git clone https://github.com/ajmeese7/spambot`

Once finished:

- Ensure you have NodeJS installed on your PC by running `npm`. If not, Google how to install it and do that now
- In the folder from where you ran the git command, run `cd spambot` and then run `npm install`
- Edit `config.json` and enter your token and desired prefix. It should look like this afterwards:

```json
{
  "botToken": [ "YOUR_TOKEN_HERE", "if you want multiple accounts, put any other tokens here" ],
  "prefix": "YOUR_DESIRED_PREFIX_HERE"
}
```

Your prefix can be anything you want, but I tend to use the `/` because you're unlikely to ever use it on accident.
If you don't plan to use more than one account, be sure to remove the second string!

## Getting your login token

Go to [this link](https://github.com/Tyrrrz/DiscordChatExporter/wiki/Troubleshooting#my-token-is-disappearing-too-quickly-i-cant-copy-it) and follow the instructions
to get your login token.

> **KEEP YOUR TOKEN SECRET, AND NEVER SHARE IT WITH ANYONE**

## Controlling the selfbot
I run the bot on Node v9.0.0, and I can't verify whether or not it will run on other versions. Before creating an issue, please ensure that you try with v9.0.0 or later. If you get any warnings when running `npm install`, try ignoring them and running the bot first to check if it works anyways.

To start the selfbot, open a command prompt from the folder containing the repository, run:

 `node bot.js`

 To stop it, click on the terminal and press **CTRL+C**, which will kill the process.

## Command Flags
For users who want easy control over the bot without modifying any code, this is for you.

- `--message "Your message here"` will change the text that is spammed
- `--maxMessages 100` will stop the bot after 100 messages are sent
- `--setTime 1000` makes the message send exactly every 1000 milliseconds, or every second
- `--minTime 2000` sets minTime to 2 seconds, which will be the minimum amount of time that passes between each message sending
- `--maxTime 5000` sets maxTime to 5 seconds, which will be the maximum amount of time that passes between each message sending
- `--prune` will delete the messages immediately after they are sent

A full example command I used is `node bot.js --message "testing new flags" --maxMessages 4 --setTime 2500 --prune`.

**NOTE:** using the `setTime` flag will override minTime and maxTime, so attempting to use both methods will be pointless. Also keep in mind that setting times that are very small can cause unexpected behavior in Discord, such as deleting the wrong messages and not deleting at all.

## Stargazers

[![Stargazers over time](https://starchart.cc/ajmeese7/spambot.svg)](https://starchart.cc/ajmeese7/spambot)
