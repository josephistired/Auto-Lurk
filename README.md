# ⛔ Update
Twitch has deprecated /-chat commands through the IRC connection and they will be removed February 18, 2023. According to tmi.js website it removes a lot of chat client functionality which affects tmi.js. They state, "To resolve this and keep the nice interface of tmi.js, it will be rewritten completely to support making API calls directly. Version 1.x of tmi.js will continue to function as it normally does until and a new v2 will be available in the near future."

When v2 is released, I will look into adding new features to the bot.


# Twitch-Auto-Lurk-Bot

A straightforward bot that auto lurks for you, and gains watch time on your account based on [tmi.js](https://tmijs.com)!

## Prerequisites

1. Node.js 16.17.1 LTS or newer. **[Download](https://nodejs.org/en/)**
2. tmi.js **[Download](https://tmijs.com)** npm i tmi.js
3. Twitch OAuth Token **[Get](https://twitchapps.com/tmi/)**

## 🖥️ First Things To Do

```
git clone https://github.com/josephistired/Twitch-Auto-Lurk-Bot.git
cd Twitch-Auto-Lurk-Bot
npm install
```

## ✅ Configuration

_Edit the config.json file in the Configuration folder._

```json
{
  "OAUTH_TOKEN": "Place Your OAuth Token Here!",
  "USERNAME": "Place Your Twitch Username Here!"
}
```

_Edit the index.js file._

```js
  channels: [ "Here", "Here", "Here" ],
```

## 🖥️ Starting The Bot

After editing the index.js file, simply run the bot.bat program.

_If running this program on a raspberrypi follow all the steps above but to run the bot run the command **nohup node index.js**!_

## Run on Startup

1. Open the bot.bat file in file explorer
2. Right click, press 'create shortcut'
3. Press the Windows logo key + R, type shell:startup, then select OK. This opens the Startup folder.
4. Copy and paste the bot.bat shortcut you just made to the startup folder.

# License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
