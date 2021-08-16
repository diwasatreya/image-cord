const Fetch = require("node-fetch");
const randoms = require('../JSON/random.json')

async function Blush(options = {}) {
  let random = randoms.random[Math.floor((Math.random() * randoms.random.length))];


    const image = (`https://purrbot.site/img/sfw/blush/gif/blush_${random}.gif`);

    return image;
};


module.exports = {
    Blush
};