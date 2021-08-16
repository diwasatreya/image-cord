const Fetch = require("node-fetch");
const randoms = require('../JSON/random.json')

async function Slap(options = {}) {
  let random = randoms.random[Math.floor((Math.random() * randoms.random.length))];


    const image = (`https://purrbot.site/img/sfw/slap/gif/slap_${random}.gif`);

    return image;
};


module.exports = {
    Slap
};