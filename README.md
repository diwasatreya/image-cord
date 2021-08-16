<div align="center">
  <br />
  <p>
    <a href="https://discord.gg/admin"><img src="https://i.ibb.co/8DrSQ93/output-onlinepngtools.png" width="546" alt="image-cord" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/admin"><img src="https://img.shields.io/discord/708565122188312579?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/image-cord"><img src="https://img.shields.io/npm/v/image-cord.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/image-cord"><img src="https://img.shields.io/npm/dt/image-cord.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://www.patreon.com/diwasatreya"><img src="https://img.shields.io/badge/donate-patreon-F96854.svg" alt="Patreon" /></a>
  </p>
</div>



# About 
image-cord is a just a package that create images and gifs. This package is only for making discord bot commands of fun category and image category. This package is new we are adding many things.

# Installation
```
npm i image-cord
```

# Example usage
```js
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const client = new Discord.Client()
const gif = require("image-cord")


client.on("ready", () => {
  console.log("YAY! Bot is online and ready")
})

client.on("message", async message => {

  if(message.content === "!hug") {
    let image = await gif.Hug()

    let embed = new MessageEmbed()
.setColor("#87CEEB")
.setImage(image)
.setTimestamp()
  message.channel.send(embed)
  }
})

client.login(process.env.TOKEN);
```
