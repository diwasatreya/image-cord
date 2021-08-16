const Fetch = require("node-fetch");
const randoms = require('../JSON/random.json');

async function Cry(options = {}) {
  let random = randoms.random[Math.floor((Math.random() * randoms.random.length))];


    const image = (`https://purrbot.site/img/sfw/cry/gif/cry_${random}.gif`);

    return image;
};


module.exports = {
    Cry
};