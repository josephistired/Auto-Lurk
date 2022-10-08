const tmi = require("tmi.js");
const { OAUTH_TOKEN, BOT_USERNAME } = require("./config.json");
const options = {
  connection: {
    reconnect: true,
    secure: true,
  },
  identity: {
    username: BOT_USERNAME,
    password: OAUTH_TOKEN,
  },
  channels: [""], // ADD CHANNELS HERE YOU WANT TO LURK... with 'channel name', 'channel name' and so on! NO SPACES BETWEEN '' AND CHANNEL NAME! CORRECT - 'TEST'! WRONG ' TEST ' !
};

let client = new tmi.client(options);
client.connect();

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

client.on("connected", (connection) => {
  console.log(`Bot Connected on ${BOT_USERNAME} account! - Lurking: Enabled`);
});

client.on("message", (channel, tags, message, self, user) => {
  if (message.toLowerCase() === "!1") {
    sleep(1000).then(() => {
      client.say(
        channel,
        `Bot Connected on ${BOT_USERNAME} account! - Lurking: Enabled`
      );
    });
  }
});

client.on("message", async (channel, context, message) => {
  console.log("Message Sent:", {
    channel,
    user: context.username,
    message,
  });
});
