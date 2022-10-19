const tmi = require("tmi.js");
const { OAUTH_TOKEN, USERNAME } = require("./Configuration/config.json");
const options = {
  connection: {
    reconnect: true,
    secure: true,
  },
  identity: {
    username: USERNAME,
    password: OAUTH_TOKEN,
  },
  channels: [
    "PLACE CHANNEL HERE", // NO SPACES BETWEEN THE LETTERS AND THE QUOTE
    "PLACE CHANNEL HERE", // NO SPACES BETWEEN THE LETTERS AND THE QUOTE
    "PLACE CHANNEL HERE", // NO SPACES BETWEEN THE LETTERS AND THE QUOTE
  ],
};

let client = new tmi.client(options);
client.connect();

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

client.on("connected", (connection) => {
  console.log(`Bot Connected on ${USERNAME} account! - Lurking: Enabled`);
});

client.on("message", (channel, tags, message, self, user) => {
  if (message.toLowerCase() === "!1") {
    sleep(1000).then(() => {
      client.say(
        channel,
        `Bot Connected on ${USERNAME} account! - Lurking: Enabled`
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
