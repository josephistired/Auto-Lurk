# Twitch-Auto-Lurk-Bot

A straightforward bot that auto lurks for you, and gains watch time on your account.

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

## Run on Startup

1. Open the bot.bat file in file explorer
2. Right click, press 'create shortcut'
3. Press the Windows logo key + R, type shell:startup, then select OK. This opens the Startup folder.
4. Copy and paste the bot.bat shortcut you just made to the startup folder.

# License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
