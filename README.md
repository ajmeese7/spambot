# Spambot

![Spambot Usage GIF](https://user-images.githubusercontent.com/17814535/33146576-5b103a6c-cf8a-11e7-8d47-cc2938138be8.gif)

Portions of this document were modified from this [awesome selfbot](https://github.com/eslachance/evie.selfbot)'s README
by @[eslachance](https://github.com/eslachance).

This selfbot's primary purpose is to level up your profile on Discord bots such as [mee6](https://github.com/cookkkie/mee6)
or [Tatsumaki](https://tatsumaki.xyz). Of course, either of those bots must be installed on the server you intend to use
this bot on for you to gain experience.

Since your Tatsumaki profile transfers across servers (unlike mee6), you can create your own server specifically for spam messages and no one (except Discord) will know. When you connect to other servers, they will just see your Tatsumaki profile and think you are a massive G.

mee6 gives out between 15-25 XP once per minute to prevent XP spamming, so you could change the times on the bot to reflect that very easily. It's as simple as changing `minTime = Math.ceil(2112)` to `minTime = Math.ceil(60000)` and doing something similar to `maxTime`. I recommend doing something like this because spamming messages too quickly can cause `DiscordAPIError`s, which can force the bot to stop. The settings on my personal bot are `minTime = Math.ceil(7500)` and `maxTime = Math.floor(11240)`. I haven't found any information about how Tatsumaki grants XP, as it is not an open-source bot, but from what I have seen I am assuming that it follows the same principles as mee6.

Please feel free to modify this in any way you like. I just ask that you give credit where credit is due (and leaving a star wouldn't hurt!). If you have any problems or suggestions, feel free to open an issue or a pull request, whichever is relevant. Just remember that this is intended to be a spambot, not a fully-functional selfbot. If you're looking for something that does awesome tricks like animating emojis or searching Google, try [SharpBot](https://github.com/RayzrDev/SharpBot) by [RayzrDev](https://github.com/RayzrDev) or the creatively-named [Discord-Selfbot](https://github.com/appu1232/Discord-Selfbot) (I'm one to talk, right?) by [appu1232](https://github.com/appu1232).

**Note:** Using a selfbot, especially one that spams servers with messages (like this one), may violate the [Discord terms
of service](https://discordapp.com/terms). If you use this, your account could be shut down. I claim no responsibility if this happens to you. You have been warned.

## Downloading

In a command prompt in your projects folder (wherever that may be), run the following:

`git clone https://github.com/ajmeese7/spambot`

Once finished:

- In the folder from where you ran the git command, run `cd spambot` and then run `npm install`
- Edit `config.json` and enter your token and desired prefix. It should look like this afterwards:

```json
{
  "botToken": "YOUR_TOKEN_HERE",
  "prefix": "YOUR_DESIRED_PREFIX_HERE"
}
```

Your prefix can be anything you want, but I tend to use the `/` because you're unlikely to ever use it on accident.

## Getting your login token

0. Open the web application
1. Use the **CTRL+SHIFT+I** keyboard shortcut.
2. This brings up the **Developer Tools**. Go to the **Application** tab
3. On the left, expand **Local Storage**, then click on the discordapp.com entry (it should be the only one).
4. Locate the entry called `token`, and copy it.

> **KEEP YOUR TOKEN SECRET, AND NEVER SHARE IT WITH ANYONE**

## Controlling the selfbot
I run the bot on Node v9.0.0, and I can't verify whether or not it will run on other versions. Before creating an issue, please ensure that you try with v9.0.0 or later. If you get any warnings when running `npm install`, try ignoring them and running the bot first to check if it works anyways.

To start the selfbot, open a command prompt from the folder containing the repository, run:

 `node bot.js`

 To stop it, click on the terminal and press **CTRL+C**, which will kill the process.
