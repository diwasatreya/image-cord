const Fetch = require("node-fetch");
const randoms = require('../JSON/random.json')

async function Cuddle(options = {}) {
  let random = randoms.random[Math.floor((Math.random() * randoms.random.length))];


    const image = (`https://purrbot.site/img/sfw/cuddle/gif/cuddle_${random}.gif`);

    return image;
};


module.exports = {
    Cuddle
};