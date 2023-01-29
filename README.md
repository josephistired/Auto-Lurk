# ⛔ Update
Twitch has deprecated /-chat commands through the IRC connection and they will be removed February 18, 2023. According to tmi.js website it removes a lot of chat client functionality which affects tmi.js. They state, "To resolve this and keep the nice interface of tmi.js, it will be rewritten completely to support making API calls directly. Version 1.x of tmi.js will continue to function as it normally does until and a new v2 will be available in the near future."

When v2 is released, I will look into adding new features to the bot.


# 🤖 Auto-Lurk
Auto Lurk is a bot that utilizes tmi.js to interact with Twitch's API, allowing it to automatically lurk in channels of your choosing. This bot helps you gain watch time and improve your presence within the Twitch community with ease. Freeing up your time to focus on other important things. 

# 🔧 Prerequisites
To use Auto Lurk, you need the latest Node.js LTS version and a Twitch OAuth Token. Ensure both are ready before using the bot.

* [Node.js LTS](https://nodejs.org/en/)
* [Twitch OAuth Token](https://twitchapps.com/tmi/)

# 💫 Getting Started
Now that you have all the required Prerequisites. You can move on to the next steps. By running the commands below.
```
git clone https://github.com/josephistired/Auto-Lurk.git
cd Auto-Lurk
npm install
```

# ⚙️ Configuration
Once you have cloned the bot to your local machine and have all the necessary prerequisites in place, you must now edit two files for the bot to properly  work.

[config.json](https://github.com/josephistired/Auto-Lurk/blob/main/Configuration/config.json)
```json
{
  "OAUTH_TOKEN": "Place Your OAuth Token Here!",
  "USERNAME": "Place Your Twitch Username Here!"
}
```

[index.js](https://github.com/josephistired/Auto-Lurk/blob/main/index.js)

```js
  channels: [ "Here", "Here", "Here" ]
```

## 🎊 Starting The Bot
If you have successfully completed all the previous steps, the bot should now be ready to run. If you are on Windows, you can run the bot by opening the bot.bat file. If you are a raspberrpi, simply run the command **nohup node index.js**. Once the bot is running, you can enjoy its features! If you encounter any issues, you can create a pull request for help.

# 🕑 Run on Startup
Auto Lurk is best run on a device that is on 24/7, like a Raspberry Pi. Running Auto Lurk on a device that is always on will ensure optimal results. If using Windows, you can set the bot to start on startup by following the steps below. 


1. Open the bot.bat file in file explorer
2. Right click, press 'create shortcut'
3. Press the Windows logo key + R, type shell:startup, then select OK. This opens the Startup folder.
4. Copy and paste the bot.bat shortcut you just made to the startup folder.
