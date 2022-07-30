# Twitch-Auto-Lurk-Bot

A straightforward bot that auto lurks for you, and gains watch time on your account.

# Table Of Contents - Windows Version
* [Requirements - Windows Version](#requirements-windows-version)
* [Installation - Windows Version](#installation-windows-version)
* [Configuration - Windows Version](#configuration-windows-version)
* [Startup - Windows Version](#startup-windows-version)
* [License](#license)

# Table Of Contents - Raspberrypi Version
* [Requirements - Raspberrypi Version](#requirements-raspberrypi-version)
* [Installation - Raspberrypi Version](#installation-raspberrypi-version)
* [Configuration - Raspberrypi Version](#configuration-raspberrypi-version)
* [Run 24/7 - Raspberrypi Version](#run-247-raspberrypi-version)
* [License](#license)

## Requirements Windows Version

- [Node latest version](https://nodejs.org/en/download/)
- [tmi.js](https://tmijs.com)

  npm i tmi.js
- [Twitch OAuth Token](https://twitchapps.com/tmi/)

## Installation Windows Version

  1. Download the zip file, and extract it to your **desktop**! 
  2. Go to [configuration](#configuration-windows-version)!
  
## Configuration Windows Version

  1. Open the config file in the src folder! ( windows folder... ) (**Use Notepad or any coding editing software**)
  2. Paste your OAuth Token into the "OAUTH_TOKEN": " HERE " field!
  3. Paste your Twitch username into the "BOT_USERNAME": " HERE " field!
  4. Save the file... CTRL+S
  5. Open the index.js file in the src folder ( windows folder... ) (**Use Notepad or any coding editing software**)
  6. Paste the channels you wanted to auto-lurk like [this](https://ibb.co/vdBn4NX) into the channels field!
  7. Save the file... CTRL+S
  8. Open the bot.bat file in the src folder ( windows folder... )
  9. and enjoy it working ( should say - Bot Connected on "your account name" account! - Lurking: Enabled )
  10. also, to make sure it's fully working go into one of the channels you specified, and type !1 
  
## Startup Windows Version

  well if you are a noob, and don't have a raspberry pi.. joking
  
  Here is how to run the bot on startup, and 24/7 (terminal window will be open 24/7)
  
  1. Open the bot.bat file in the src folder ( windows folder... )
  2. Delete the "& ::" and place your username of your pc in the YOUR USERNAME place like [this](https://ibb.co/Qp0b3K7)
  3. Save the file... CTRL+S
  4. Press the Windows logo key + R, type shell:startup, then select OK. This opens the Startup folder.
  5. Copy and paste the bot.bat in the src ( windows folder... ) to the startup folder.
  6. Congrats man
  
## Requirements Raspberrypi Version

- [Node latest version](https://nodejs.org/en/download/)
- [tmi.js](https://tmijs.com)

  npm i tmi.js
- [Twitch OAuth Token](https://twitchapps.com/tmi/)

## Installation Raspberrypi Version

```
# Clone the repository
git clone https://github.com/josephistired/Twitch-Auto-Lurk-Bot

# Enter into the directory
cd Twitch-Auto-Lurk-Bot/Raspberry\ Pi\ Version/src/

# Change the Configuration - See below
nano config.json

```

## Configuration Raspberrypi Version

  1. Paste your OAuth Token into the "OAUTH_TOKEN": " HERE " field!
  2. Paste your Twitch username into the "BOT_USERNAME": " HERE " field!
  3. Save the file... CTRL+S THEN CTRL+X
  ```
  # We need to change some things in here before the bot works
  4. nano index.js
  
  ```
  5. Paste the channels you wanted to auto-lurk like [this](https://ibb.co/vdBn4NX) into the channels field!
  6. Save the file... CTRL+S THEN CTRL+X
  ```
  #  and enjoy it working ( should say - Bot Connected on "your account name" account! - Lurking: Enabled )
  7. node .
  
  ```
  8. also, to make sure it's fully working go into one of the channels you specified, and type !1 

## Run 24/7 Raspberrypi Version

The great thing about a Raspberry Pi is that it can be running 24/7. If you would to run this bot 24/7, you can simply run the following commands in the terminal:

```

# Enter into the directory
cd Twitch-Auto-Lurk-Bot/Raspberry\ Pi\ Version/src/

# Run nohup
nohup node .

```

# License 

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
