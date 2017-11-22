# Spambot

![Spam Usage GIF](https://user-images.githubusercontent.com/17814535/33146576-5b103a6c-cf8a-11e7-8d47-cc2938138be8.gif)

Portions of this document were modified from this [awesome selfbot](https://github.com/eslachance/evie.selfbot)'s README
by @[eslachance](https://github.com/eslachance).

This selfbot's primary purpose is to level up your profile on Discord bots such as [mee6](https://github.com/cookkkie/mee6)
or [Tatsumaki](https://tatsumaki.xyz). Of course, either of those bots must be installed on the server you intend to use
this bot on for you to gain experience.

Since your Tatsumaki profile transfers across servers (unlike mee6), you can create your own server specifically for spam messages
and no one (except Discord) will know. When you connect to other servers, they will just see your Tatsumaki profile and think you are
a massive G.

Also, just so you don't freak out if this happens to you, Tatsumaki usually doesn't give you XP for every message when spamming
like mee6 does. Their bot is a little more stingy about distributing experience points. Of course, now that I'm publishing this, they
may implement stricter measures to prevent granting XP to spammers, but that's a problem for another time.

Please feel free to modify this in any way you like. I just ask that you give credit where credit is due (and leaving a star wouldn't
hurt!). If you have any problems or suggestions, feel free to open an issue or a pull request, whichever is relevant. Just remember that
this is intended to be a spambot, not a fully-functional selfbot. If you're looking for something that does awesome tricks like animating
emojis or searching Google, try [SharpBot](https://github.com/RayzrDev/SharpBot) by [RayzrDev](https://github.com/RayzrDev) or the
creatively-named [Discord-Selfbot](https://github.com/appu1232/Discord-Selfbot) (I'm one to talk, right?) by [appu1232](https://github.com/appu1232).

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

0. Open either the web application or the installed Discord app
1. Use the **CTRL+SHIFT+I** keyboard shortcut.
2. This brings up the **Developer Tools**. Go to the **Application** tab
3. On the left, expand **Local Storage**, then click on the discordapp.com entry (it should be the only one).
4. Locate the entry called `token`, and copy it.

> **KEEP YOUR TOKEN SECRET, AND NEVER SHARE IT WITH ANYONE**

## Controlling the selfbot

To start the selfbot, open a command prompt from the folder containing the repository, run:

 `node bot.js`

 To stop it, click on the terminal and press **CTRL+C**, which will kill the process.
