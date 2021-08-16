const Fetch = require("node-fetch");
const randoms = require('../JSON/random.json')

async function Lick(options = {}) {
  let random = randoms.random[Math.floor((Math.random() * randoms.random.length))];


    const image = (`https://purrbot.site/img/sfw/lick/gif/lick_${random}.gif`);

    return image;
};


module.exports = {
    Lick
};