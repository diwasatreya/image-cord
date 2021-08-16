const Fetch = require("node-fetch");
const randoms = require('../JSON/random.json')

async function Eevee(options = {}) {
  let random = randoms.random[Math.floor((Math.random() * randoms.random.length))];


    const image = (`https://purrbot.site/img/sfw/eevee/gif/eevee_${random}.gif`);

    return image;
};


module.exports = {
    Eevee
};